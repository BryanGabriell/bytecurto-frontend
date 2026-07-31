import { validarCamposCadastro } from "../utils/validation.js";
import { cadastrarUsuarioService } from "../services/authService.js";

const inputEmail = document.getElementById("email");
const inputNome = document.getElementById("nome");
const inputSenha = document.getElementById("senha");
const paragrafoErro = document.getElementById("paragrafo");
const formulario = document.getElementById("bytecurto-formulario");

async function cadastrarUsuario(event) {
    event.preventDefault();
    
    const nomeLimpo = inputNome.value.trim();
    const emailLimpo = inputEmail.value.trim();
    const senhaLimpa = inputSenha.value.trim();
    
    if (!validarCamposCadastro(nomeLimpo, emailLimpo, senhaLimpa)) {
        return;
    } 

    const dadosUsuario = {
        name: nomeLimpo,
        email: emailLimpo,
        password: senhaLimpa
    };

    try {
        const resposta = await cadastrarUsuarioService(dadosUsuario);
        
        if (resposta.ok) {
            paragrafoErro.textContent = "Usuário cadastrado com sucesso! Redirecionando...";
            paragrafoErro.style.color = "#2ecc71";
            
            setTimeout(() => {
                window.location.href = "login.html";
            }, 2000);
        } else {
            const erroServidor = await resposta.json();
            paragrafoErro.textContent = erroServidor.mensagem || "Erro ao cadastrar usuário";
            paragrafoErro.style.color = "#ff4d4d";
        }
    } catch (error) {
        paragrafoErro.textContent = "Não foi possível conectar ao servidor.";
        paragrafoErro.style.color = "#ff4d4d";
    }
}

formulario.addEventListener("submit", cadastrarUsuario);