export function ativarProjetos() {
  const modal = document.getElementById("modal-transparencia");
  const toast = document.getElementById("toast");
  if (!modal) return;

  const gatilho = document.querySelector("[data-abrir-modal]");
  const botaoFechar = modal.querySelector("[data-fechar-modal]");
  const botaoConfirmar = modal.querySelector("[data-confirmar-modal]");
  const botaoFecharToast = toast
    ? toast.querySelector("[data-fechar-toast]")
    : null;

  let temporizador;
  let ultimoFoco = null;

  function elementosFocaveis() {
    return modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
  }

  function prenderFoco(evento) {
    if (evento.key === "Escape") {
      fecharModal();
      return;
    }
    if (evento.key !== "Tab") return;

    const focaveis = elementosFocaveis();
    if (!focaveis.length) return;

    const primeiro = focaveis[0];
    const ultimo = focaveis[focaveis.length - 1];

    if (evento.shiftKey && document.activeElement === primeiro) {
      evento.preventDefault();
      ultimo.focus();
    } else if (!evento.shiftKey && document.activeElement === ultimo) {
      evento.preventDefault();
      primeiro.focus();
    }
  }

  function abrirModal() {
    ultimoFoco = document.activeElement;
    modal.classList.add("aberto");
    void modal.offsetHeight;
    document.addEventListener("keydown", prenderFoco);
    if (botaoFechar) botaoFechar.focus();
  }

  function fecharModal() {
    if (!modal.classList.contains("aberto")) return;
    modal.classList.remove("aberto");
    document.removeEventListener("keydown", prenderFoco);
    if (ultimoFoco) ultimoFoco.focus();
  }

  function mostrarToast() {
    if (!toast) return;
    toast.classList.add("aberto");
    clearTimeout(temporizador);
    temporizador = setTimeout(() => toast.classList.remove("aberto"), 4000);
  }

  if (gatilho) gatilho.addEventListener("click", abrirModal);
  if (botaoFechar) botaoFechar.addEventListener("click", fecharModal);
  if (botaoConfirmar) {
    botaoConfirmar.addEventListener("click", () => {
      fecharModal();
      mostrarToast();
    });
  }
  if (botaoFecharToast) {
    botaoFecharToast.addEventListener("click", () =>
      toast.classList.remove("aberto")
    );
  }

  modal.addEventListener("click", (evento) => {
    if (evento.target === modal) fecharModal();
  });
}
