import express from "express";
import ClienteController from "../controllers/clienteController.js";

const routes = express.Router();

routes.get("/clientes", ClienteController.listarClientes);
routes.get("/clientes/:id", ClienteController.listarClientePorId);
routes.post("/clientes/", ClienteController.cadastroCliente);

export default routes;