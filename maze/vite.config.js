import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/made-with-ai/maze/dist/',
  build: {
    outDir: 'dist'
  }
})
