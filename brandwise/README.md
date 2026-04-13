# BrandWise

AI-powered logo and brand identity generator that creates logos, color palettes, and mood boards based on your brand description. Logos use [Replicate Recraft V4 SVG](https://replicate.com/recraft-ai/recraft-v4-svg) (native **SVG** output); color palettes and mood boards use OpenAI DALL-E 3.

## Features

- **Logo Generation**: Simple vector logos via Replicate `recraft-ai/recraft-v4-svg` (editable SVG)
- **Color Palette**: Generate complementary color schemes (DALL-E 3)
- **Mood Board**: Visual inspiration boards (DALL-E 3)
- **Simple Interface**: Just describe your brand and its use case

## Setup

1. Install dependencies:
```bash
npm install
```

2. Environment variables (see `.env` or your host’s dashboard):

   - **`OPENAI_API_KEY`** — [OpenAI](https://platform.openai.com/api-keys) for color palette and mood board images.
   - **`REPLICATE_API_TOKEN`** — [Replicate](https://replicate.com/account/api-tokens) for logo generation (`/replicate/logo` on the BrandWise server).

   Other vars (Supabase, Stripe, etc.) are unchanged from your existing setup.

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

- **Replicate API**: Logo generation as SVG ([Recraft V4 SVG](https://replicate.com/recraft-ai/recraft-v4-svg); pricing on Replicate).
- **OpenAI API**: DALL-E 3 for palette and mood board images — see [OpenAI pricing](https://openai.com/pricing).

## Technology

- Vite for build tooling
- Replicate Recraft V4 SVG for logos; OpenAI DALL-E 3 for palette and mood boards
- Vanilla JavaScript
- Canvas API for color extraction
- Express.js for API proxy server

## License

MIT
