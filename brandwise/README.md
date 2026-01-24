# BrandWise

AI-powered logo and brand identity generator that creates logos, color palettes, and mood boards based on your brand description using OpenAI's DALL-E 3.

## Features

- **Logo Generation**: Create professional logos using DALL-E 3
- **Color Palette**: Generate complementary color schemes for your brand
- **Mood Board**: Visual inspiration boards that capture your brand's essence
- **Simple Interface**: Just describe your brand and its use case

## Setup

1. Install dependencies:
```bash
npm install
```

2. Get an OpenAI API key:
   - Visit [OpenAI Platform](https://platform.openai.com/api-keys)
   - Create an account and generate an API token
   - Enter the token in the app's API Keys modal

3. Run the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Deployment to Render

1. Push your code to GitHub
2. Connect your GitHub repository to Render
3. Create a new Web Service
4. Use these settings:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Environment**: `Node`
5. Set environment variables:
   - `NODE_ENV=production`
   - `PORT` (Render will set this automatically)
6. Deploy!

The `render.yaml` file is included for easy deployment configuration.

## Usage

1. Enter your brand name
2. Enter your brand description (e.g., "A modern tech startup focused on sustainable energy solutions")
3. Describe what the brand will be used for (e.g., "Website, mobile app, business cards")
4. Click "Generate Brand Identity"
5. Wait for the AI to generate your logo, color palette, and mood board
6. Download your logo or regenerate any component as needed

## API Requirements

- **OpenAI API**: Used for DALL-E 3 image generation
- Standard quality images: $0.040 per image
- HD quality images: $0.080 per image
- Check [OpenAI pricing](https://openai.com/pricing) for details

## Technology

- Vite for build tooling
- OpenAI DALL-E 3 API for AI image generation
- Vanilla JavaScript
- Canvas API for color extraction
- Express.js for API proxy server

## License

MIT
