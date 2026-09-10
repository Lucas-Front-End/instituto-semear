export function inicio() {
  return `
    <h1>Educação que transforma comunidades</h1>

    <section>
      <h2>Quem somos</h2>
      <img src="../img/equipe-semear.webp"
           alt="Crianças sentadas ao redor de uma mesa lendo livros ilustrados em uma biblioteca comunitária."
           width="800" height="450">
      <p>O Instituto Semear é uma organização da sociedade civil sem fins
        lucrativos, fundada em 2015 na zona leste de São Paulo. Atuamos com
        educação complementar, incentivo à leitura e formação de jovens em
        comunidades com baixo acesso a equipamentos culturais.</p>
      <p>Hoje mantemos três bibliotecas comunitárias e atendemos cerca de 400
        crianças e adolescentes por ano, com uma equipe de 12 educadores e mais
        de 60 voluntários ativos.</p>
    </section>

    <section>
      <h2>Nossa missão</h2>
      <img src="../img/oficina-leitura.webp"
           alt="Três crianças de uniforme escolar sentadas no chão da biblioteca, folheando livros ilustrados."
           width="800" height="450">
      <p>Garantir que toda criança tenha acesso a livros, acompanhamento
        pedagógico e espaços seguros de convivência, independentemente do bairro
        em que nasceu.</p>
      <h3>Nossos valores</h3>
      <ul>
        <li>Educação como direito, não como favor</li>
        <li>Transparência total no uso dos recursos recebidos</li>
        <li>Protagonismo da comunidade nas decisões do Instituto</li>
        <li>Acolhimento sem distinção de origem, gênero ou credo</li>
      </ul>
    </section>

    <section class="chamada">
      <h2>Como ajudar</h2>
      <img src="../img/icone-doacao.svg"
           alt="Ícone de uma mão aberta com um coração vermelho acima dela, representando doação."
           width="64" height="64">
      <p>Nosso trabalho se sustenta com doações recorrentes e com o tempo de
        quem se voluntaria. Qualquer uma das duas formas faz diferença direta no
        atendimento às crianças.</p>
      <ul>
        <li>Doação mensal a partir de R$ 30</li>
        <li>Voluntariado presencial nas oficinas de leitura</li>
        <li>Doação de livros infantis e juvenis em bom estado</li>
      </ul>
      <p><a href="#/cadastro" class="botao">Quero me cadastrar como voluntário ou doador</a></p>
    </section>
  `;
}

const projetosDados = [
  {
    titulo: "Biblioteca Itinerante",
    etiqueta: "Leitura",
    classe: "badge--leitura",
    imagem: "biblioteca-itinerante.webp",
    alt: "Ônibus amarelo adaptado como biblioteca itinerante, com prateleiras de livros visíveis pelas janelas.",
    texto: "Uma van adaptada leva acervo infantil e juvenil a praças e escolas que não têm biblioteca. São 12 paradas fixas por mês e um acervo circulante de 3.500 títulos.",
  },
  {
    titulo: "Reforço Escolar Semear",
    etiqueta: "Educação",
    classe: "badge--educacao",
    imagem: "reforco-escolar.webp",
    alt: "Educadora aponta o caderno enquanto um menino escreve a lápis durante o reforço escolar.",
    texto: "Acompanhamento de português e matemática no contraturno escolar, em turmas de no máximo 15 alunos. Atende 180 crianças do 3º ao 9º ano.",
  },
  {
    titulo: "Jovem Leitor",
    etiqueta: "Formação",
    classe: "badge--formacao",
    imagem: "jovem-leitor.webp",
    alt: "Dois adolescentes lendo o mesmo livro em pé, ao lado de uma estante de biblioteca.",
    texto: "Formação de mediadores de leitura entre adolescentes de 14 a 17 anos. Depois da formação, eles conduzem rodas de leitura para as crianças menores do próprio bairro.",
  },
];

const resultados = [
  "412 crianças e adolescentes atendidos",
  "3 bibliotecas comunitárias mantidas",
  "64 voluntários ativos ao longo do ano",
  "87% dos alunos do reforço melhoraram a nota em português",
];

function cartaoProjeto(projeto) {
  return `
        <article>
          <h3>${projeto.titulo}</h3>
          <span class="badge ${projeto.classe}">${projeto.etiqueta}</span>
          <img src="../img/${projeto.imagem}" alt="${projeto.alt}" width="800" height="450">
          <p>${projeto.texto}</p>
        </article>`;
}

