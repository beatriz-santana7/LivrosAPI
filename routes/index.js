import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";


const routes = (app) => {  //função que recebe o app como parâmetro e configura as rotas nele, registra as rotas da aplicação
    app.route("/").get((req, res) => res.status(200).send("Seja bem-vindo(a) a Livraria!")) 

    app.use(express.json(), livros, autores);  //express.json() - habilita o json no corpo das requisições
};


export default routes;