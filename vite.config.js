import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path-browserify";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  resolve: {
    alias: {
      "/": path.resolve(__dirname, "./src"),
      path: "path-browserify",
    },
  },
 
});
