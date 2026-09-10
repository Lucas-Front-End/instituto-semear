import { defineConfig } from "vite";

// A entrada do site fica em html/index.html e os caminhos sao relativos,
// por isso base: "./" para o build funcionar em qualquer subpasta (ex: GitHub Pages).
export default defineConfig({
  base: "./",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: "html/index.html",
    },
  },
});
