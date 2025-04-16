import { cliente } from "../src/models/Cliente.js";

class ClienteController{

    static async listarClientes(req, res){  //listar todos os autores
        try{ 
            const listaClientes = await cliente.find({});  
            res.status(200).json(listaClientes); 
        } catch(erro){
            res.status(500).json({message: `${erro.message} - falha na requisição`})
        };
    };

     static async listarClientePorId(req, res){  //listar autor por Id
            try{
                const id = req.params.id;
                const clienteEncontardo = await cliente.findById(id);  
                res.status(200).json(clienteEncontardo); 
            } catch(erro){
                res.status(500).json({message: `${erro.message} - falha na requisição do autor!`})
            }
        };

    
        static async cadastroCliente(req, res){ //cadastrar novo autor
            try{
                const novoCliente = await cliente.create(req.body);
                res.status(201).json({message: "criado com sucesso!", cliente: novoCliente});
            }catch (erro) {
                res.status(500).json({message: `${erro.message} - falha ao cadastrar autor!`});
            }
        };
    
};

export default ClienteController;