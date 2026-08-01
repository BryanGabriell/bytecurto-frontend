import { encurtarLinkService } from "../services/linkService.js";
import { storage } from "../utils/storage.js";
import { validarCamposUrl } from "../utils/validation.js";

const inputUrl = document.getElementById("url-original");
const btnEncurtar = document.getElementById("btn-encurtar");
const mensagemStatus = document.getElementById("mensagem-status");
const secaoResultado = document.getElementById("secao-resultado");
const linkGerado = document.getElementById("link-gerado");
const btnCopiar = document.getElementById("btn-copiar");

async function encurtarLink() {
    const token = storage.obterToken();
    if (!token) {
        window.location.href = "login.html";
        return;
    }

    const urlLimpa = inputUrl.value.trim();
    if (!validarCamposUrl(urlLimpa)) {
        mensagemStatus.textContent = "URL inválida!";
        mensagemStatus.style.color = "#ff4d4d";
        return;
    }

    const dadosLink = {
        urlOriginal: urlLimpa
    };

    try {
        mensagemStatus.textContent = "Encurtando Link...";
        mensagemStatus.style.color = "#3498DB";
        
        const resposta = await encurtarLinkService(dadosLink, token);
        
        if (resposta.ok) {
            const dados = await resposta.json();
            
            
            const urlCompleta = dados.urlEncurtada || dados.linkEncurtado; 
            
            
            linkGerado.textContent = urlCompleta;
            linkGerado.href = urlCompleta;

            secaoResultado.style.display = "block"; 
            mensagemStatus.textContent = "Link encurtado com sucesso!";
            mensagemStatus.style.color = "#2ECC71";
            inputUrl.value = "";
        } else {
            const erroServidor = await resposta.json();
            mensagemStatus.textContent = erroServidor.mensagem || "Erro ao encurtar URL";
            mensagemStatus.style.color = "#ff4d4d";
        }
    } catch (error) {
        mensagemStatus.textContent = "Não foi possível conectar ao servidor";
        mensagemStatus.style.color = "#ff4d4d";
    }
}

function copiarLink() {
    const textoParaCopiar = linkGerado.textContent;
    navigator.clipboard.writeText(textoParaCopiar).then(() => {
        const textoOriginal = btnCopiar.textContent;
        btnCopiar.textContent = "Copiado!";
        btnCopiar.style.backgroundColor = "#2ECC71";
        
        setTimeout(() => {
            btnCopiar.textContent = textoOriginal;
            btnCopiar.style.backgroundColor = "";
        }, 2000);
    }).catch(err => {
        console.error("Erro ao copiar link: ", err);
    });
}

btnEncurtar.addEventListener("click", encurtarLink);
btnCopiar.addEventListener("click", copiarLink);