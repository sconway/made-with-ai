import { defineConfig } from 'vite'

// The API normally runs on 3001. API_PORT lets a second copy of the app (a
// preview on another port, a test run) point at its own API instead.
const apiTarget = `http://localhost:${process.env.API_PORT || 3001}`

export default defineConfig({
  server: {
    port: 5173,
    proxy: {
      '/replicate': {
        target: apiTarget,
        changeOrigin: true
      },
      '/openai': {
        target: apiTarget,
        changeOrigin: true
      },
      '/api': {
        target: apiTarget,
        changeOrigin: true
      },
      // Shared-design pages and their images (/s/<12-char id>) are rendered by
      // the server. A regex key, so it can't swallow /src/… module requests.
      '^/s/[A-Za-z0-9]{12}(/|$)': {
        target: apiTarget,
        changeOrigin: true
      }
    }
  },
  build: {
    outDir: 'dist',
    commonjsOptions: {
      include: [/node_modules/]
    }
  }
}) 