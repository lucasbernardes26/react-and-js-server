# 🚀 React & JS Server

Este é um projeto full-stack que demonstra a integração entre um frontend moderno construído com **React** e um backend robusto utilizando **Node.js**.

---

## 📋 Sobre o Projeto

O **React & JS Server** foi desenvolvido para iniciar meus estudos de integração entre front-end e back-end. O projeto foca em uma arquitetura limpa e na facilidade de comunicação entre o cliente e o servidor.

## 🛠️ Tecnologias Utilizadas

### Frontend
* **React.js**: Biblioteca para construção de interfaces.
* **Axios**: Cliente HTTP para chamadas à API.
* **Markdown**: Para documentação.

### Backend
* **Node.js**: Ambiente de execução JavaScript.
* **Express**: Framework web para o servidor.
* **CORS**: Gerenciamento de permissões de acesso.

---

## ⚙️ Instalação e Execução

Para rodar este projeto localmente, siga os passos abaixo:

### 1. Clonar o Repositório
```bash
git clone [https://github.com/lucasbernardes26/react-and-js-server.git](https://github.com/lucasbernardes26/react-and-js-server.git)
cd react-and-js-server ```
```

### 2. Configurar o Backend (Server)
```bash
// Entre na pasta do servidor
cd server

// Instale as dependências
npm install

// Inicie o servidor
npm start
```

### 3. Configurar o Frontend (Client)
```bash
// Em um novo terminal, entre na pasta do cliente
cd client

//  Instale as dependências
npm install

// Inicie a aplicação React
npm start
```

### 4. Estrutura de Pastas

```bash
react-and-js-server/
├── client/              # Pasta do Frontend (React)
│   ├── src/             # Componentes, Hooks e Telas
│   └── package.json     # Dependências do React
├── server/              # Pasta do Backend (Node.js)
│   ├── routes/          # Definição de rotas da API
│   ├── controllers/     # Lógica de negócio
│   └── index.js         # Ponto de entrada do servidor
├── .gitignore           # Arquivos ignorados pelo Git
└── README.md            # Documentação do projeto
```