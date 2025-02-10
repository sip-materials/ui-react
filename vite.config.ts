import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true, // Ensures TypeScript declaration entry is created
      outDir: "./dist/types", // Output directory for .d.ts files
      include: ["src"],
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',  // The entry file for your library
      name: 'UiReactSIP',
      fileName: (format) => `ui-react.${format}.js`,
    },
    rollupOptions: {
      // Make sure to externalize deps that are peer dependencies
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@mui/base': 'MuiBase',
        },
      },
    },
    sourcemap: true,
  }
})
