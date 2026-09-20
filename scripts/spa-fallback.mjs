import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const dist = resolve('dist')
const index = resolve(dist, 'index.html')
const fallback = resolve(dist, '404.html')

if (existsSync(index)) {
  copyFileSync(index, fallback)
  console.log('Created dist/404.html for GitHub Pages SPA fallback')
} else {
  console.warn('dist/index.html not found — skip 404 fallback')
}
