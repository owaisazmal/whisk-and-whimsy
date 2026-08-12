import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // GitHub Pages serves this repo from /whisk-and-whimsy/, so built asset URLs
  // need that prefix or they 404. Dev stays at / so localhost is unaffected.
  // Moving to a custom domain or Netlify later? Set this back to '/'.
  base: command === 'build' ? '/whisk-and-whimsy/' : '/',
  plugins: [react(), tailwindcss()],
}))
