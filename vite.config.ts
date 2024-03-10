import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  return {
    define: {
      globalThis: 'window'
    },
    resolve: {
      alias: {
        process: 'process/browser',
        '@': path.resolve(__dirname, 'src'),
        '@@': path.resolve(__dirname, 'src/components')
      }
    },
    plugins: [react(), nodePolyfills()],
    server: {
      port: 8899,
      host: '0.0.0.0'
    }
  }
})
