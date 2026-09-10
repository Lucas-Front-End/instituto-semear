import { inicio, projetos, cadastro, naoEncontrado } from "./templates.js";
import { ativarCadastro } from "./validacao.js";
import { ativarProjetos } from "./interacoes.js";
import { aplicarMascaras } from "./mascaras.js";

const rotas = {
  "/inicio": { titulo: "Instituto Semear | Início", ver: inicio },
  "/projetos": { titulo: "Instituto Semear | Projetos sociais", ver: projetos },
  "/cadastro": { titulo: "Instituto Semear | Cadastro", ver: cadastro },
};

function analisarHash() {
  const partes = (location.hash.replace("#", "") || "/inicio")
    .split("/")
    .filter(Boolean);
  return { caminho: "/" + (partes[0] || "inicio"), secao: partes[1] || "" };
}

function render() {
  const app = document.getElementById("app");
  const { caminho, secao } = analisarHash();
  const rota = rotas[caminho];

  if (!rota) {
    document.title = "Instituto Semear";
    app.innerHTML = naoEncontrado();
    return;
  }

  document.title = rota.titulo;
  app.innerHTML = rota.ver();
  marcarLinkAtivo(caminho);
  fecharMenuMobile();

  if (caminho === "/cadastro") {
    ativarCadastro();
    aplicarMascaras();
  }
  if (caminho === "/projetos") ativarProjetos();

  const alvo = secao ? document.getElementById(secao) : null;
  if (alvo) {
    alvo.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    window.scrollTo(0, 0);
  }
}

function marcarLinkAtivo(caminho) {
  document.querySelectorAll("nav a[data-rota]").forEach((link) => {
    if (link.dataset.rota === caminho) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function fecharMenuMobile() {
  const check = document.getElementById("menu-check");
  if (check) check.checked = false;
}

export function iniciarRouter() {
  window.addEventListener("hashchange", render);
  if (!location.hash) {
    location.hash = "#/inicio";
  } else {
    render();
  }
}
