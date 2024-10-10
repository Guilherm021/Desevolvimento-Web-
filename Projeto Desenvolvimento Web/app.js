let contagemPesquisas = 0;
let usuarioValido = null; // Armazena o usuário válido

function pesquisar() {
    let section = document.getElementById('resultados-pesquisa');
    let campoPesquisa = document.getElementById('campo-pesquisa').value.trim();

    // Abre o vídeo do YouTube se a pesquisa for "fim"
    if (campoPesquisa.toLowerCase() === "fim") {
        window.open("https://youtu.be/AhiPW-lLoXM?si=GGUE9L1HyqleVHPS", "_blank"); // Substitua SEU_VIDEO_ID pelo ID do vídeo desejado
        return;
    }

    if (!usuarioValido && contagemPesquisas >= 3) {
        alert('Você precisa fazer login para continuar!');
        mostrarLogin();
        return;
    }

    if (campoPesquisa === "") {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte.</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();
    let resultados = '';

    for (let dado of dados) {
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let tags = dado.tags.toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <h2>${dado.titulo}</h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
            `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>";
    }

    section.innerHTML = resultados;

    // Incrementa a contagem de pesquisas somente se o usuário não estiver logado
    if (!usuarioValido) {
        contagemPesquisas++;
    }
}

function fazerLogin() {
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();

    if (usuarioValido && email === usuarioValido.email && senha === usuarioValido.senha) {
        alert("Login bem-sucedido!");
        contagemPesquisas = 0; // Reseta a contagem de pesquisas
        document.getElementById('login-box').style.display = 'none';
        document.getElementById('campo-pesquisa').value = "";
        document.getElementById('resultados-pesquisa').innerHTML = "";
    } else {
        alert("Email ou senha incorretos.");
    }
}

function criarConta() {
    const email = document.getElementById('email-criacao').value.trim();
    const senha = document.getElementById('senha-criacao').value.trim();

    if (email && senha) {
        usuarioValido = { email, senha }; // Armazena o usuário
        alert("Conta criada com sucesso! Você pode fazer login agora.");
        fecharModal(); // Fecha o modal após criar a conta
    } else {
        alert("Por favor, preencha todos os campos!");
    }
}

function abrirModal() {
    document.getElementById("modal-criacao-conta").style.display = "block";
}

function fecharModal() {
    document.getElementById("modal-criacao-conta").style.display = "none";
}

// Fecha o modal se o usuário clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById("modal-criacao-conta");
    if (event.target === modal) {
        fecharModal();
    }
}

function mostrarLogin() {
    fecharModal(); // Fecha o modal, se estiver aberto
    document.getElementById('login-box').style.display = 'block';
}
