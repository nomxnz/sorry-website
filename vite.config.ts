import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  root: path.resolve(__dirname, "client"), // ← Important! Use client as root
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
  base: "./",
  build: {
    outDir: path.resolve(__dirname, "dist"), // output folder at project root
    emptyOutDir: true
  },
});
