let db;

// Função para abrir o banco de dados IndexedDB
function abrirBanco() {
    const request = indexedDB.open('usuariosDB', 1);

    request.onupgradeneeded = function(event) {
        db = event.target.result;
        db.createObjectStore('usuarios', { keyPath: 'usuario' });
    };

    request.onsuccess = function(event) {
        db = event.target.result;
    };

    request.onerror = function(event) {
        console.error("Erro ao abrir o banco de dados", event);
    };
}

// Função de login
function fazerLogin() {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    const transaction = db.transaction(['usuarios'], 'readonly');
    const store = transaction.objectStore('usuarios');
    const request = store.get(usuario);

    request.onsuccess = function(event) {
        const dados = event.target.result;
        if (dados && dados.senha === senha) {
            alert("Login realizado com sucesso!");
            esconderLogin(); // Chama a função para esconder o formulário de login
        } else {
            alert("Usuário ou senha incorretos.");
        }
    };

    request.onerror = function(event) {
        console.error("Erro ao fazer login", event);
    };
}

// Função para criar conta
function criarConta() {
    const usuario = document.getElementById('usuario-criacao').value;
    const senha = document.getElementById('senha-criacao').value;

    // Validar senha
    if (senha.length < 6 || senha.length > 12) {
        alert("A senha deve ter entre 6 e 12 caracteres.");
        return;
    }

    const transaction = db.transaction(['usuarios'], 'readwrite');
    const store = transaction.objectStore('usuarios');
    
    const request = store.add({ usuario, senha });

    transaction.oncomplete = function() {
        alert("Conta criada com sucesso!");
        esconderLogin(); // Chama a função para esconder o formulário de login
    };

    transaction.onerror = function(event) {
        console.error("Erro ao criar conta", event);
    };
}

// Função para esconder o formulário de login
function esconderLogin() {
    document.getElementById('login-box').style.display = 'none';
}

// Função para abrir o modal de criação de conta
function abrirModal() {
    document.getElementById('modal-criacao-conta').style.display = 'block';
}

// Função para fechar o modal
function fecharModal() {
    document.getElementById('modal-criacao-conta').style.display = 'none';
}

// Abre o banco de dados ao carregar a página
window.onload = abrirBanco;
