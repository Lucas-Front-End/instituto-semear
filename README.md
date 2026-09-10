# Instituto Semear

Site de uma ONG fictícia que atua com educação e leitura em comunidades de São Paulo. O projeto é uma Single Page Application feita com HTML, CSS e JavaScript puro, sem framework.

## Sobre o projeto

O Instituto Semear apresenta os projetos sociais da organização, explica como doar e como ser voluntário e oferece um formulário de cadastro que fica salvo no navegador. A navegação acontece sem recarregar a página: o conteúdo troca conforme o endereço no hash da URL.

## Funcionalidades

- Navegação SPA por hash, com rotas para Início, Projetos e Cadastro
- Submenu que rola até a seção certa dentro da página de Projetos
- Formulário de voluntário com validação nativa dos campos
- Persistência dos cadastros no localStorage e listagem na tela
- Máscaras automáticas de CPF, telefone e CEP
- Modal de detalhes dos projetos e aviso (toast) de retorno
- Layout responsivo com design system próprio

## Tecnologias

- HTML5 semântico
- CSS3 com variáveis (design system), Grid e Flexbox
- JavaScript ES6+ em módulos (import/export)
- IMask para as máscaras dos campos
- Vite para o build de produção (bundle e minificação)
- Git e GitHub para o versionamento

## Estrutura de pastas

```
projeto-ong-ep4/
├── html/
│   └── index.html        # casca da SPA
├── css/
│   └── estilo.css        # design system e estilos
├── img/                  # imagens dos projetos
├── js/
│   ├── main.js           # ponto de entrada
│   ├── modules/          # roteador, templates, validação, storage, interações, máscaras
│   └── vendor/           # IMask
├── scripts/              # passos de build (pós-build e otimização de imagens)
├── vite.config.js        # configuração do build
├── package.json
└── .gitignore
```

## Como executar localmente

O projeto usa módulos ES6, então precisa ser servido por um servidor HTTP. Abrir o arquivo direto pelo `file://` não funciona.

Pré-requisitos: Git e um servidor estático simples (o módulo `http` do Python já resolve).

1. Clone o repositório:

   ```
   git clone <url-do-repositorio>
   ```

2. Entre na pasta do projeto:

   ```
   cd projeto-ong-ep4
   ```

3. Suba um servidor estático na raiz. Com Python:

   ```
   python -m http.server 8000
   ```

   No VS Code, a extensão Live Server também serve.

4. Abra no navegador:

   ```
   http://localhost:8000/html/index.html
   ```

## Build de produção

Para gerar a versão otimizada (bundle e minificação de CSS, JS e HTML):

1. Instale as dependências (precisa do Node.js):

   ```
   npm install
   ```

2. Gere o build:

   ```
   npm run build
   ```

   Os arquivos finais ficam na pasta `dist/` (fora do versionamento). Um passo de pós-build copia o IMask e as imagens para lá.

3. Teste o build localmente:

   ```
   npm run preview
   ```

O bundle é feito com Vite. As imagens foram convertidas para WebP pelo script `scripts/optimize-images.mjs`.

## Acessibilidade

O projeto segue as diretrizes WCAG 2.1 no nível AA:

- Estrutura HTML semântica com marcos (`header`, `nav`, `main`, `footer`), um `h1` por página e hierarquia de títulos consistente.
- Link "pular para o conteúdo" no topo, para quem navega por teclado saltar o menu.
- Foco visível em todos os controles e gestão de foco na troca de rota (o foco vai para o título da nova página).
- Modal com foco preso, fechamento por Esc e retorno do foco ao botão que o abriu.
- Formulário com labels associados, campos agrupados em `fieldset` e mensagens de retorno anunciadas por região `aria-live`.
- Contraste de cores conferido para o nível AA.
- Suporte a preferências do sistema: modo escuro (`prefers-color-scheme`), mais contraste (`prefers-contrast`) e menos movimento (`prefers-reduced-motion`).

## Versionamento

O projeto segue o fluxo GitFlow, com as branches `main` (versões estáveis) e `develop` (integração), e branches de funcionalidade (`feature/*`) para cada entrega.

As mensagens de commit seguem o padrão Conventional Commits (`feat`, `chore`, `merge`), o que mantém o histórico legível e facilita a leitura das mudanças.

As versões usam versionamento semântico (MAJOR.MINOR.PATCH). A versão 1.0.0 marca a primeira entrega estável da SPA, integrada na `main` e identificada pela tag anotada `v1.0.0`.

## Autor

Lucas dos Santos
