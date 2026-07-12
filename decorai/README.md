# DecorAIt - AI-Powered Interior Design

DecorAIt is a mobile-first web application that uses AI to generate interior design concepts based on user-uploaded room photos. Whether you have an empty room or a furnished space, DecorAIt transforms _your actual room_ with furniture rearrangements or additions to help you visualize new design possibilities.

## Features

- **AI Image Transformation**: Uses advanced AI models to transform your actual room photos
- **User Authentication**: Simple login system that securely manages your sessions
- **Room Photo Upload**: Upload existing photos or take new ones directly in the app
- **Multiple Design Options**: For empty rooms, get various furniture arrangement ideas; for furnished rooms, see different ways to rearrange existing furniture
- **Compare Feature**: Easily toggle between your original photo and the AI-generated design
- **Mobile-First Design**: Optimized for use on smartphones and tablets, but works great on desktop too
- **User-Friendly Interface**: Simple step-by-step process from upload to design generation

## How It Works

1. **Sign Up/Login**: Create an account or login to access the design generation service
2. **Upload a Room Photo**: Take a picture of your room or upload an existing one
3. **Specify Room Type**: Tell the app if your room is empty or already furnished
4. **Generate Designs**: The app will transform your actual room photo with different design concepts
5. **Save Your Favorites**: Save or download designs you like

### AI Prompts

The application uses different prompts with various AI models depending on the type of room:

- **For Empty Rooms**:

  > "You are an interior designer. Given this image of an empty room, furnish it with the items that would make it more aesthetic. The furniture should be fairly common for this type of room and could include things like: couches, ottomans, coffee tables, television, lamps, paintings, etc. Ensure the color scheme is well balanced and ensure that the layout allows enough room for movement."

- **For Furnished Rooms**:
  > "You are an interior designer. Given this image of a furnished room, rearrange the furniture and items to improve the aesthetics of the room. Ensure that only the furniture and items already present in the room are used, and ensure that the layout allows enough room for movement."

## Authentication and Security

- **User Accounts**: Create an account using your email and password
- **Secure Storage**: User credentials are securely stored in the backend
- **JWT Authentication**: Uses JSON Web Tokens for secure session management
- **Privacy Focus**: Your room images are only used for generating designs and are not shared

## Running the Application

You can run DecorAIt with a single command:

```bash
# Navigate to the decorai project directory (DecorAIt app)
cd /path/to/made-with-ai/decorai

# Make the run script executable (first time only)
chmod +x run.sh

# Run the application
./run.sh
```

This will start a local web server and open the application in your default browser. The application will be available at `http://localhost:8080`.

## Stripe token packs (production)

One-time token purchases require Stripe Price IDs for each pack. The server reads:

- `STRIPE_PRICE_ID_PACK_10` — 10 tokens ($4.99)
- `STRIPE_PRICE_ID_PACK_20` — 20 tokens ($9.99)
- `STRIPE_PRICE_ID_PACK_50` — 50 tokens ($19.99)

If a price ID is missing, that pack is hidden in the UI and checkout returns an error.

To create the prices in Stripe and print the env vars:

```bash
STRIPE_SECRET_KEY=sk_live_... npm run setup:stripe-prices
```

Add the printed values in your Render dashboard (**Environment → Environment Variables**), then redeploy. See `.env.example` for the full list of secrets.

## Supabase auth (required for sign-in)

The client loads Supabase credentials from `/api/config`. Set these in `.env` locally and in Render for production:

- `SUPABASE_URL` — your project URL (Supabase dashboard → Settings → API)
- `SUPABASE_ANON_KEY` — the **anon/public** key (safe for the browser)
- `SUPABASE_SERVICE_ROLE_KEY` — service role key (server only; never expose to the client)

If either `SUPABASE_URL` or `SUPABASE_ANON_KEY` is missing, sign-in is disabled and the login form shows a configuration error.

Local development: run `npm run dev` (starts both Vite and the API server). Do not use `./run.sh` alone — it only serves static files and has no `/api/config` endpoint.

## Security & abuse prevention

Before opening the app to the public, complete this checklist:

1. **Run the SQL migrations** in the Supabase SQL editor:
   - `sql/credit_tokens_for_session.sql` (idempotent token crediting)
   - `sql/atomic_credits.sql` — **required**: makes credit/quota spending atomic so
     concurrent requests can't over-spend a user's credits or monthly cap.
2. **Enable "Confirm email"** in Supabase (Authentication → Providers → Email). The
   server also enforces this on every paid endpoint (`requireConfirmed`), so disposable
   accounts can't farm the AI providers — but the dashboard toggle should be on too.
3. **Set `ALLOWED_ORIGIN`** to your real domain in production (CORS otherwise falls
   back to `*`).
4. **Keep the Replicate model allowlist current.** The proxy only runs the models in
   `REPLICATE_ALLOWED_MODELS` (default list in `server.js`). If you add a model, add its
   version string there or via the env var — otherwise a user could otherwise invoke
   arbitrary, expensive Replicate models on your account.
5. **Tune the rate limits** (`RATE_LIMIT_*` in `render.yaml`) to your expected traffic.
   They are in-memory per-instance — if you scale to multiple instances, move the
   counters to a shared store (e.g. Redis).

What's enforced in code: auth + email-verification + per-IP/per-account rate limits on
all paid AI endpoints; a Replicate model allowlist; SSRF guards on the poll proxy
(locked to `api.replicate.com`) and on server-side image fetches (host allowlist);
atomic credit/quota accounting; Stripe webhook signature verification; and idempotent,
ownership-checked purchase fulfillment.

## Technical Architecture

This application follows a client-server architecture:

- **Frontend**: HTML, CSS, and JavaScript for the user interface
- **Backend**: RESTful API that handles authentication and image processing
- **AI Integration**: Backend processes images through AI models and returns the results
- **Security**: Authentication tokens ensure only authorized users can access the service

## Future Enhancements

- **Premium Subscription**: Unlimited design generations with priority processing
- **Style Preferences**: Select specific interior design styles
- **Room Type Selection**: Specialized designs for bedrooms, living rooms, kitchens, etc.
- **Color Palette Options**: Choose specific color schemes for your designs
- **Furniture Type Preferences**: Specify furniture styles and types you prefer
- **Saving and Sharing Collections**: Create and share design collections

## Credits

Created with AI as part of the Made With AI showcase.

## License

This project is open source and available under the MIT License.
