const formatos = {
  cpf: "000.000.000-00",
  telefone: "(00) 00000-0000",
  cep: "00000-000",
};

export function aplicarMascaras() {
  if (typeof IMask === "undefined") return;

  Object.keys(formatos).forEach((id) => {
    const campo = document.getElementById(id);
    if (campo) IMask(campo, { mask: formatos[id] });
  });
}
