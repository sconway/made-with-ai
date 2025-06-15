import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = 3001; // Port for our backend proxy server

// Load environment variables (optional, for local development you might use a .env file with a package like dotenv)
// require('dotenv').config(); // Uncomment if you use a .env file and the dotenv package

const REPLICATE_API_KEY = process.env.REPLICATE_KEY;

// Configure CORS to allow requests from your frontend development server
const corsOptions = {
  origin: 'http://localhost:5173', // Your frontend origin
  optionsSuccessStatus: 200 // For legacy browser support
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '50mb' })); // Middleware to parse JSON request bodies
app.use(express.urlencoded({ limit: '50mb', extended: true })); // Add urlencoded for larger form data if needed

// Middleware to check if Replicate API key is set on the server
app.use((req, res, next) => {
  if (!REPLICATE_API_KEY) {
    console.error('Replicate API key is not configured on the server (REPLICATE_KEY environment variable).');
    return res.status(500).json({ error: 'API key not configured on server. Please contact the administrator.' });
  }
  next();
});

// Endpoint to initiate a Replicate prediction
app.post('/replicate/predictions', async (req, res) => {
  const { version, input } = req.body; // apiKey is no longer expected from the client

  if (!version || !input) {
    return res.status(400).json({ error: 'Version and input are required.' });
  }

  try {
    const response = await fetch('https://api.replicate.com/v1/predictions', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${REPLICATE_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ version, input })
    });

    const data = await response.json();
    if (!response.ok) {
      console.error('Replicate API error (predictions):', data);
      return res.status(response.status).json(data);
    }
    res.json(data);
  } catch (error) {
    console.error('Error proxying to Replicate predictions:', error);
    res.status(500).json({ error: 'Failed to proxy request to Replicate predictions.' });
  }
});

// Endpoint to poll a Replicate prediction URL
app.post('/replicate/poll', async (req, res) => {
  const { predictionUrl } = req.body; // apiKey is no longer expected from the client

  if (!predictionUrl) {
    return res.status(400).json({ error: 'Prediction URL is required.' });
  }

  try {
    const response = await fetch(predictionUrl, {
      headers: {
        'Authorization': `Token ${REPLICATE_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    if (!response.ok) {
      console.error('Replicate API error (poll):', data);
      return res.status(response.status).json(data);
    }
    res.json(data);
  } catch (error) {
    console.error('Error proxying to Replicate poll:', error);
    res.status(500).json({ error: 'Failed to proxy request to Replicate poll.' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server listening on port ${PORT}`);
  console.log('CORS enabled for http://localhost:5173');
  if (!REPLICATE_API_KEY) {
    console.warn('WARNING: REPLICATE_KEY environment variable is not set. API calls will fail.');
  }
}); 