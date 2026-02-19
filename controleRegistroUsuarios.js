// Elementos do Admin
const nomeAdmin = document.getElementById("nome-admin");
const senhaAdmin = document.getElementById("senha-admin");
const botao = document.getElementById("entrar");

function salvarDadosAdmin() {
    const nome = nomeAdmin.value;
    const senha = senhaAdmin.value;

    if (!nome || !senha) {
        alert("Preencha todos os campos!");
        return;
    }

    localStorage.setItem("nomeAdmin", nome);
    localStorage.setItem("cargoAdmin", "Administrador");
}

// Elementos do Usuário comum
const nomeUsuario = document.getElementById("nome");
const senhaUsuario = document.getElementById("senha");

function salvarDadosUsuario() {
    const nome = nomeUsuario.value;
    const senha = senhaUsuario.value;

    if (!nome || !senha) {
        alert("Preencha todos os campos!");
        return;
    }

    localStorage.setItem("nomeUsuario", nome);
    localStorage.setItem("cargoUsuario", "Usuário");
}
function sair() {
    localStorage.removeItem("nomeAdmin");
    localStorage.removeItem("cargoAdmin");
    localStorage.removeItem("nomeUsuario");
    localStorage.removeItem("cargoUsuario");
    window.location.href = "index.html";
}