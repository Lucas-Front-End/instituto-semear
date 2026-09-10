import { cpSync, writeFileSync } from "node:fs";

// O IMask e carregado como script global (nao e um modulo ES), entao o Vite
// nao o inclui no bundle. Copiamos o arquivo ja minificado para o build.
cpSync("js/vendor", "dist/js/vendor", { recursive: true });

// As imagens sao referenciadas por caminho em runtime (nao passam pelo Vite),
// entao copiamos a pasta img para o build.
cpSync("img", "dist/img", { recursive: true });

// A entrada real do site fica em html/index.html. Criamos um index.html na raiz
// do build que redireciona para la, para o site abrir pelo endereco raiz
// (ex: no GitHub Pages).
const redirecionamento = `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="0; url=./html/index.html">
  <title>Instituto Semear</title>
</head>
<body>
  <p>A carregar. Se nao for redirecionado, <a href="./html/index.html">clique aqui</a>.</p>
</body>
</html>
`;
writeFileSync("dist/index.html", redirecionamento);

console.log("IMask, imagens e redirecionamento raiz gerados no dist");
