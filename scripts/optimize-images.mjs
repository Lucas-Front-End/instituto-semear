import sharp from "sharp";
import { readdirSync, readFileSync, writeFileSync, unlinkSync } from "node:fs";
import { join } from "node:path";

// Converte as fotos JPEG do projeto para WebP, que comprime melhor com a mesma
// qualidade aparente. Redimensiona para no maximo 800px (largura usada nas tags)
// e remove o JPEG antigo. O SVG e vetorial e nao precisa. Lemos o arquivo para a
// memoria antes de processar para nao manter o handle aberto (evita lock no
// Windows/OneDrive).
const dir = "img";
const arquivos = readdirSync(dir).filter((f) => /\.jpe?g$/i.test(f));

let totalAntes = 0;
let totalDepois = 0;

for (const nome of arquivos) {
  const caminho = join(dir, nome);
  const entrada = readFileSync(caminho);
  const buffer = await sharp(entrada)
    .resize({ width: 800, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toBuffer();
  const nomeWebp = nome.replace(/\.jpe?g$/i, ".webp");
  writeFileSync(join(dir, nomeWebp), buffer);
  unlinkSync(caminho);
  totalAntes += entrada.length;
  totalDepois += buffer.length;
  console.log(
    `${nome} -> ${nomeWebp}: ${(entrada.length / 1024).toFixed(1)}KB -> ${(buffer.length / 1024).toFixed(1)}KB`
  );
}

const reducao = totalAntes ? (1 - totalDepois / totalAntes) * 100 : 0;
console.log(
  `TOTAL: ${(totalAntes / 1024).toFixed(1)}KB -> ${(totalDepois / 1024).toFixed(1)}KB (reducao de ${reducao.toFixed(0)}%)`
);
