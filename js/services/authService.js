import { API_URL } from "../api/authApi";
import { API_URL_LOGIN } from "../api/authApi";

export async function cadastrarUsuarioService(dadosUsuario) {
    const resposta = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosUsuario)
    });
    
    return resposta;
}


export async function loginUsuarioService(dadosLogin) {
    const resposta = await fetch(API_URL_LOGIN, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosLogin)
    });
    
    return resposta;
}

