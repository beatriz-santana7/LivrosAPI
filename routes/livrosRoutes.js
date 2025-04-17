import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();  //o express tem procedencia de rotas, ou seja, elas devem ser declaradas corretamente. Maior complexidade para Menor complexidade

routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/busca", LivroController.listarLivrosPorEditora);
routes.get("/livros/buscaAutor", LivroController.listarLivrosPorAutor);
routes.get("/livros/:id", LivroController.listarLivroPorId);
routes.post("/livros", LivroController.cadastroLivro);
routes.put("/livros/:id", LivroController.atualizarLivro);
routes.delete("/livros/:id", LivroController.deletarLivro);

export default routes;

