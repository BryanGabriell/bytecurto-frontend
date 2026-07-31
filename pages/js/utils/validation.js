export function validarCamposCadastro(nome, email, senha) {
    const paragrafoErro = document.getElementById("paragrafo");
    
    paragrafoErro.style.color = "#ff4d4d"; 

    if (nome == "" || email == "" || senha == "") {
        paragrafoErro.textContent = "Erro: Preencha todos os campos";
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        paragrafoErro.textContent = "Por favor, insira um e-mail válido!";
        return false;
    }

    if (senha.length < 6) {
        paragrafoErro.textContent = "A senha deve ter pelo menos 6 caracteres!";
        return false;
    }

    paragrafoErro.textContent = "Tudo pronto! Criando conta...";
    paragrafoErro.style.color = "#2ecc71";
    return true;
}

export function validarCamposLogin(email,senha){
 const mensagemErro = document.getElementById("mensagem-erro");


    if (email == "" || senha == ""){
        mensagemErro.textContent = "Preencha todos os campos!";
        mensagemErro.style.color = "#ff4d4d";
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        mensagemErro.textContent = "Por favor, insira um e-mail válido!";
        mensagemErro.style.color = "#ff4d4d";
        return false;
    }

     if (senha.length < 6) {
        mensagemErro.textContent = "A senha deve ter pelo menos 6 caracteres!";
        return false;
    }

     mensagemErro.textContent = "";
     mensagemErro.style.color = "";
    return true;
}

export function validarCamposUrl(url){
    const mensagemErroUrl = document.getElementById("mensagem-status");
    if(url === ""){
    mensagemErroUrl.textContent = "Digite uma url";
    mensagemErroUrl.style.color = "#ff4d4d";
    return false;
}

try {
    new URL(url);
} catch (error) {
     mensagemErroUrl.textContent = "URL inválida";
        mensagemErroUrl.style.color = "#ff4d4d";
        return false;
}

if(url.length > 2048){
    mensagemErroUrl.textContent = "O limite de caracteres é 2048";
    mensagemErroUrl.style.color = "#ff4d4d";
    return false;
}
 mensagemErroUrl.textContent = "";
 mensagemErroUrl.style.color = "";
    return true;
}