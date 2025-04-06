import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  server: {
    port: 5173, // Default Vite port
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
