import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3002;

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
app.use(express.json({ limit: '50mb' }));

// Serve static files from the dist directory in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
}

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

// Serve index.html for all other routes in production
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`BrandWise server running on port ${port} in ${process.env.NODE_ENV || 'development'} mode`);
});
