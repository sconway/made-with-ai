import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3001;

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

// Initialize Supabase (set SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY in .env for auth)
const supabase = createClient(
  process.env.SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

// Token configuration
const FREE_TOKENS = parseInt(process.env.FREE_TOKENS) || 2;
const TOKENS_PER_PURCHASE = parseInt(process.env.TOKENS_PER_PURCHASE) || 5;
const SUBSCRIPTION_DAILY_LIMIT = parseInt(process.env.SUBSCRIPTION_DAILY_LIMIT) || 50;

// In-memory daily generation tracker for subscription users: userId -> { count, date }
const subscriptionDailyUsage = new Map();

// Subscription configuration
const SUBSCRIPTION_PRICE_ID = process.env.STRIPE_SUBSCRIPTION_PRICE_ID || '';

// CORS configuration
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? process.env.ALLOWED_ORIGIN || '*'
    : ['http://localhost:5173', 'http://localhost:4173', 'http://localhost:4174'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));

// ── Stripe webhook (raw body required — must come before express.json) ────────
app.post('/webhook/stripe', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Stripe webhook signature failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // ── One-time token purchase ──────────────────────────────────────────────────
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    // Only handle one-time payments here (subscriptions are handled via subscription events)
    if (session.mode === 'payment') {
      try {
        const userId = session.metadata.user_id;
        if (!userId) {
          console.error('No user_id in Stripe session metadata');
          return res.status(400).send('No user_id in session metadata');
        }

        // Fetch current token balance
        const { data: currentCredits, error: fetchError } = await supabase
          .from('user_credits')
          .select('credits')
          .eq('user_id', userId)
          .single();

        if (fetchError && fetchError.code !== 'PGRST116') {
          console.error('Error fetching user credits:', fetchError);
          return res.status(500).send('Error fetching user credits');
        }

        const newCredits = (currentCredits?.credits || 0) + TOKENS_PER_PURCHASE;

        const { error: upsertError } = await supabase
          .from('user_credits')
          .upsert({ user_id: userId, credits: newCredits }, { onConflict: 'user_id' });

        if (upsertError) {
          console.error('Error updating user credits:', upsertError);
          return res.status(500).send('Error updating user credits');
        }

        // Record payment
        await supabase.from('payments').insert({
          user_id: userId,
          stripe_checkout_session_id: session.id,
          stripe_payment_intent_id: session.payment_intent,
          amount: session.amount_total,
          credits_purchased: TOKENS_PER_PURCHASE,
          status: 'completed'
        });

        console.log(`Added ${TOKENS_PER_PURCHASE} tokens to user ${userId}. New total: ${newCredits}`);
      } catch (error) {
        console.error('Error processing Stripe webhook:', error);
        return res.status(500).send('Error processing webhook');
      }
    }
  }

  // ── Subscription activated or renewed ────────────────────────────────────────
  if (event.type === 'customer.subscription.created' || event.type === 'customer.subscription.updated') {
    const subscription = event.data.object;
    try {
      const userId = subscription.metadata.user_id;
      if (!userId) {
        console.error('No user_id in subscription metadata');
        return res.status(400).send('No user_id in subscription metadata');
      }
      const isActive = subscription.status === 'active' || subscription.status === 'trialing';
      await supabase.from('user_subscriptions').upsert({
        user_id: userId,
        stripe_subscription_id: subscription.id,
        stripe_customer_id: subscription.customer,
        status: subscription.status,
        current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
        is_active: isActive
      }, { onConflict: 'user_id' });
      console.log(`Subscription ${subscription.status} for user ${userId}`);
    } catch (error) {
      console.error('Error processing subscription webhook:', error);
      return res.status(500).send('Error processing subscription webhook');
    }
  }

  // ── Subscription cancelled / expired ─────────────────────────────────────────
  if (event.type === 'customer.subscription.deleted') {
    const subscription = event.data.object;
    try {
      const userId = subscription.metadata.user_id;
      if (!userId) return res.status(400).send('No user_id in subscription metadata');
      await supabase.from('user_subscriptions').upsert({
        user_id: userId,
        stripe_subscription_id: subscription.id,
        stripe_customer_id: subscription.customer,
        status: 'canceled',
        current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
        is_active: false
      }, { onConflict: 'user_id' });
      console.log(`Subscription canceled for user ${userId}`);
    } catch (error) {
      console.error('Error processing subscription deletion:', error);
      return res.status(500).send('Error processing subscription deletion');
    }
  }

  res.json({ received: true });
});

