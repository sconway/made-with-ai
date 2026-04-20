# BrandWise

AI-powered logo and brand identity generator that creates logos, color palettes, and mood boards based on your brand description. **Logos** use OpenAI **GPT Image** (`gpt-image-1.5` by default) with a **transparent PNG** via `POST /openai/images/logo`. **Palettes and mood boards** use **DALL·E 3**. The server still exposes an optional **`/replicate/logo`** route (Recraft SVG) if you set `REPLICATE_API_TOKEN` and call it directly.

## Features

- **Logo Generation**: Brand marks via OpenAI GPT Image (transparent PNG)
- **Color Palette**: Generate complementary color schemes (DALL-E 3)
- **Mood Board**: Visual inspiration boards (DALL-E 3)
- **Simple Interface**: Just describe your brand and its use case

## Setup

1. Install dependencies:
```bash
npm install
```

2. Environment variables (see `.env` or your host’s dashboard):

   - **`OPENAI_API_KEY`** — [OpenAI](https://platform.openai.com/api-keys) for logos (GPT Image), palette, and mood boards (DALL·E 3).
   - **`OPENAI_LOGO_IMAGE_MODEL`** *(optional)* — Defaults to `gpt-image-1.5`. Use `gpt-image-1` or `gpt-image-1-mini` if you prefer (must support `background: transparent` on the Images API).
   - **`REPLICATE_API_TOKEN`** *(optional)* — Only if you use the server’s `/replicate/logo` (Recraft SVG) outside the default UI.

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

- **OpenAI API**: GPT Image (e.g. `gpt-image-1.5`) for transparent logos; DALL·E 3 for palette and mood boards — see [OpenAI pricing](https://openai.com/pricing).
- **Replicate API** *(optional)*: Recraft SVG via `/replicate/logo` — see [Replicate](https://replicate.com/) if you wire that path yourself.

## Technology

- Vite for build tooling
- OpenAI GPT Image for transparent logos; DALL·E 3 for palette and mood boards; optional Replicate route for SVG experiments
- Vanilla JavaScript
- Canvas API for color extraction
- Express.js for API proxy server

## License

MIT
