
// DARK MODE //

// Função para alternar entre o modo claro e escuro
function darkMode() {
    var element = document.body; // Seleciona o elemento body do documento
    element.classList.toggle("dark-mode"); // Alterna a classe "dark-mode" no body
}

// Adiciona um listener ao botão que ativa a função darkMode ao ser clicado
document.getElementById("darkModeToggle").addEventListener("click", darkMode());



// CADASTRO //

// Função para validar o cadastro
function validarCadastro() {
    // Regex para validar o nome (apenas letras e espaços)
    const nomeRegex = /^[a-zA-Z\s]+$/;
    // Regex para validar o e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Obtém os valores dos campos de entrada
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    // Valida o nome
    if (!nomeRegex.test(nome)) {
        alert("Nome inválido. Use apenas letras e espaços."); // Alerta se o nome for inválido
        return false; // Retorna falso se a validação falhar
    }

    // Valida o e-mail
    if (!emailRegex.test(email)) {
        alert("E-mail inválido. Insira um e-mail válido."); // Alerta se o e-mail for inválido
        return false; // Retorna falso se a validação falhar
    }
    return true; // Retorna verdadeiro se todas as validações passarem
}


// EQUIPE //


// Funções para preencher parágrafos com texto
function primeiro() {
    const paragrafo = document.getElementById('primeiroParagrafo'); // Seleciona o primeiro parágrafo
    // Verifica se o conteúdo do parágrafo está vazio
    if (paragrafo.textContent.trim() === '') {
        // Se estiver vazio, preenche com texto padrão
        paragrafo.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sint, iure molestiae, porro facilis ipsam sed natus maiores unde laboriosam totam quisquam praesentium quibusdam ut. Ex voluptate in dolores reiciendis.';
    }
}

// Repete a mesma lógica para os outros parágrafos
function segundo() {
    const paragrafo = document.getElementById('segundoParagrafo');
    if (paragrafo.textContent.trim() === '') {
        paragrafo.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sint, iure molestiae, porro facilis ipsam sed natus maiores unde laboriosam totam quisquam praesentium quibusdam ut. Ex voluptate in dolores reiciendis.';
    }
}

function terceiro() {
    const paragrafo = document.getElementById('terceiroParagrafo');
    if (paragrafo.textContent.trim() === '') {
        paragrafo.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sint, iure molestiae, porro facilis ipsam sed natus maiores unde laboriosam totam quisquam praesentium quibusdam ut. Ex voluptate in dolores reiciendis.';
    }
}

function quarto() {
    const paragrafo = document.getElementById('quartoParagrafo');
    if (paragrafo.textContent.trim() === '') {
        paragrafo.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sint, iure molestiae, porro facilis ipsam sed natus maiores unde laboriosam totam quisquam praesentium quibusdam ut. Ex voluptate in dolores reiciendis.';
    }
}

function quinto() {
    const paragrafo = document.getElementById('quintoParagrafo');
    if (paragrafo.textContent.trim() === '') {
        paragrafo.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sint, iure molestiae, porro facilis ipsam sed natus maiores unde laboriosam totam quisquam praesentium quibusdam ut. Ex voluptate in dolores reiciendis.';
    }
}

