import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project site: /<repo>/
// Override with VITE_BASE_PATH. Dev server uses "/" for convenience.
const envBase = process.env.VITE_BASE_PATH
const base =
  envBase != null
    ? envBase.endsWith('/')
      ? envBase
      : `${envBase}/`
    : process.env.NODE_ENV === 'production'
      ? '/birthday/'
      : '/'

export default defineConfig({
  plugins: [react()],
  base,
})
