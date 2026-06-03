import { LINK_API_URL } from "../api/linkApi";

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