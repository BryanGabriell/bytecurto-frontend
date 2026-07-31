const LINK_API_URL = "http://18.116.82.128:8080/api/links/encurtar";

export async function encurtarLinkService(dadosLink, token) {
    const resposta = await fetch(LINK_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(dadosLink)
    });

    return resposta;
}