import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const url = process.env.SUPABASE_URL?.trim();
const key = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
console.log('SUPABASE_URL set:', !!url, '| SERVICE_ROLE set:', !!key);
const supabase = createClient(url, key);

const period = new Date().toISOString().slice(0, 7) + '-01';

// Probe 1: does the RPC exist at all? Use a random UUID (expects -2 = no sub row).
const r = await supabase.rpc('reserve_subscription_generation', {
  p_user_id: '00000000-0000-0000-0000-000000000000',
  p_period: period,
  p_limit: 50,
});
console.log('\nreserve_subscription_generation =>');
console.log('  data:', r.data);
console.log('  error:', JSON.stringify(r.error, null, 2));

// Probe 2: confirm the other new RPCs too.
for (const fn of ['consume_credit', 'increment_lifetime_generations']) {
  const rr = await supabase.rpc(fn, { p_user_id: '00000000-0000-0000-0000-000000000000' });
  console.log(`\n${fn} => data:`, rr.data, '| error:', rr.error?.message || null, rr.error?.code || '');
}
