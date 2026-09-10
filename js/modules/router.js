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

let primeiraRenderizacao = true;

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

  moverFoco(secao, !primeiraRenderizacao);
  primeiraRenderizacao = false;
}

function prefereMenosMovimento() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function moverFoco(secao, focar) {
  const app = document.getElementById("app");
  const comportamento = prefereMenosMovimento() ? "auto" : "smooth";
  const secaoAlvo = secao ? document.getElementById(secao) : null;

  if (secaoAlvo) {
    secaoAlvo.scrollIntoView({ behavior: comportamento, block: "start" });
  } else {
    window.scrollTo({ top: 0, left: 0, behavior: comportamento });
  }

  if (focar) {
    const alvo = secaoAlvo || app.querySelector("h1") || app;
    alvo.setAttribute("tabindex", "-1");
    alvo.focus({ preventScroll: true });
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
  sincronizarMenu();
}

function sincronizarMenu() {
  const check = document.getElementById("menu-check");
  const botao = document.querySelector(".menu-abrir");
  if (check && botao) botao.setAttribute("aria-expanded", String(check.checked));
}

export function iniciarRouter() {
  const check = document.getElementById("menu-check");
  if (check) check.addEventListener("change", sincronizarMenu);

  const skip = document.querySelector(".skip-link");
  if (skip) {
    skip.addEventListener("click", (evento) => {
      evento.preventDefault();
      const app = document.getElementById("app");
      app.setAttribute("tabindex", "-1");
      app.focus();
      app.scrollIntoView({ block: "start" });
    });
  }

  window.addEventListener("hashchange", render);
  if (!location.hash) {
    location.hash = "#/inicio";
  } else {
    render();
  }
}
