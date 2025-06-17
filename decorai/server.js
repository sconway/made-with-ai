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
    const apiKey = req.headers.authorization?.split(' ')[1];
    if (!apiKey) {
      console.error('No API key provided in request');
      return res.status(401).json({ error: 'API key is required' });
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
    const apiKey = req.headers.authorization?.split(' ')[1];
    if (!apiKey) {
      console.error('No API key provided in request');
      return res.status(401).json({ error: 'API key is required' });
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

// Serve index.html for all other routes in production
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server running on port ${port} in ${process.env.NODE_ENV || 'development'} mode`);
}); 