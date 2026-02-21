import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  server: {
    host: true, // Listen on all network interfaces (allows access from other devices)
    port: 5173,
    proxy: {
      '/socket': {
        target: 'ws://localhost:3000',
        ws: true,
        secure: false,
        changeOrigin: true
      }
    }
  }
})