export function projetos() {
  return `
    <h1>Projetos sociais</h1>

    <p>Nossos projetos atendem crianças e adolescentes de 6 a 17 anos em três
      comunidades da zona leste de São Paulo. Abaixo você conhece cada frente de
      atuação e, no final da página, as formas de contribuir com dinheiro ou com
      trabalho voluntário.</p>

    <section id="projetos-andamento">
      <h2>Projetos em andamento</h2>
      <div class="cartoes">${projetosDados.map(cartaoProjeto).join("")}
      </div>
    </section>

    <section>
      <h2>Resultados de 2025</h2>
      <ul class="estatisticas">${resultados.map((r) => `<li>${r}</li>`).join("")}</ul>
    </section>

    <section class="metade" id="como-doar">
      <h2>Como doar</h2>
      <p>As doações cobrem material pedagógico, manutenção da van e bolsa dos
        educadores. Escolha a modalidade que fizer mais sentido para você.</p>
      <h3>Doação mensal</h3>
      <p>A partir de R$ 30 por mês. É a modalidade que mais ajuda, porque
        permite planejar o ano inteiro com previsibilidade.</p>
      <h3>Doação única</h3>
      <p>Qualquer valor, quando você puder. Usamos esse recurso principalmente
        na compra de livros novos para o acervo circulante.</p>
      <h3>Doação de livros</h3>
      <p>Recebemos livros infantis e juvenis em bom estado de conservação na
        sede do Instituto, de segunda a sexta, das 9h às 17h.</p>
      <p><button type="button" class="botao" data-abrir-modal>Ver política de transparência</button></p>
      <p><a href="#/cadastro" class="botao">Quero fazer uma doação</a></p>
    </section>

    <section class="metade" id="seja-voluntario">
      <h2>Seja voluntário</h2>
      <p>O voluntariado é presencial e exige disponibilidade de pelo menos
        quatro horas por semana, sempre no mesmo dia, para as crianças criarem
        vínculo com quem as acompanha.</p>
      <h3>Áreas que precisam de voluntários</h3>
      <ul>
        <li>Mediação de leitura nas rodas semanais</li>
        <li>Reforço de português e matemática</li>
        <li>Organização e catalogação do acervo</li>
        <li>Apoio administrativo e comunicação</li>
      </ul>
      <h3>Como se inscrever</h3>
      <ol>
        <li>Preencha o formulário de cadastro nesta página</li>
        <li>Participe da conversa inicial com a coordenação</li>
        <li>Faça a formação introdutória, que dura um sábado</li>
        <li>Escolha o dia fixo e comece a acompanhar uma turma</li>
      </ol>
      <p><a href="#/cadastro" class="botao botao--secundario">Quero ser voluntário</a></p>
    </section>

    <div id="modal-transparencia" class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-titulo">
      <div class="modal__caixa">
        <h2 id="modal-titulo">Política de transparência</h2>
        <p>Todo valor doado é aplicado direto nos projetos. Publicamos o balanço anual e qualquer doador pode solicitar o detalhamento das despesas.</p>
        <button type="button" class="botao" data-confirmar-modal>Confirmar leitura</button>
        <button type="button" class="modal__fechar" data-fechar-modal>Fechar</button>
      </div>
    </div>

    <div id="toast" class="toast" role="status" aria-live="polite">
      <span>Obrigado por conferir nossa transparência.</span>
      <button type="button" data-fechar-toast aria-label="Fechar aviso">Fechar</button>
    </div>
  `;
}

