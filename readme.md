<h1 align="center">
  Responde Aí Backend
</h1>

Backend foi feito com intuito especifíco de atender as requisições do projeto Responde Aí Mobile, que se encontra no seguinte [link](https://github.com/luizhsou1/responde-ai-mobile).

## 👨🏼‍💻 Desenvolvedor

- [Luiz Henrique](https://github.com/luizhsou1)

## 🚀 Tecnologias

- [Typescript](https://www.typescriptlang.org/)
- [Nodejs](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- [Express](http://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)

## ✋🏻 Pré-requisitos

- Ambiente configurado com Nodejs e MongoDB [link útil](https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb--how-to-get-connected-to-your-database).

  ou

- Docker instalado

## 🔥 Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta `cd responde-ai-backend`;
3. Rode `npm i` para instalar as dependências;
4. Rode `npm start` para executar o servidor;
5. Rode `npm run watch` em uma aba do terminal e `npm run dev` em outra aba, para rodar em desenvolvimento e não ter que se preocupar em executar comandos a cada nova mudança salva.

## 🔥 Instalação e execução (via docker)

1. Rode `docker run camminho_imagem`, para baixar imagem do projeto no [Docker Hub](https://google.com.br);

## ⚡️ Funcionalidades

1. [Cadastrar Questão](./functionalities/create-question.md)
2. [Listar Todas Questões](./functionalities/find-all.questions.md)
3. [Buscar Questão Específica](./functionalities/find-question.md)
4. [Atualizar Questão Específica](./functionalities/update-question.md)
5. [Deletar Questão Específica](./functionalities/remove-question.md)
6. [Responder Questão](./functionalities/answer-question.md)
7. [Registrar Token do Firebase Cloud Messaging](./functionalities/create-fcm.md)
8. [Listar Todos Tokens do Firebase Cloud Messaging](./functionalities/find-all-fcm.md)
