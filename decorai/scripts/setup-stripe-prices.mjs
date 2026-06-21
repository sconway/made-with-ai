/**
 * Create DecorAIt one-time token pack products/prices in Stripe and print env vars.
 *
 * Usage:
 *   STRIPE_SECRET_KEY=sk_live_... node scripts/setup-stripe-prices.mjs
 *
 * Copy the printed lines into Render (or .env) and redeploy.
 */
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

if (!process.env.STRIPE_SECRET_KEY) {
  console.error('Set STRIPE_SECRET_KEY before running this script.');
  process.exit(1);
}

const PACKS = [
  { envKey: 'STRIPE_PRICE_ID_PACK_10', name: 'DecorAIt — 10 Tokens', tokens: 10, amount: 499 },
  { envKey: 'STRIPE_PRICE_ID_PACK_20', name: 'DecorAIt — 20 Tokens', tokens: 20, amount: 999 },
  { envKey: 'STRIPE_PRICE_ID_PACK_50', name: 'DecorAIt — 50 Tokens', tokens: 50, amount: 1999 },
];

console.log('Creating Stripe products and prices...\n');

for (const pack of PACKS) {
  const product = await stripe.products.create({
    name: pack.name,
    metadata: { tokens: String(pack.tokens), app: 'decorait' },
  });

  const price = await stripe.prices.create({
    product: product.id,
    unit_amount: pack.amount,
    currency: 'usd',
  });

  console.log(`${pack.envKey}=${price.id}`);
}

console.log('\nAdd these environment variables in Render, then redeploy the decorai service.');
