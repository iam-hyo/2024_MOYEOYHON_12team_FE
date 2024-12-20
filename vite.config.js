import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],  // '@'를 '/src' 폴더로 대체
  },
  define: {
    global: {},
    'process.env': process.env,
  },
})


