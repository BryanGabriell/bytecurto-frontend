# 🔗 ByteCurto — Frontend

Interface web do **ByteCurto**, um encurtador de URLs desenvolvido como projeto full stack.

> Frontend desenvolvido em HTML, CSS e JavaScript puro para praticar integração com APIs REST. Foco principal em desenvolvimento back-end com Java e Spring Boot.

-----

## 📸 Telas

|Index                                        |Login                          |Encurtador                               |
|---------------------------------------------|-------------------------------|-----------------------------------------|
|Página inicial com opções de login e cadastro|Autenticação com e-mail e senha|Encurtamento e cópia de URL com um clique|

-----

## 🚀 Funcionalidades

- ✅ Tela inicial com navegação para login e cadastro
- ✅ Cadastro de usuário com validação de campos
- ✅ Login com autenticação JWT
- ✅ Encurtamento de URL autenticado
- ✅ Cópia do link gerado com um clique
- ✅ Redirecionamento automático baseado no token

-----

## 🛠️ Tecnologias

- HTML5
- CSS3
- JavaScript (ES6+) — sem frameworks
- Fetch API para consumo da API REST
- LocalStorage para gerenciamento do token JWT

-----

## 📁 Estrutura do Projeto

```
bytecurto-frontend/
├── css/
│   ├── index.css
│   ├── login.css
│   ├── cadastro.css
│   └── encurtador.css
├── img/
│   └── logoByteCurto.png
├── js/
│   ├── api/
│   │   ├── authApi.js       # URLs da API de autenticação
│   │   └── linkApi.js       # URL da API de links
│   ├── pages/
│   │   ├── index.js         # Lógica da página inicial
│   │   ├── login.js         # Lógica de login
│   │   ├── cadastro.js      # Lógica de cadastro
│   │   └── encurtador.js    # Lógica de encurtamento
│   ├── services/
│   │   ├── authService.js   # Chamadas HTTP de autenticação
│   │   └── linkService.js   # Chamadas HTTP de links
│   └── utils/
│       ├── validation.js    # Validações de formulário
│       └── storage.js       # Gerenciamento do token JWT
├── index.html
├── login.html
├── cadastro.html
└── encurtador.html
```

-----

## ⚙️ Como Rodar

Este frontend consome a API do [ByteCurto Backend](https://github.com/BryanGabriell/bytecurto-backend) *(em desenvolvimento)*.

1. Clone o repositório:

```bash
git clone https://github.com/BryanGabriell/bytecurto-frontend.git
```

1. Abra o arquivo `index.html` no navegador ou use uma extensão como **Live Server** no VS Code.
1. Certifique-se que o backend está rodando em `http://localhost:8080`.

-----

## 🔗 Backend

O back-end está sendo desenvolvido com:

- Java 17
- Spring Boot 3
- Spring Security + JWT
- PostgreSQL
- Docker

Repositório: *em breve*

-----

## 👨‍💻 Autor

**Bryan Gabriel**
Desenvolvedor Java Junior | Back-end

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Bryan%20Gabriel-blue?style=flat&logo=linkedin)](https://linkedin.com/in/gabrielsouzamendes)
[![GitHub](https://img.shields.io/badge/GitHub-BryanGabriell-black?style=flat&logo=github)](https://github.com/BryanGabriell)
