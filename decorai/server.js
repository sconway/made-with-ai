import express from 'express';
import fetch from 'node-fetch';
import FormDataLib from 'form-data';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3001;

// CORS configuration
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? process.env.ALLOWED_ORIGIN || '*'
    : ['http://localhost:5173', 'http://localhost:4173', 'http://localhost:4174'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '50mb' }));

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

// Feng Shui Image Analysis endpoint — analyzes an imported floor plan image
// and generates a new image with improved feng shui furniture layout
app.post('/api/feng-shui-image', async (req, res) => {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'OpenAI API key not configured' });
    }

    const { imageBase64 } = req.body;
    if (!imageBase64) {
      return res.status(400).json({ error: 'Image data is required' });
    }

    console.log('Starting feng shui image analysis...');

    // Step 1: Analyze the floor plan with GPT-4o vision
    const analysisResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: `You are an expert feng shui consultant analyzing floor plan images. Return ONLY valid JSON (no markdown, no code fences).

Analyze the floor plan image and provide:
1. A feng shui score (1-10)
2. A summary of the current feng shui
3. Text-based suggestions for furniture rearrangement
4. A detailed image editing prompt that describes the improved floor plan

CRITICAL RULES:
- Walls, doors, and windows must NEVER be moved or changed
- Only suggest rearranging furniture
- The edit prompt must describe the EXACT same room layout (same walls, doors, windows, same style) but with furniture rearranged to better positions
- Be specific about where furniture should move

Return this JSON:
{
  "overallScore": <1-10>,
  "summary": "<brief feng shui assessment>",
  "suggestions": [
    {
      "furnitureName": "<name of item>",
      "currentPosition": "<where it is now>",
      "suggestedPosition": "<where it should go>",
      "principle": "<feng shui principle>",
      "description": "<what to change and why>",
      "priority": "high" | "medium" | "low"
    }
  ],
  "editPrompt": "<A detailed prompt for editing this exact floor plan image. Describe the same room with identical walls, doors, windows, floor, and art style, but with furniture rearranged per your suggestions. Mention each piece of furniture and its new position. Start with: 'Edit this floor plan to rearrange the furniture for better feng shui while keeping all walls, doors, and windows in place.'>"
}`
          },
          {
            role: 'user',
            content: [
              { type: 'image_url', image_url: { url: imageBase64, detail: 'high' } },
              { type: 'text', text: 'Analyze this floor plan for feng shui. Provide improvement suggestions and an edit prompt.' }
            ]
          }
        ],
        max_tokens: 4096,
        temperature: 0.3
      })
    });

    if (!analysisResponse.ok) {
      const err = await analysisResponse.json().catch(() => ({}));
      console.error('GPT-4o analysis error:', err);
      return res.status(analysisResponse.status).json({ error: err.error?.message || 'Analysis failed' });
    }

    const analysisData = await analysisResponse.json();
    const analysisContent = analysisData.choices?.[0]?.message?.content;

    let analysis;
    try {
      const jsonStr = analysisContent.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      analysis = JSON.parse(jsonStr);
    } catch (e) {
      console.error('Failed to parse feng shui analysis:', analysisContent);
      return res.status(500).json({ error: 'Failed to parse analysis response', raw: analysisContent });
    }

    console.log('Feng shui analysis complete. Score:', analysis.overallScore);
    console.log('Edit prompt:', analysis.editPrompt?.substring(0, 100) + '...');

    // Step 2: Generate improved floor plan with gpt-image-1 edit endpoint
    let rawBase64 = imageBase64;
    if (rawBase64.includes(',')) {
      rawBase64 = rawBase64.split(',')[1];
    }

    const imageBuffer = Buffer.from(rawBase64, 'base64');

    const formData = new FormDataLib();
    formData.append('image[]', imageBuffer, {
      filename: 'floor-plan.png',
      contentType: 'image/png'
    });
    formData.append('model', 'gpt-image-1');
    formData.append('prompt', analysis.editPrompt || 'Rearrange the furniture in this floor plan for better feng shui. Keep all walls, doors, and windows in place.');
    formData.append('size', '1024x1024');
    formData.append('quality', 'high');

    console.log('Generating improved floor plan image...');

    const editResponse = await fetch('https://api.openai.com/v1/images/edits', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        ...formData.getHeaders()
      },
      body: formData
    });

    let newImageBase64 = null;
    if (editResponse.ok) {
      const editData = await editResponse.json();
      const b64 = editData.data?.[0]?.b64_json;
      if (b64) {
        newImageBase64 = `data:image/png;base64,${b64}`;
      }
      console.log('Image generation successful');
    } else {
      const editErr = await editResponse.json().catch(() => ({}));
      console.error('Image edit error:', editErr);
      // Continue without the generated image — still return analysis
    }

    res.json({
      overallScore: analysis.overallScore,
      summary: analysis.summary,
      suggestions: analysis.suggestions,
      newImageBase64
    });
  } catch (err) {
    console.error('Feng shui image analysis error:', err);
    res.status(500).json({ error: 'Server error during feng shui image analysis' });
  }
});

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

CRITICAL RULES:
- NEVER suggest moving, adding, or removing walls, doors, or windows
- ONLY suggest rearranging existing furniture items
- Each suggestion must reference a specific furniture item by its exact id
- Suggested positions (newX, newY) must be within room boundaries
- Suggested positions must not overlap with walls or other furniture
- Rotations must be in degrees (0, 90, 180, 270)

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
      "newX": <suggested X coordinate>,
      "newY": <suggested Y coordinate>,
      "newRotation": <suggested rotation in degrees>,
      "zoneX": <center X of the recommended zone>,
      "zoneY": <center Y of the recommended zone>,
      "zoneWidth": <width of zone>,
      "zoneHeight": <height of zone>
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
      userContent.push({
        type: 'text',
        text: `Analyze this floor plan image for feng shui. The structured data for the furniture and walls is provided below.\n\n${JSON.stringify(floorPlanData, null, 2)}\n\nProvide feng shui furniture rearrangement suggestions. Remember: walls, doors, and windows must NOT change. Only rearrange existing furniture. Use the exact furniture IDs from the data.`
      });
    } else {
      userContent.push({
        type: 'text',
        text: `Analyze this floor plan for feng shui. Here is the structured layout data:\n\n${JSON.stringify(floorPlanData, null, 2)}\n\nProvide feng shui furniture rearrangement suggestions. Remember: walls, doors, and windows must NOT change. Only rearrange existing furniture. Use the exact furniture IDs from the data. Coordinates are in pixels where ${floorPlanData.scale || 50} pixels = 1 foot.`
      });
    }

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

// Serve index.html for all other routes in production
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server running on port ${port} in ${process.env.NODE_ENV || 'development'} mode`);
}); 