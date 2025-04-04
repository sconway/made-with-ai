import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/made-with-ai/atoms/dist/',
  build: {
    outDir: 'dist'
  }
})
