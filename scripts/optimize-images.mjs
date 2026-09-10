import sharp from "sharp";
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Comprime os JPEGs do projeto no lugar. As imagens sao exibidas com no maximo
// 800px de largura (atributo width das tags), entao redimensionamos para isso
// e reencodamos com mozjpeg. O SVG e vetorial e nao precisa.
// Lemos o arquivo para a memoria antes de processar para nao manter o handle
// aberto na hora de gravar (evita lock no Windows/OneDrive).
const dir = "img";
const arquivos = readdirSync(dir).filter((f) => /\.jpe?g$/i.test(f));

let totalAntes = 0;
let totalDepois = 0;

for (const nome of arquivos) {
  const caminho = join(dir, nome);
  const entrada = readFileSync(caminho);
  const antes = entrada.length;
  const buffer = await sharp(entrada)
    .resize({ width: 800, withoutEnlargement: true })
    .jpeg({ quality: 78, mozjpeg: true })
    .toBuffer();
  writeFileSync(caminho, buffer);
  totalAntes += antes;
  totalDepois += buffer.length;
  console.log(
    `${nome}: ${(antes / 1024).toFixed(1)}KB -> ${(buffer.length / 1024).toFixed(1)}KB`
  );
}

const reducao = (1 - totalDepois / totalAntes) * 100;
console.log(
  `TOTAL: ${(totalAntes / 1024).toFixed(1)}KB -> ${(totalDepois / 1024).toFixed(1)}KB (reducao de ${reducao.toFixed(0)}%)`
);