app.use(express.json({ limit: '50mb' }));

// ── Token / credits routes ─────────────────────────────────────────────────────

// GET /api/credits — fetch current token balance
app.get('/api/credits', async (req, res) => {
  try {
    const user = await getAuthUser(req, res);
    if (!user) return;

    const { data: credits, error: creditsError } = await supabase
      .from('user_credits')
      .select('credits, total_generations')
      .eq('user_id', user.id)
      .single();

    if (creditsError) {
      if (creditsError.code === 'PGRST116') {
        // No record yet — create one with free tokens
        const { data: newCredits, error: insertError } = await supabase
          .from('user_credits')
          .insert({ user_id: user.id, credits: FREE_TOKENS })
          .select()
          .single();

        if (insertError) {
          console.error('Error creating credits record:', insertError);
          return res.status(500).json({ error: 'Failed to create credits record' });
        }
        return res.json({ credits: newCredits.credits, total_generations: 0 });
      }
      console.error('Error fetching credits:', creditsError);
      return res.status(500).json({ error: 'Failed to fetch credits' });
    }

    res.json({ credits: credits.credits, total_generations: credits.total_generations });
  } catch (error) {
    console.error('Error in GET /api/credits:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/credits/use — deduct one token (called AFTER a successful generation)
app.post('/api/credits/use', async (req, res) => {
  try {
    const user = await getAuthUser(req, res);
    if (!user) return;

    // Check if user has an active subscription
    const { data: subData } = await supabase
      .from('user_subscriptions')
      .select('is_active, current_period_end')
      .eq('user_id', user.id)
      .single();

    const hasActiveSubscription = subData?.is_active === true &&
      subData?.current_period_end &&
      new Date(subData.current_period_end) > new Date();

    if (hasActiveSubscription) {
      // Enforce daily generation limit for subscription users
      const today = new Date().toISOString().slice(0, 10);
      const usage = subscriptionDailyUsage.get(user.id);
      const todayCount = (usage?.date === today) ? usage.count : 0;

      if (todayCount >= SUBSCRIPTION_DAILY_LIMIT) {
        return res.status(429).json({
          error: 'Daily generation limit reached',
          limit: SUBSCRIPTION_DAILY_LIMIT,
          resets: 'tomorrow'
        });
      }

      subscriptionDailyUsage.set(user.id, { count: todayCount + 1, date: today });

      // Increment total_generations for analytics without touching credits
      const { data: creditsData } = await supabase
        .from('user_credits')
        .select('total_generations')
        .eq('user_id', user.id)
        .single();

      if (creditsData) {
        await supabase
          .from('user_credits')
          .update({ total_generations: creditsData.total_generations + 1 })
          .eq('user_id', user.id);
      }

      return res.json({
        success: true,
        subscription: true,
        dailyUsage: todayCount + 1,
        dailyLimit: SUBSCRIPTION_DAILY_LIMIT
      });
    }

    const { data: credits, error: creditsError } = await supabase
      .from('user_credits')
      .select('credits, total_generations')
      .eq('user_id', user.id)
      .single();

    if (creditsError) {
      console.error('Error fetching credits:', creditsError);
      return res.status(500).json({ error: 'Failed to fetch credits' });
    }

    if (credits.credits <= 0) {
      return res.status(403).json({ error: 'No tokens remaining', credits: 0 });
    }

    const { error: updateError } = await supabase
      .from('user_credits')
      .update({
        credits: credits.credits - 1,
        total_generations: credits.total_generations + 1
      })
      .eq('user_id', user.id);

    if (updateError) {
      console.error('Error updating credits:', updateError);
      return res.status(500).json({ error: 'Failed to update credits' });
    }

    res.json({
      success: true,
      credits: credits.credits - 1,
      total_generations: credits.total_generations + 1
    });
  } catch (error) {
    console.error('Error in POST /api/credits/use:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/checkout — create a Stripe checkout session for buying more tokens
app.post('/api/checkout', async (req, res) => {
  try {
    const user = await getAuthUser(req, res);
    if (!user) return;

    const appUrl = process.env.APP_URL || 'http://localhost:5173';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{ price: process.env.STRIPE_PRICE_ID, quantity: 1 }],
      mode: 'payment',
      success_url: `${appUrl}?payment=success`,
      cancel_url: `${appUrl}?payment=cancelled`,
      customer_email: user.email,
      metadata: { user_id: user.id }
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Failed to create checkout session', detail: error.message });
  }
});

// GET /api/subscription — check if current user has an active subscription
app.get('/api/subscription', async (req, res) => {
  try {
    const user = await getAuthUser(req, res);
    if (!user) return;

    const { data, error } = await supabase
      .from('user_subscriptions')
      .select('is_active, status, current_period_end')
      .eq('user_id', user.id)
      .single();

    if (error && error.code !== 'PGRST116') {
      console.error('Error fetching subscription:', error);
      return res.status(500).json({ error: 'Failed to fetch subscription' });
    }

    // Also guard against past-due subscriptions whose period has expired
    const isActive = data?.is_active === true &&
      data?.current_period_end &&
      new Date(data.current_period_end) > new Date();

    res.json({ isActive: !!isActive, status: data?.status || 'none' });
  } catch (error) {
    console.error('Error in GET /api/subscription:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/subscribe — create a Stripe subscription checkout session
app.post('/api/subscribe', async (req, res) => {
  try {
    const user = await getAuthUser(req, res);
    if (!user) return;

    if (!SUBSCRIPTION_PRICE_ID) {
      return res.status(500).json({ error: 'Subscription not configured', detail: 'STRIPE_SUBSCRIPTION_PRICE_ID is not set' });
    }

    const appUrl = process.env.APP_URL || 'http://localhost:5173';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{ price: SUBSCRIPTION_PRICE_ID, quantity: 1 }],
      mode: 'subscription',
      success_url: `${appUrl}?subscription=success`,
      cancel_url: `${appUrl}?subscription=cancelled`,
      customer_email: user.email,
      subscription_data: { metadata: { user_id: user.id } },
      metadata: { user_id: user.id }
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Error creating subscription session:', error);
    res.status(500).json({ error: 'Failed to create subscription session', detail: error.message });
  }
});

// Serve static files from the dist directory in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
}

// API Routes
app.post('/replicate/predictions', async (req, res) => {
  try {
    const apiKey = process.env.REPLICATE_API_KEY;
    if (!apiKey) {
      console.error('REPLICATE_API_KEY not configured on server');
      return res.status(500).json({ error: 'Server API key not configured' });
    }

    console.log('Making request to Replicate API with body:', JSON.stringify(req.body, null, 2));
    
    const response = await fetch('https://api.replicate.com/v1/predictions', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ detail: 'Unknown error' }));
      console.error('Replicate API error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorData
      });
      return res.status(response.status).json({ 
        error: `Replicate API error (${response.status}): ${errorData.detail || 'Unknown error'}` 
      });
    }

    const data = await response.json();
    console.log('Replicate API response:', data);
    res.json(data);
  } catch (error) {
    console.error('Error in /replicate/predictions:', error);
    res.status(500).json({ error: 'Failed to start prediction' });
  }
});

app.post('/replicate/poll', async (req, res) => {
  try {
    const apiKey = process.env.REPLICATE_API_KEY;
    if (!apiKey) {
      console.error('REPLICATE_API_KEY not configured on server');
      return res.status(500).json({ error: 'Server API key not configured' });
    }

    const { predictionUrl } = req.body;
    if (!predictionUrl) {
      console.error('No prediction URL provided');
      return res.status(400).json({ error: 'Prediction URL is required' });
    }

    console.log('Polling Replicate API:', predictionUrl);
    
    const response = await fetch(predictionUrl, {
      headers: {
        'Authorization': `Token ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ detail: 'Unknown error' }));
      console.error('Replicate API polling error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorData
      });
      return res.status(response.status).json({ 
        error: `Replicate API error (${response.status}): ${errorData.detail || 'Unknown error'}` 
      });
    }

    const data = await response.json();
    console.log('Replicate API polling response:', data);
    res.json(data);
  } catch (error) {
    console.error('Error in /replicate/poll:', error);
    res.status(500).json({ error: 'Failed to poll prediction' });
  }
});

// Image to SVG conversion endpoint
app.post('/api/image-to-svg', async (req, res) => {
  try {
    const apiKey = process.env.REPLICATE_API_KEY;
    if (!apiKey) {
      console.error('REPLICATE_API_KEY not configured on server');
      return res.status(500).json({ error: 'Server API key not configured' });
    }

    const { image, filename } = req.body;
    if (!image) {
      return res.status(400).json({ error: 'Image data is required' });
    }

    console.log('Starting image to SVG conversion for:', filename);

    // Use merahburam/vectorizer-v2 model - a high-quality PNG to SVG converter
    const predictionResponse = await fetch('https://api.replicate.com/v1/predictions', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        version: "710ceb70bc468d7ee6f252a16a7d9b60e9fbe24786965dbc2e808c2de38a5a32",
        input: {
          image: image,
          vectorizer: "vtracer",
          color_count: 8,
          optimize_svg: true,
          min_area: 25,
          simplify_tolerance: 1.5
        }
      }),
    });

    if (!predictionResponse.ok) {
      const errorData = await predictionResponse.json().catch(() => ({ detail: 'Unknown error' }));
      console.error('Vectorizer failed:', errorData);
      return res.status(500).json({ 
        error: 'Image vectorization failed. Please use "As Reference Image" option instead.',
        message: errorData.detail || 'Vectorization model error'
      });
    }

    const predictionData = await predictionResponse.json();
    console.log('Prediction started:', predictionData.id);

    // Poll for completion
    return await pollAndReturnSVG(predictionData, apiKey, res);

  } catch (error) {
    console.error('Error in /api/image-to-svg:', error);
    res.status(500).json({ 
      error: 'Failed to convert image to SVG',
      message: error.message
    });
  }
});

// Helper function to poll for prediction completion and return SVG
async function pollAndReturnSVG(predictionData, apiKey, res) {
  const maxAttempts = 60;
  let attempts = 0;
  
  while (attempts < maxAttempts) {
    const pollResponse = await fetch(predictionData.urls.get, {
      headers: {
        'Authorization': `Token ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    if (!pollResponse.ok) {
      const errorData = await pollResponse.json().catch(() => ({ detail: 'Unknown error' }));
      return res.status(500).json({ error: errorData.detail || 'Polling failed' });
    }

    const pollData = await pollResponse.json();
    console.log(`Poll attempt ${attempts + 1}:`, pollData.status);

    if (pollData.status === 'succeeded') {
      const output = pollData.output;
      console.log('Conversion output:', typeof output, output);
      
      // Handle different output formats
      if (typeof output === 'string') {
        if (output.startsWith('<?xml') || output.startsWith('<svg')) {
          const cleanedSvg = removeWhiteBackground(output);
          return res.json({ svg: cleanedSvg });
        } else if (output.startsWith('http')) {
          // Output is a URL, fetch the content
          console.log('Fetching SVG from URL:', output);
          const svgResponse = await fetch(output);
          if (svgResponse.ok) {
            const contentType = svgResponse.headers.get('content-type') || '';
            const text = await svgResponse.text();
            
            // Check if it's SVG content (either by content-type or by content)
            if (contentType.includes('svg') || text.includes('<svg') || text.includes('<?xml')) {
              const cleanedSvg = removeWhiteBackground(text);
              return res.json({ svg: cleanedSvg });
            } else {
              // It's not SVG, create an SVG with embedded image
              return res.json({
                svg: createSVGFromImageUrl(output),
                isEmbedded: true
              });
            }
          }
        }
      } else if (Array.isArray(output) && output.length > 0) {
        // Some models return array of outputs
        const svgUrl = output.find(url => typeof url === 'string' && url.includes('.svg'));
        if (svgUrl) {
          const svgResponse = await fetch(svgUrl);
          if (svgResponse.ok) {
            const svgText = await svgResponse.text();
            const cleanedSvg = removeWhiteBackground(svgText);
            return res.json({ svg: cleanedSvg });
          }
        }
        // Try the first URL
        const firstUrl = output[0];
        if (typeof firstUrl === 'string' && firstUrl.startsWith('http')) {
          const svgResponse = await fetch(firstUrl);
          if (svgResponse.ok) {
            const text = await svgResponse.text();
            if (text.includes('<svg') || text.includes('<?xml')) {
              const cleanedSvg = removeWhiteBackground(text);
              return res.json({ svg: cleanedSvg });
            }
          }
        }
        // Fallback to embedded image
        return res.json({
          svg: createSVGFromImageUrl(output[0]),
          isEmbedded: true
        });
      }

      // Fallback - conversion didn't produce expected output
      return res.status(500).json({ 
        error: 'Conversion completed but no SVG output was produced',
        output: JSON.stringify(output)
      });
    } else if (pollData.status === 'failed') {
      console.error('Prediction failed:', pollData.error);
      return res.status(500).json({ 
        error: 'Image conversion failed',
        message: pollData.error
      });
    }

    // Wait before next poll
    await new Promise(resolve => setTimeout(resolve, 1000));
    attempts++;
  }

  return res.status(408).json({ error: 'Conversion timed out' });
}

// Helper to create SVG with embedded image
function createSVGFromImageUrl(imageUrl) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
     width="800" height="600" viewBox="0 0 800 600">
  <image href="${imageUrl}" x="0" y="0" width="800" height="600" preserveAspectRatio="xMidYMid meet"/>
</svg>`;
}

// Helper to check if a color is white or near-white
function isWhiteColor(color) {
  if (!color) return false;
  const c = color.toLowerCase().trim();
  
  // Direct white values
  if (c === '#fff' || c === '#ffffff' || c === 'white') return true;
  
  // RGB format
  const rgbMatch = c.match(/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/);
  if (rgbMatch) {
    const [, r, g, b] = rgbMatch.map(Number);
    // Consider near-white (248+) as white too
    return r >= 248 && g >= 248 && b >= 248;
  }
  
  // RGBA format
  const rgbaMatch = c.match(/rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/);
  if (rgbaMatch) {
    const [, r, g, b, a] = rgbaMatch;
    if (parseFloat(a) < 0.1) return false; // Transparent
    return parseInt(r) >= 248 && parseInt(g) >= 248 && parseInt(b) >= 248;
  }
  
  // Hex format with near-white
  const hexMatch = c.match(/^#([a-f0-9]{6})$/);
  if (hexMatch) {
    const hex = hexMatch[1];
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    return r >= 248 && g >= 248 && b >= 248;
  }
  
  // Short hex
  const shortHexMatch = c.match(/^#([a-f0-9]{3})$/);
  if (shortHexMatch) {
    const hex = shortHexMatch[1];
    const r = parseInt(hex[0] + hex[0], 16);
    const g = parseInt(hex[1] + hex[1], 16);
    const b = parseInt(hex[2] + hex[2], 16);
    return r >= 248 && g >= 248 && b >= 248;
  }
  
  return false;
}

// Helper to remove white background from SVG
function removeWhiteBackground(svgString) {
  let processed = svgString;
  
  console.log('Processing SVG to remove white background...');
  console.log('Original SVG length:', svgString.length);
  
  // Replace ALL white fills with transparent/none
  // This is aggressive but works well for floor plans where we want outlines
  processed = processed.replace(
    /fill=["'](#fff|#ffffff|#FFF|#FFFFFF|white|rgb\(255,\s*255,\s*255\)|rgba\(255,\s*255,\s*255,\s*1\))["']/gi,
    'fill="none"'
  );
  
  // Also handle near-white colors (f8f8f8, fafafa, etc.)
  processed = processed.replace(
    /fill=["'](#f[8-9a-f]f[8-9a-f]f[8-9a-f]|#F[8-9A-F]F[8-9A-F]F[8-9A-F])["']/gi,
    'fill="none"'
  );
  
  // Remove rect elements that span the full canvas (common background pattern)
  processed = processed.replace(
    /<rect[^>]*(?:width=["']100%["']|height=["']100%["'])[^>]*\/?>/gi,
    ''
  );
  
  // Remove style background-color on svg element
  processed = processed.replace(
    /(<svg[^>]*)(style=["'][^"']*)(background(?:-color)?:\s*[^;"']+;?)([^"']*["'])/gi,
    '$1$2$4'
  );
  
  // Add transparent background style to svg element if not present
  if (!processed.includes('style=')) {
    processed = processed.replace(
      /<svg([^>]*)>/,
      '<svg$1 style="background: transparent;">'
    );
  }
  
  console.log('Processed SVG length:', processed.length);
  
  return processed;
}

// Feng Shui Analysis endpoint (structured data)
app.post('/api/feng-shui', async (req, res) => {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'OpenAI API key not configured' });
    }

    const { floorPlanData, imageBase64 } = req.body;

    const messages = [
      {
        role: 'system',
        content: `You are an expert feng shui consultant analyzing floor plans. You MUST return ONLY valid JSON (no markdown, no code fences, no explanation text outside the JSON).

LAYOUT DATA:
- Each furniture item includes its current "position" description (e.g. "top-left corner", "bottom side"), distance to the nearest wall, and distances/directions to the nearest doors and windows.
- Doors and windows include their absolute positions and facing angles.
- If an image is provided, use it as the PRIMARY reference for understanding the spatial layout.

PLACEMENT INSTRUCTIONS:
- Do NOT return raw pixel coordinates. Instead, describe WHERE to place each item using a "placement" object.
- "placement.wall" specifies which wall to place against: "top", "bottom", "left", "right", or "none" (for center/floating placement).
- "placement.alignX" specifies horizontal alignment along the wall: "left", "center", "right", or a number 0.0–1.0 for a specific position along the wall (0=left/top end, 1=right/bottom end).
- "placement.alignY" specifies vertical alignment: "top", "center", "bottom", or a number 0.0–1.0.
- "placement.offsetFeet" is an optional inward offset from the wall in feet (default 0). Use this to push furniture slightly away from the wall.
- For "none" wall placement (floating/centered), alignX and alignY position the item relative to the full room (0.0–1.0 where 0.5 is center).

CRITICAL RULES:
- NEVER suggest moving, adding, or removing walls, doors, or windows
- ONLY suggest rearranging existing furniture items that already exist in the layout
- Each suggestion must reference a specific furniture item by its exact "id" field
- Rotations must be 0, 90, 180, or 270

Return this exact JSON structure:
{
  "overallScore": <number 1-10>,
  "summary": "<brief feng shui assessment>",
  "suggestions": [
    {
      "furnitureId": "<exact id of the furniture item>",
      "furnitureName": "<name of the item>",
      "principle": "<feng shui principle being applied>",
      "description": "<what to do and why>",
      "priority": "high" | "medium" | "low",
      "placement": {
        "wall": "top" | "bottom" | "left" | "right" | "none",
        "alignX": "left" | "center" | "right" | <0.0-1.0>,
        "alignY": "top" | "center" | "bottom" | <0.0-1.0>,
        "offsetFeet": <number, optional>
      },
      "newRotation": <0 | 90 | 180 | 270>
    }
  ]
}`
      }
    ];

    const userContent = [];

    if (imageBase64) {
      userContent.push({
        type: 'image_url',
        image_url: { url: imageBase64, detail: 'high' }
      });
    }

    userContent.push({
      type: 'text',
      text: `Analyze this floor plan for feng shui.${imageBase64 ? ' The image above shows the current layout.' : ''} Here is the structured layout data with pre-computed spatial relationships:\n\n${JSON.stringify(floorPlanData, null, 2)}\n\nProvide feng shui furniture rearrangement suggestions using placement descriptions (wall, alignX, alignY, offsetFeet) — NOT pixel coordinates. Only rearrange existing furniture. Use the exact furniture IDs from the data.`
    });

    messages.push({ role: 'user', content: userContent });

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages,
        max_tokens: 4096,
        temperature: 0.3
      })
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      console.error('OpenAI API error:', err);
      return res.status(response.status).json({ error: err.error?.message || 'OpenAI API error' });
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    // Parse JSON from the response (handle possible markdown fences)
    let parsed;
    try {
      const jsonStr = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      parsed = JSON.parse(jsonStr);
    } catch (e) {
      console.error('Failed to parse feng shui response:', content);
      return res.status(500).json({ error: 'Invalid response from AI', raw: content });
    }

    res.json(parsed);
  } catch (err) {
    console.error('Feng shui analysis error:', err);
    res.status(500).json({ error: 'Server error during feng shui analysis' });
  }
});

// Config endpoint for client-side auth (Supabase URL and anon key)
app.get('/api/config', (req, res) => {
  res.json({
    supabaseUrl: process.env.SUPABASE_URL || '',
    supabaseAnonKey: process.env.SUPABASE_ANON_KEY || '',
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY || '',
    tokensPerPurchase: TOKENS_PER_PURCHASE,
    priceAmount: parseInt(process.env.PRICE_AMOUNT) || 199
  });
});

// Helper: get authenticated user from Bearer token
async function getAuthUser(req, res) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Unauthorized' });
    return null;
  }
  const token = authHeader.split(' ')[1];
  const { data: { user }, error } = await supabase.auth.getUser(token);
  if (error || !user) {
    res.status(401).json({ error: 'Invalid token' });
    return null;
  }
  return user;
}

// Get saved layout for the current user (returns latest from user_saved_layouts, or legacy user_layouts)
app.get('/api/layout', async (req, res) => {
  try {
    const user = await getAuthUser(req, res);
    if (!user) return;
    const { data: savedData, error: savedError } = await supabase
      .from('user_saved_layouts')
      .select('id, state, name')
      .eq('user_id', user.id)
      .order('updated_at', { ascending: false })
      .limit(1)
      .maybeSingle();
    if (savedError) {
      console.error('Error fetching layout:', savedError);
      return res.status(500).json({ error: 'Failed to fetch layout' });
    }
    if (savedData) return res.json({ state: savedData.state, id: savedData.id, name: savedData.name || 'Untitled layout' });
    const { data: legacyData, error: legacyError } = await supabase
      .from('user_layouts')
      .select('state')
      .eq('user_id', user.id)
      .maybeSingle();
    if (legacyError) {
      console.error('Error fetching legacy layout:', legacyError);
      return res.status(500).json({ error: 'Failed to fetch layout' });
    }
    if (!legacyData) return res.json({ state: null });
    res.json({ state: legacyData.state });
  } catch (err) {
    console.error('Error in GET /api/layout:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Save layout for the current user (updates latest in user_saved_layouts or creates one)
app.put('/api/layout', async (req, res) => {
  try {
    const user = await getAuthUser(req, res);
    if (!user) return;
    const { state, name } = req.body;
    if (state === undefined) return res.status(400).json({ error: 'state is required' });
    const layoutName = (name && String(name).trim()) || 'Untitled layout';
    const { data: existing } = await supabase
      .from('user_saved_layouts')
      .select('id')
      .eq('user_id', user.id)
      .order('updated_at', { ascending: false })
      .limit(1)
      .maybeSingle();
    const now = new Date().toISOString();
    if (existing) {
      const { error } = await supabase
        .from('user_saved_layouts')
        .update({ state, name: layoutName, updated_at: now })
        .eq('id', existing.id);
      if (error) {
        console.error('Error saving layout:', error);
        return res.status(500).json({ error: 'Failed to save layout' });
      }
      return res.json({ success: true, id: existing.id });
    }
    const { data: inserted, error: insertError } = await supabase
      .from('user_saved_layouts')
      .insert({ user_id: user.id, name: layoutName, state, updated_at: now })
      .select('id')
      .single();
    if (insertError) {
      console.error('Error saving layout:', insertError);
      return res.status(500).json({ error: 'Failed to save layout' });
    }
    res.json({ success: true, id: inserted.id });
  } catch (err) {
    console.error('Error in PUT /api/layout:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// List all saved layouts for the current user (id, name, updated_at)
app.get('/api/layouts', async (req, res) => {
  try {
    const user = await getAuthUser(req, res);
    if (!user) return;
    const { data, error } = await supabase
      .from('user_saved_layouts')
      .select('id, name, updated_at, preview_data_url')
      .eq('user_id', user.id)
      .order('updated_at', { ascending: false })
      .limit(1000);
    if (error) {
      console.error('Error fetching layouts:', error);
      return res.status(500).json({ error: 'Failed to fetch layouts' });
    }
    const list = Array.isArray(data) ? data : (data ? [data] : []);
    res.json({ layouts: list });
  } catch (err) {
    console.error('Error in GET /api/layouts:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Find a saved layout by name (for overwrite check). Returns first match by updated_at desc.
app.get('/api/layouts/by-name', async (req, res) => {
  try {
    const user = await getAuthUser(req, res);
    if (!user) return;
    const name = req.query.name;
    if (!name || typeof name !== 'string') return res.status(400).json({ error: 'name is required' });
    const trimmed = name.trim();
    if (!trimmed) return res.status(400).json({ error: 'name is required' });
    const { data, error } = await supabase
      .from('user_saved_layouts')
      .select('id, name, updated_at')
      .eq('user_id', user.id)
      .eq('name', trimmed)
      .order('updated_at', { ascending: false })
      .limit(1)
      .maybeSingle();
    if (error) {
      console.error('Error fetching layout by name:', error);
      return res.status(500).json({ error: 'Failed to fetch layout' });
    }
    if (!data) return res.status(404).json({ error: 'No layout with this name' });
    res.json(data);
  } catch (err) {
    console.error('Error in GET /api/layouts/by-name:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get one saved layout by id (full state for loading)
app.get('/api/layouts/:id', async (req, res) => {
  try {
    const user = await getAuthUser(req, res);
    if (!user) return;
    const { id } = req.params;
    const { data, error } = await supabase
      .from('user_saved_layouts')
      .select('id, name, state, updated_at')
      .eq('id', id)
      .eq('user_id', user.id)
      .maybeSingle();
    if (error) {
      console.error('Error fetching layout:', error);
      return res.status(500).json({ error: 'Failed to fetch layout' });
    }
    if (!data) return res.status(404).json({ error: 'Layout not found' });
    res.json(data);
  } catch (err) {
    console.error('Error in GET /api/layouts/:id:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create a new saved layout
app.post('/api/layouts', async (req, res) => {
  try {
    const user = await getAuthUser(req, res);
    if (!user) return;
    const { name, state, preview_data_url } = req.body;
    if (state === undefined) return res.status(400).json({ error: 'state is required' });
    const layoutName = (name && String(name).trim()) || 'Untitled layout';
    const now = new Date().toISOString();
    const row = { user_id: user.id, name: layoutName, state, updated_at: now };
    if (preview_data_url != null && typeof preview_data_url === 'string') row.preview_data_url = preview_data_url;
    const { data, error } = await supabase
      .from('user_saved_layouts')
      .insert(row)
      .select('id, name, updated_at')
      .single();
    if (error) {
      console.error('Error creating layout:', error);
      return res.status(500).json({ error: 'Failed to save layout' });
    }
    res.status(201).json(data);
  } catch (err) {
    console.error('Error in POST /api/layouts:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update a saved layout
app.put('/api/layouts/:id', async (req, res) => {
  try {
    const user = await getAuthUser(req, res);
    if (!user) return;
    const { id } = req.params;
    const { name, state, preview_data_url } = req.body;
    const updates = { updated_at: new Date().toISOString() };
    if (name !== undefined) updates.name = name;
    if (state !== undefined) updates.state = state;
    if (preview_data_url !== undefined && typeof preview_data_url === 'string') updates.preview_data_url = preview_data_url;
    const { data, error } = await supabase
      .from('user_saved_layouts')
      .update(updates)
      .eq('id', id)
      .eq('user_id', user.id)
      .select('id, name, updated_at')
      .maybeSingle();
    if (error) {
      console.error('Error updating layout:', error);
      return res.status(500).json({ error: 'Failed to save layout' });
    }
    if (!data) return res.status(404).json({ error: 'Layout not found' });
    res.json(data);
  } catch (err) {
    console.error('Error in PUT /api/layouts/:id:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete a saved layout
app.delete('/api/layouts/:id', async (req, res) => {
  try {
    const user = await getAuthUser(req, res);
    if (!user) return;
    const { id } = req.params;
    const { error } = await supabase
      .from('user_saved_layouts')
      .delete()
      .eq('id', id)
      .eq('user_id', user.id);
    if (error) {
      console.error('Error deleting layout:', error);
      return res.status(500).json({ error: 'Failed to delete layout' });
    }
    res.status(204).send();
  } catch (err) {
    console.error('Error in DELETE /api/layouts/:id:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Serve index.html for all other routes in production
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server running on port ${port} in ${process.env.NODE_ENV || 'development'} mode`);
}); 