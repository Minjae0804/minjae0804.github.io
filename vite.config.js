import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import seo from './vite-plugin-seo.js'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    seo(),
  ],
  base: '/',
  server: {
    fs: {
      allow: ['..']
    }
  }
})