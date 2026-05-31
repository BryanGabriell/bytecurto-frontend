const API_URL = "http://localhost:8080/auth/register";
const API_URL_LOGIN = "http://localhost:8080/auth/login";

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