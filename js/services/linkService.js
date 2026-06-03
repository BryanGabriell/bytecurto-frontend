const API_URL = "http://localhost:8080/links";

export async function encurtarLinkService(dadosLink, token) {
    const resposta = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(dadosLink)
    });

    return resposta;
}