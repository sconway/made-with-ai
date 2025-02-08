import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/made-with-ai/snake/', // Updated to include full path
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    // Ensure clean builds
    emptyOutDir: true,
    // Optimize build
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'three': ['three']
        }
      }
    }
  },
  // Add public directory configuration
  publicDir: 'public',
  // Ensure proper asset handling
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
