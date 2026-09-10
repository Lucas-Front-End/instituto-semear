const CHAVE = "semear:cadastros";

export function lerCadastros() {
  try {
    return JSON.parse(localStorage.getItem(CHAVE)) || [];
  } catch {
    return [];
  }
}

export function salvarCadastro(dado) {
  const lista = lerCadastros();
  lista.push(dado);
  localStorage.setItem(CHAVE, JSON.stringify(lista));
  return lista;
}
