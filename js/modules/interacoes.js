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

  function abrirModal() {
    modal.classList.add("aberto");
  }

  function fecharModal() {
    modal.classList.remove("aberto");
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

  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") fecharModal();
  });
}
