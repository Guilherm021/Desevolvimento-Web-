let pesquisaContador = 0;  // Declare a variável aqui no arquivo JavaScript (somente uma vez)
const limitePesquisasGratuitas = 3;
let usuarioLogado = null;  // Variável para controlar se o usuário está logado
let db = null; // Variável para armazenar a referência ao banco de dados

// Abre o banco de dados IndexedDB
function abrirBancoDeDados() {
    const request = indexedDB.open('usuariosDB', 2); // Alterado para versão 2

    request.onupgradeneeded = function(event) {
        db = event.target.result;
        console.log("Banco de dados aberto ou criado.");

        // Cria a store 'usuarios' se não existir
        if (!db.objectStoreNames.contains('usuarios')) {
            db.createObjectStore('usuarios', { keyPath: 'usuario' });
        }

        // Exemplo de migração para versão 2
        if (event.oldVersion < 2) {
            console.log("Migrando para a versão 2...");
            // Aqui você pode adicionar novas stores ou índices, se necessário
        }
    };

    request.onsuccess = function(event) {
        db = event.target.result;
        console.log("Banco de dados aberto com sucesso!");
    };

    request.onerror = function(event) {
        console.error("Erro ao abrir o banco de dados:", event.target.error);
        alert("Erro ao tentar abrir o banco de dados. Verifique o console para mais detalhes.");
    };
}

// Chama a função para abrir o banco de dados assim que o script for carregado
abrirBancoDeDados();

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        pesquisar();
    }
}

function pesquisar() {
    const termoPesquisa = document.getElementById('campo-pesquisa').value.toLowerCase();

    // Se o termo for "brasil", redireciona para o YouTube
    if (termoPesquisa === "brasil") {
        window.open("https://youtu.be/tW1x_EbAjfU?si=VlANH6JOy3X9k5v-", "_blank"); 
        return;
    }

    // Verifica se o usuário está logado ou se excedeu o limite de pesquisas gratuitas
    if (!usuarioLogado && pesquisaContador >= limitePesquisasGratuitas) {
        alert("Você atingiu o limite de pesquisas gratuitas. Por favor, faça login ou crie uma conta.");
        return;
    }

    pesquisaContador++; // Incrementa o contador de pesquisas

    const resultados = dados.filter(item => 
        item.titulo.toLowerCase().includes(termoPesquisa) || 
        item.tags.split(', ').some(tag => tag.toLowerCase().includes(termoPesquisa))
    );

    exibirResultados(resultados);
}

function exibirResultados(resultados) {
    const divResultados = document.getElementById('resultados-pesquisa');
    divResultados.innerHTML = ''; 

    if (resultados.length > 0) {
        divResultados.style.display = 'block';
        resultados.forEach(resultado => {
            const divItem = document.createElement('div');
            divItem.classList.add('item-resultado');

            const imgElement = document.createElement('img');
            imgElement.style.width = "200px";  
            imgElement.style.marginBottom = "10px"; 
            divItem.appendChild(imgElement);

            const tituloElement = document.createElement('h3');
            tituloElement.innerText = resultado.titulo;

            const descricaoElement = document.createElement('p');
            descricaoElement.innerText = resultado.descricao;

            const linkElement = document.createElement('a');
            linkElement.href = resultado.link;
            linkElement.target = "_blank";
            linkElement.innerText = "Leia mais";

            divItem.appendChild(tituloElement);
            divItem.appendChild(descricaoElement);
            divItem.appendChild(linkElement);

            divResultados.appendChild(divItem);

            buscarImagemAtleta(resultado.titulo, imgElement);
        });
    } else {
        divResultados.style.display = 'none';
        alert("Nenhum resultado encontrado.");
    }
}

function buscarImagemAtleta(nomeAtleta, imgElement) {
    const apiKey = '558a47945381f34c96c2ab47548ef226';
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${nomeAtleta}&format=json&nojsoncallback=1`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.photos.photo.length > 0) {
                const photo = data.photos.photo[0];
                const imgUrl = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`;
                imgElement.src = imgUrl;
                imgElement.alt = nomeAtleta;
            } else {
                imgElement.alt = "Imagem não encontrada";
                imgElement.src = ""; 
            }
        })
        .catch(error => {
            console.error("Erro ao buscar imagem no Flickr:", error);
        });
}

function esconderLogin() {
    document.getElementById('login-box').style.display = 'none';
    document.getElementById('modal-criacao-conta').style.display = 'none';
}

function criarConta() {
    if (!db) {
        alert("Banco de dados não carregado. Tente novamente mais tarde.");
        return;
    }

    const usuario = document.getElementById('usuario-criacao').value;
    const senha = document.getElementById('senha-criacao').value;

    if (senha.length < 6 || senha.length > 12) {
        alert("A senha deve ter entre 6 a 12 caracteres.");
        return;
    }

    const transaction = db.transaction(['usuarios'], 'readwrite');
    const store = transaction.objectStore('usuarios');
    const request = store.add({ usuario, senha });

    transaction.oncomplete = function() {
        alert("Conta criada com sucesso!");
        esconderLogin();
        fecharModal();
        pesquisaContador = 0; // Resetando o contador de pesquisas após a criação de conta
    };

    transaction.onerror = function(event) {
        console.error("Erro ao criar conta", event);
    };
}

function fazerLogin() {
    if (!db) {
        alert("Banco de dados não carregado. Tente novamente mais tarde.");
        return;
    }

    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    const transaction = db.transaction(['usuarios'], 'readonly');
    const store = transaction.objectStore('usuarios');
    const request = store.get(usuario);

    request.onsuccess = function(event) {
        const dados = event.target.result;
        if (dados && dados.senha === senha) {
            usuarioLogado = usuario;  // Marca o usuário como logado
            pesquisaContador = 0; // Resetando o contador de pesquisas após o login
            alert("Login realizado com sucesso!");
            esconderLogin();
        } else {
            alert("Usuário ou senha incorretos.");
        }
    };

    request.onerror = function(event) {
        console.error("Erro ao fazer login", event);
    };
}

function fecharModal() {
    document.getElementById('modal-criacao-conta').style.display = 'none';
}

// Função para abrir o modal de criação de conta
function abrirModal() {
    document.getElementById('modal-criacao-conta').style.display = 'block';
}
