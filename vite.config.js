import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves the site from /<repo>/, so built asset URLs need that
// prefix or they 404 on deploy.
//
// This must match the GitHub REPOSITORY name — which is NOT automatically the
// same as the folder name. The repo is still `whisk-and-whimsy`; if you rename
// it on GitHub, change this line to match, and nothing else.
// Moving to a custom domain or Netlify later? Set REPO to '' .
const REPO = 'whisk-and-whimsy'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // Dev stays at / so localhost is unaffected.
  base: command === 'build' && REPO ? `/${REPO}/` : '/',
  plugins: [react(), tailwindcss()],
}))
