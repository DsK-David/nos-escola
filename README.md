# Projeto Nos Escola 🏫

Bem-vindo ao projeto **Nos Escola**! Este projeto é uma aplicação web construída com Node.js, Express, SQLite e bcrypt. Ele permite que usuários realizem postagens sobre o dia ou sobre assuntos escolares.

## Índice 📜
- [Configuração](#configuração)
- [Instalação](#instalação)
- [Rotas](#rotas)
  - [Página Inicial](#página-inicial)
  - [Login](#login)
  - [Cadastro](#cadastro)
  - [Página Principal](#página-principal)
  - [Novos Posts](#novos-posts)
  - [Dados do Usuário](#dados-do-usuário)
- [Banco de Dados](#banco-de-dados)
- [Contribuição](#contribuição)
- [autor](#autor)

## Configuração ⚙️

Antes de começar, certifique-se de ter o Node.js e o npm instalados em sua máquina. Em seguida, clone este repositório e execute:

```bash
npm install
```
Isso instalará todas as dependências necessárias.

rode o servidor
```bash
npm run server
```


## Instalação 🚀

Siga esses passos para usar o projeto no seu cumputador 

clone o projeto no github
```bash
git clone https://github.com/DsK-David/nos-escola.git
```
Entre na pasta do projeto
```bash
cd nos-escola
```
Rode a instalação das dependencias
```bash
npm install
```
Inicie o servidor
```bash
npm run server
```
Agora você pode ver o site rodando em `localhost:5500`
```bash
servidor rodando na porta 5500
```

O servidor será iniciado em [http://localhost:5500](http://localhost:5500).

## Rotas 🛣️

### Página Inicial

- **Rota:** `/`
- **Descrição:** Página inicial da aplicação.
- **Acesso:** Público

### Login

- **Rota:** `/auth/login`
- **Descrição:** Página de login.
- **Acesso:** Público

### Cadastro

- **Rota:** `/auth/cadastro`
- **Descrição:** Página de cadastro.
- **Acesso:** Público

### Página Principal

- **Rota:** `/home`
- **Descrição:** Página principal após o login.
- **Acesso:** Privado

### Novos Posts

- **Rota:** `/new/posts/`
- **Descrição:** Página para criar novos posts.
- **Acesso:** Privado

### Dados do Usuário

- **Rota:** `/dados`
- **Descrição:** Retorna todos os dados dos usuários.
- **Acesso:** Privado

## Banco de Dados 📊

Este projeto utiliza o SQLite para armazenar dados de usuário, incluindo nome, idade, email, senha, escola e avatar.

```sql
CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    idade INTEGER,
    email TEXT,
    senha TEXT,
    escola TEXT,
    avatar TEXT
);
```

## Contribuição 🤝

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Fork o repositório.
2. Crie uma branch para sua contribuição 
```bash
git checkout -b feature/sua-contribuicao
```
3. Faça suas alterações e faça _commit_ 
```bash
git commit -m 'Adicionando sua contribuição'
```
4. Push para a branch
```bash
git push origin feature/sua-contribuicao
```
5. Abra um _pull request_.

Vamos crescer juntos! 🚀

# autor
David Silva