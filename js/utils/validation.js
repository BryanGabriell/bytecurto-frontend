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
    return true;
}