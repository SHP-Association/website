import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// Dynamic base path: '/' for Vercel root domains, '/website/' for GitHub Pages subpath
const base = process.env.VERCEL ? '/' : (process.env.NODE_ENV === 'production' ? '/website/' : '/')

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
