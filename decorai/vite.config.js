import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 5173,
    build: {
      outDir: 'dist'
    },
    proxy: {
      '/replicate': {
        target: 'http://localhost:3001',
        changeOrigin: true
      }
    }
  }
}) 