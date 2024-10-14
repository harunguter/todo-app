import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~": path.resolve("src"),
    },
  },
  preview: {
    port: 3000,
  },
});
