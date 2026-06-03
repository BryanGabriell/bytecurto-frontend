const TOKEN_KEY = "token";

export const storage = {
    salvarToken(token) {
        localStorage.setItem(TOKEN_KEY, token);
    },
    
    obterToken() {
        return localStorage.getItem(TOKEN_KEY);
    },
    removerToken() {
        localStorage.removeItem(TOKEN_KEY);
    }
};