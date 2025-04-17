import express from "express";
import conectaNaDatabase from "./config/dbConnect.js"; 
import routes from "../routes/index.js";

const conexao = await conectaNaDatabase(); // 

conexao.on("error", (erro) => {
  console.error("Erro de conexão:", erro);
});

conexao.on("connected", () => {
  console.log("Conexão com o banco feita com sucesso (evento: connected)!");
});

const app = express();  //todo o conjunto de funções express, para a variável app || variável onde está criando a aplicação express || representa toda a sua API — ou seja, todas as rotas, os middlewares, e tudo mais que a aplicação vai fazer.
routes(app);  //chamandO a função routes do index.js - > que está usando o app para configurar as rotas da API || "Passa a minha aplicação pra essa função que vai configurar todas as rotas pra mim"


export default app;







