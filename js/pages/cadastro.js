import { validarCamposCadastro } from "../utils/validation.js";
import { cadastrarUsuarioService } from "../services/authService.js";


const inputEmail = document.getElementById("email");
const inputNome = document.getElementById("nome");
const inputSenha = document.getElementById("senha");
const paragrafoErro = document.getElementById("paragrafo");
const botaoCriar = document.getElementById("btnCriar");

async function cadastrarUsuario(event){
    event.preventDefault();

    const nomeLimpo = inputNome.value.trim();
    const emailLimpo = inputEmail.value.trim();
    const senhaLimpo = inputSenha.value.trim();
    
   if(!validarCamposCadastro(nomeLimpo,emailLimpo,senhaLimpo)){
    return;
   } 

   const dadosUsuario = {
    nome: nomeLimpo,
    email: emailLimpo,
    senha: senhaLimpo
   };

   try {
    const resposta = await cadastrarUsuarioService(dadosUsuario);
    if(resposta.ok){
        paragrafoErro.textContent = "Usuario cadastrado com sucesso! Redirecionando...";
        paragrafoErro.style.color = "#2ecc71";

        setTimeout(() => {
            window.location.href = "/pages/login.html";
        }, 2000);
    } else {
        const erroServidor = await resposta.json();
        paragrafoErro.textContent = erroServidor.mensagem || "Erro ao cadastrar usuario";
        paragrafoErro.style.color = "#ff4d4d";
    }
    
   } catch (error) {
    paragrafoErro.textContent = "Não foi possivel conectar ao servidor";
    paragrafoErro.style.color = "#ff4d4d";
   }


}

botaoCriar.addEventListener("click", cadastrarUsuario);