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
const port = process.env.PORT || 3002;

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Initialize Supabase with service role key for server-side operations
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Configuration
const FREE_CREDITS = parseInt(process.env.FREE_CREDITS) || 2;
const CREDITS_PER_PURCHASE = parseInt(process.env.CREDITS_PER_PURCHASE) || 5;

// CORS configuration
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? process.env.ALLOWED_ORIGIN || '*'
    : ['http://localhost:5174', 'http://localhost:4174'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));

// Stripe webhook needs raw body, so we handle it before json middleware
app.post('/webhook/stripe', express.raw({ type: 'application/json' }), async (req, res) => {
  console.log('Webhook received!');
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
    console.log('Webhook event type:', event.type);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    console.log('Processing checkout.session.completed for session:', session.id);
    
    try {
      const userId = session.metadata.user_id;
      console.log('User ID from metadata:', userId);
      
      if (!userId) {
        console.error('No user_id in session metadata');
        return res.status(400).send('No user_id in session metadata');
      }

      // Add credits to user
      const { data: currentCredits, error: fetchError } = await supabase
        .from('user_credits')
        .select('credits')
        .eq('user_id', userId)
        .single();

      if (fetchError && fetchError.code !== 'PGRST116') {
        console.error('Error fetching user credits:', fetchError);
        return res.status(500).send('Error fetching user credits');
      }

      const currentCreditCount = currentCredits?.credits || 0;
      const newCredits = currentCreditCount + CREDITS_PER_PURCHASE;
      console.log(`Updating credits: ${currentCreditCount} + ${CREDITS_PER_PURCHASE} = ${newCredits}`);

      // Use upsert to handle case where credits record doesn't exist
      const { error: upsertError } = await supabase
        .from('user_credits')
        .upsert({ 
          user_id: userId, 
          credits: newCredits 
        }, { 
          onConflict: 'user_id' 
        });

      if (upsertError) {
        console.error('Error updating user credits:', upsertError);
        return res.status(500).send('Error updating user credits');
      }

      console.log('Credits updated successfully!');

      // Record the payment
      await supabase.from('payments').insert({
        user_id: userId,
        stripe_checkout_session_id: session.id,
        stripe_payment_intent_id: session.payment_intent,
        amount: session.amount_total,
        credits_purchased: CREDITS_PER_PURCHASE,
        status: 'completed'
      });

      console.log(`Added ${CREDITS_PER_PURCHASE} credits to user ${userId}. New total: ${newCredits}`);
    } catch (error) {
      console.error('Error processing webhook:', error);
      return res.status(500).send('Error processing webhook');
    }
  }

  res.json({ received: true });
});

app.use(express.json({ limit: '50mb' }));

// Serve static files from the dist directory in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
}

// Get user credits
app.get('/api/credits', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];
    
    // Verify the token and get user
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);
    
    if (authError || !user) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    // Get user credits
    const { data: credits, error: creditsError } = await supabase
      .from('user_credits')
      .select('credits, total_generations')
      .eq('user_id', user.id)
      .single();

    if (creditsError) {
      // If no credits record exists, create one with free credits
      if (creditsError.code === 'PGRST116') {
        const { data: newCredits, error: insertError } = await supabase
          .from('user_credits')
          .insert({ user_id: user.id, credits: FREE_CREDITS })
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
    console.error('Error in /api/credits:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Use a credit
app.post('/api/credits/use', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];
    
    // Verify the token and get user
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);
    
    if (authError || !user) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    // Get current credits
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
      return res.status(403).json({ error: 'No credits remaining', credits: 0 });
    }

    // Deduct one credit
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
    console.error('Error in /api/credits/use:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create Stripe checkout session
app.post('/api/checkout', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];
    
    // Verify the token and get user
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);
    
    if (authError || !user) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    const appUrl = process.env.APP_URL || 'http://localhost:5174';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${appUrl}?payment=success`,
      cancel_url: `${appUrl}?payment=cancelled`,
      customer_email: user.email,
      metadata: {
        user_id: user.id,
      },
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

// OpenAI API Routes
app.post('/openai/images/generations', async (req, res) => {
  try {
    const apiKey = req.headers.authorization?.split(' ')[1];
    if (!apiKey) {
      console.error('No API key provided in request');
      return res.status(401).json({ error: 'API key is required' });
    }

    const { prompt, size = '1024x1024', quality = 'standard', n = 1 } = req.body;
    
    console.log('Making request to OpenAI DALL-E 3 API');
    
    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'dall-e-3',
        prompt: prompt,
        size: size,
        quality: quality,
        n: n
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: { message: 'Unknown error' } }));
      console.error('OpenAI API error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorData
      });
      return res.status(response.status).json({ 
        error: `OpenAI API error (${response.status}): ${errorData.error?.message || 'Unknown error'}` 
      });
    }

    const data = await response.json();
    console.log('OpenAI API response received');
    res.json(data);
  } catch (error) {
    console.error('Error in /openai/images/generations:', error);
    res.status(500).json({ error: 'Failed to generate image' });
  }
});

// Image proxy endpoint to bypass CORS for OpenAI images
app.get('/proxy-image', async (req, res) => {
  try {
    const imageUrl = req.query.url;
    if (!imageUrl) {
      return res.status(400).json({ error: 'Image URL is required' });
    }

    // Only allow proxying OpenAI image URLs for security
    if (!imageUrl.startsWith('https://oaidalleapiprodscus.blob.core.windows.net/')) {
      return res.status(403).json({ error: 'Only OpenAI image URLs are allowed' });
    }

    const response = await fetch(imageUrl);
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch image' });
    }

    // Get the image data as a buffer
    const buffer = await response.buffer();
    
    // Set appropriate headers
    res.set('Content-Type', response.headers.get('content-type') || 'image/png');
    res.set('Cache-Control', 'public, max-age=86400'); // Cache for 24 hours
    res.send(buffer);
  } catch (error) {
    console.error('Error proxying image:', error);
    res.status(500).json({ error: 'Failed to proxy image' });
  }
});

// Config endpoint to provide client-side config
app.get('/api/config', (req, res) => {
  res.json({
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    creditsPerPurchase: CREDITS_PER_PURCHASE,
    priceAmount: parseInt(process.env.PRICE_AMOUNT) || 199
  });
});

// Serve index.html for all other routes in production
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`BrandWise server running on port ${port} in ${process.env.NODE_ENV || 'development'} mode`);
});
