import { cpSync } from "node:fs";

// O IMask e carregado como script global (nao e um modulo ES), entao o Vite
// nao o inclui no bundle. Copiamos o arquivo ja minificado para o build.
cpSync("js/vendor", "dist/js/vendor", { recursive: true });

// As imagens sao referenciadas por caminho em runtime (nao passam pelo Vite),
// entao copiamos a pasta img para o build.
cpSync("img", "dist/img", { recursive: true });

console.log("IMask e imagens copiados para o dist");
