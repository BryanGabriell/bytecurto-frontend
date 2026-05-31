const API_URL = "http://localhost:8080/auth/register";

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