export function cadastro() {
  return `
    <h1>Cadastro de voluntários e doadores</h1>

    <p>Preencha os dados abaixo. Os campos marcados com asterisco (*) são
      obrigatórios. Entramos em contato em até cinco dias úteis.</p>

    <form id="form-cadastro" action="#" method="post" novalidate>

      <p class="alerta alerta--info" role="note">Seus dados são usados apenas para entrar em contato e nunca são compartilhados com terceiros.</p>

      <div id="form-feedback" role="status" aria-live="polite" hidden></div>

      <fieldset>
        <legend>Dados pessoais</legend>
        <p>
          <label for="nome">Nome completo *</label>
          <input type="text" id="nome" name="nome" placeholder="Maria da Silva Souza"
                 minlength="5" maxlength="80" required>
        </p>
        <p>
          <label for="cpf">CPF *</label>
          <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00"
                 pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}"
                 title="Digite o CPF com pontos e hífen, no formato 000.000.000-00"
                 maxlength="14" inputmode="numeric" required>
        </p>
        <p>
          <label for="nascimento">Data de nascimento *</label>
          <input type="date" id="nascimento" name="nascimento"
                 min="1920-01-01" max="2008-12-31" required>
        </p>
      </fieldset>

      <fieldset>
        <legend>Contato</legend>
        <p>
          <label for="email">E-mail *</label>
          <input type="email" id="email" name="email" placeholder="maria@email.com" maxlength="80" required>
        </p>
        <p>
          <label for="telefone">Telefone celular *</label>
          <input type="tel" id="telefone" name="telefone" placeholder="(11) 91234-5678"
                 pattern="\\(\\d{2}\\) \\d{5}-\\d{4}"
                 title="Digite o telefone com DDD entre parênteses, no formato (11) 91234-5678"
                 maxlength="15" inputmode="numeric" required>
        </p>
      </fieldset>

      <fieldset>
        <legend>Endereço</legend>
        <p>
          <label for="cep">CEP *</label>
          <input type="text" id="cep" name="cep" placeholder="00000-000"
                 pattern="\\d{5}-\\d{3}"
                 title="Digite o CEP com hífen, no formato 00000-000"
                 maxlength="9" inputmode="numeric" required>
        </p>
        <p>
          <label for="logradouro">Rua ou avenida *</label>
          <input type="text" id="logradouro" name="logradouro" maxlength="80" required>
        </p>
        <p>
          <label for="numero">Número *</label>
          <input type="text" id="numero" name="numero" placeholder="245" maxlength="10" required>
        </p>
        <p>
          <label for="complemento">Complemento</label>
          <input type="text" id="complemento" name="complemento" placeholder="Apto 42, bloco B" maxlength="40">
        </p>
        <p>
          <label for="bairro">Bairro *</label>
          <input type="text" id="bairro" name="bairro" maxlength="60" required>
        </p>
        <p>
          <label for="cidade">Cidade *</label>
          <input type="text" id="cidade" name="cidade" maxlength="60" required>
        </p>
        <p>
          <label for="estado">Estado *</label>
          <select id="estado" name="estado" required>
            <option value="">Selecione o estado</option>
            <option value="SP">São Paulo</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="MG">Minas Gerais</option>
            <option value="PR">Paraná</option>
            <option value="BA">Bahia</option>
            <option value="PE">Pernambuco</option>
          </select>
        </p>
      </fieldset>

      <fieldset>
        <legend>Como você quer ajudar</legend>
        <fieldset>
          <legend>Tipo de contribuição *</legend>
          <p>
            <input type="radio" id="tipo-doacao" name="tipo" value="doacao" required>
            <label for="tipo-doacao">Quero doar</label>
          </p>
          <p>
            <input type="radio" id="tipo-voluntario" name="tipo" value="voluntario">
            <label for="tipo-voluntario">Quero ser voluntário</label>
          </p>
          <p>
            <input type="radio" id="tipo-ambos" name="tipo" value="ambos">
            <label for="tipo-ambos">Quero doar e ser voluntário</label>
          </p>
        </fieldset>
        <fieldset>
          <legend>Áreas de interesse</legend>
          <p>
            <input type="checkbox" id="area-leitura" name="areas" value="leitura">
            <label for="area-leitura">Mediação de leitura</label>
          </p>
          <p>
            <input type="checkbox" id="area-reforco" name="areas" value="reforco">
            <label for="area-reforco">Reforço escolar</label>
          </p>
          <p>
            <input type="checkbox" id="area-acervo" name="areas" value="acervo">
            <label for="area-acervo">Organização do acervo</label>
          </p>
          <p>
            <input type="checkbox" id="area-admin" name="areas" value="admin">
            <label for="area-admin">Apoio administrativo</label>
          </p>
        </fieldset>
        <p>
          <label for="horas">Horas disponíveis por semana</label>
          <input type="number" id="horas" name="horas" min="1" max="40" step="1" placeholder="4">
        </p>
        <p>
          <label for="inicio-voluntariado">A partir de quando você pode começar</label>
          <input type="month" id="inicio-voluntariado" name="inicio" min="2026-09">
        </p>
        <p>
          <label for="mensagem">Conte um pouco sobre você</label>
          <textarea id="mensagem" name="mensagem" rows="5" cols="40" maxlength="500"
                    placeholder="Experiência, motivação, o que quiser contar."></textarea>
        </p>
      </fieldset>

      <p>
        <input type="checkbox" id="termos" name="termos" value="aceito" required>
        <label for="termos">Autorizo o Instituto Semear a usar meus dados para
          entrar em contato sobre doação e voluntariado *</label>
      </p>

      <p>
        <button type="submit">Enviar cadastro</button>
        <button type="reset">Limpar formulário</button>
      </p>

    </form>

    <section id="lista-cadastros" hidden>
      <h2>Cadastros salvos neste navegador</h2>
      <ul id="cadastros"></ul>
    </section>
  `;
}

export function naoEncontrado() {
  return `
    <h1>Página não encontrada</h1>
    <p>O endereço acessado não existe. <a href="#/inicio">Voltar para o início</a>.</p>
  `;
}
