import { validarCamposCadastro } from "../utils/validation.js";


const inputEmail = document.getElementById("email");
const inputNome = document.getElementById("nome");
const inputSenha = document.getElementById("senha");
const botaoCriar = document.getElementById("btnCriar");

function cadastrarUsuario(event){
    event.preventDefault();

    const nomeLimpo = inputNome.value.trim();
    const emailLimpo = inputEmail.value.trim();
    const senhaLimpo = inputSenha.value.trim();
    
   if(!validarCamposCadastro(nomeLimpo,emailLimpo,senhaLimpo)){
    return;
   } 
}

botaoCriar.addEventListener("click", cadastrarUsuario);