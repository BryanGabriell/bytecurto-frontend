import { validarCamposLogin } from "../utils/validation.js";
import { loginUsuarioService } from "../services/authService.js";
import { storage } from "../utils/storage.js";

const inputEmail = document.getElementById("email");
const inputSenha = document.getElementById("senha");
const mensagemErro = document.getElementById("mensagem-erro");
const formulario = document.getElementById("bytecurto-formulario"); 

async function loginUsuario(event) {
    event.preventDefault(); 

    const emailLimpo = inputEmail.value.trim();
    const senhaLimpa = inputSenha.value.trim();

    if (!validarCamposLogin(emailLimpo, senhaLimpa)) {
        return;
    }

    const dadosLogin = {
        email: emailLimpo,
        password: senhaLimpa
    };

    try {
        mensagemErro.textContent = "Autenticando...";
        mensagemErro.style.color = "#3498DB";

        const resposta = await loginUsuarioService(dadosLogin);
        
        if (resposta.ok) {
            const dados = await resposta.json();
            const token = dados.token;

            storage.salvarToken(token);

            mensagemErro.textContent = "Login realizado com sucesso! Entrando...";
            mensagemErro.style.color = "#2ECC71";

            setTimeout(() => {
                window.location.href = "encurtador.html";
            }, 1500);

        } else {
            const erroServidor = await resposta.json();
            mensagemErro.textContent = erroServidor.mensagem || "E-mail ou senha incorretos.";
            mensagemErro.style.color = "#ff4d4d";
        }
    } catch (error) {
        mensagemErro.textContent = "Erro ao conectar com o servidor.";
        mensagemErro.style.color = "#ff4d4d";
    }
}

 
formulario.addEventListener("submit", loginUsuario);