import { salvarCadastro, lerCadastros } from "./storage.js";

export function ativarCadastro() {
  const form = document.getElementById("form-cadastro");
  if (!form) return;

  renderizarLista();

  form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    if (!form.checkValidity()) {
      const primeiroInvalido = form.querySelector(":invalid");
      mostrarFeedback("erro", "Revise os campos destacados antes de enviar.");
      if (primeiroInvalido) primeiroInvalido.focus();
      return;
    }

    const dados = Object.fromEntries(new FormData(form).entries());
    dados.areas = Array.from(
      form.querySelectorAll('input[name="areas"]:checked')
    ).map((campo) => campo.value);
    dados.salvoEm = new Date().toISOString();

    salvarCadastro(dados);
    mostrarFeedback(
      "sucesso",
      "Cadastro enviado e salvo com sucesso. Entraremos em contato em breve."
    );
    form.reset();
    renderizarLista();
  });
}

function mostrarFeedback(tipo, mensagem) {
  const el = document.getElementById("form-feedback");
  if (!el) return;
  el.className = "alerta alerta--" + (tipo === "sucesso" ? "sucesso" : "erro");
  el.textContent = mensagem;
  el.hidden = false;
  el.scrollIntoView({ behavior: "smooth", block: "center" });
}

function renderizarLista() {
  const secao = document.getElementById("lista-cadastros");
  const ul = document.getElementById("cadastros");
  if (!secao || !ul) return;

  const lista = lerCadastros();
  if (!lista.length) {
    secao.hidden = true;
    return;
  }

  secao.hidden = false;
  ul.innerHTML = "";
  lista.forEach((cadastro) => {
    const item = document.createElement("li");
    item.textContent = `${cadastro.nome} - ${cadastro.email}`;
    ul.appendChild(item);
  });
}
