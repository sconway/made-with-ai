import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 5173,
    proxy: {
      '/replicate': {
        target: 'http://localhost:3001',
        changeOrigin: true
      },
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true
      }
    }
  },
  build: {
    outDir: 'dist',
    commonjsOptions: {
      include: [/node_modules/]
    }
  },
  optimizeDeps: {
    include: ['@supabase/supabase-js']
  }
}) 