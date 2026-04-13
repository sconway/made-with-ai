import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 5174,
    proxy: {
      '/openai': {
        target: 'http://localhost:3002',
        changeOrigin: true
      },
      '/proxy-image': {
        target: 'http://localhost:3002',
        changeOrigin: true
      },
      '/replicate': {
        target: 'http://localhost:3002',
        changeOrigin: true
      },
      '/api': {
        target: 'http://localhost:3002',
        changeOrigin: true
      },
      '/webhook': {
        target: 'http://localhost:3002',
        changeOrigin: true
      }
    }
  },
  build: {
    outDir: 'dist'
  }
})
