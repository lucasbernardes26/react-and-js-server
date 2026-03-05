# 🚀 React & JSON Server (Consumo de API)

Este é um projeto full-stack desenvolvido para estudar e demonstrar a integração entre um frontend moderno construído com **React** (via Vite) e um backend simulado utilizando o **JSON Server**. 

O sistema conta com um fluxo completo de autenticação simulada, permitindo o cadastro de novos usuários e a validação de login consumindo a API local. Além disso, o projeto está totalmente **Dockerizado** e conta com uma esteira de CI/CD via GitHub Actions.

## 📋 Funcionalidades

* **Cadastro de Usuários:** Criação de novos usuários com validação para evitar logins duplicados.
* **Login de Usuários:** Autenticação verificando credenciais (login e senha) diretamente no banco de dados simulado (`db.json`).
* **Roteamento:** Navegação entre as telas de Login, Cadastro e Home utilizando `react-router-dom`.

## 🛠️ Tecnologias Utilizadas

### Frontend
* **React.js** (com Vite para build ultrarrápido)
* **React Router DOM** (gerenciamento de rotas)
* **CSS** (estilização nativa)

### Backend (Mock API)
* **JSON Server**: Simulação de uma API RESTful completa a partir do arquivo `db.json`.

### DevOps & Infraestrutura
* **Docker**: Containerização da aplicação (Frontend + Backend rodando simultaneamente).
* **GitHub Actions**: Pipeline de CI/CD automatizado para build da imagem.
* **GitHub Container Registry (GHCR)**: Hospedagem da imagem Docker.

---

## ⚙️ Como executar o projeto localmente

Para rodar este projeto na sua máquina (sem Docker), você precisará do [Node.js](https://nodejs.org/) instalado.

### 1. Clonar o Repositório e instalar dependências
```bash
git clone https://github.com/lucasbernardes26/react-and-js-server.git
cd react-and-js-server
npm install
```

### 2. Iniciar o Servidor (Backend Mockado)
Em um terminal, inicie o JSON Server. Ele rodará na porta 3020.

```bash
npm run server
```
### 3. Iniciar o Frontend (React)
Em um novo terminal (mantendo o servidor rodando), inicie a aplicação React com o Vite.
```bash
npm run dev
```
Acesse a aplicação no navegador através do link fornecido no terminal.

---
## 🐳 Como executar via Docker
A aplicação já está empacotada em um container Docker, contendo tanto o frontend quanto o backend em um único ambiente. Se você possui o Docker instalado, basta rodar os comandos abaixo:

### 1. Baixar a imagem mais recente:

```bash
docker pull ghcr.io/lucasbernardes26/react-and-js-server:latest
```
### 2. Executar o container:
```bash
docker run -p 4173:4173 -p 3020:3020 ghcr.io/lucasbernardes26/react-and-js-server:latest
```
---
# 👨‍💻 Autor
Lucas Bernardes

