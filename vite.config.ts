import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  root: path.resolve(__dirname, "client"), // client folder is root
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
  base: "./", // important for relative paths
  build: {
    outDir: path.resolve(__dirname, "dist"), // output at project root
    emptyOutDir: true,
  },
});
