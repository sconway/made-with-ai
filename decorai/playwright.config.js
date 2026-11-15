import { defineConfig } from '@playwright/test';

// A port of its own, so the smoke test never collides with `npm run dev`.
const PORT = 5199;

export default defineConfig({
  testDir: './test/e2e',
  timeout: 60_000,
  retries: 0,
  reporter: 'list',
  use: {
    baseURL: `http://localhost:${PORT}`,
    // Phone-sized: this is a phone-first product, so that is the layout to guard.
    viewport: { width: 390, height: 844 },
    // PW_CHANNEL=chrome runs in the installed Google Chrome instead of
    // Playwright's own Chromium (which needs `npx playwright install chromium`).
    channel: process.env.PW_CHANNEL || undefined,
    trace: 'retain-on-failure',
  },
  webServer: {
    // The same Node that runs the tests (the shell default may be too old for Vite).
    command: `"${process.execPath}" ./node_modules/vite/bin/vite.js --port ${PORT} --strictPort`,
    url: `http://localhost:${PORT}`,
    reuseExistingServer: false,
    // Point the dev proxy at a dead port. The test answers every API call
    // itself; anything it forgets to mock fails loudly instead of reaching a
    // real server and starting a paid generation.
    env: { API_PORT: '1' },
  },
});
