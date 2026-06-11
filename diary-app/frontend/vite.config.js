import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite configuration
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // run dev server on port 3000 (same as CRA)
  },
});
