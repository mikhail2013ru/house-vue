import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@views': path.resolve(__dirname, './src/views'),
      '@router': path.resolve(__dirname, './src/router'),
      '@store': path.resolve(__dirname, './src/store'),
      '@utils': path.resolve(__dirname, './src/utils')
    }
  },

  server: {
    host: true,
    port: 5173,
    hmr: true,
    open: true
  },
  
  // build: {
  //   outDir: 'dist',
  //   assetsDir: 'assets',
  //   rollupOptions: {
  //     output: {
  //       manualChunks: {
  //         vendor: ['vue']
  //       }
  //     }
  //   }
  // },
})