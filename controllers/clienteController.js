import cliente from "../src/models/Cliente.js";

class ClienteController{

    static async listarClientes(req, res){  //listar todos os clientes
        try{ 
            const listaClientes = await cliente.find({}).populate({path: "livro",populate: {path: "autor"}}).exec();  
            res.status(200).json(listaClientes); 
        } catch(erro){
            res.status(500).json({message: `${erro.message} - falha na requisição`})
        };
    };

     static async listarClientePorId(req, res){  //listar cliente por Id
            try{
                const id = req.params.id;
                const clienteEncontardo = await cliente.findById(id);  
                res.status(200).json(clienteEncontardo); 
            } catch(erro){
                res.status(500).json({message: `${erro.message} - falha na requisição do autor!`})
            }
        };
    
        static async cadastroCliente(req, res){ //cadastrar novo cliente
            try{
                const novoCliente = await cliente.create(req.body);
                res.status(201).json({message: "criado com sucesso!", cliente: novoCliente});
            }catch (erro) {
                res.status(500).json({message: `${erro.message} - falha ao cadastrar autor!`});
            }
        };

        static async atualizarCliente(req, res){ //editar cliente por Id
            try{
                const id = req.params.id;
                await cliente.findByIdAndUpdate(id, req.body);  
                res.status(200).json({message: "cliente aualizado!"}); 
            } catch(erro){
                res.status(500).json({message: `${erro.message} - falha na atualização do cliente!`})
            }
        };

        
    static async deletarCliente(req, res){ //editar cliente por Id
        try{
            const id = req.params.id;
            await cliente.findByIdAndDelete(id, req.body);  
            res.status(200).json({message: "cliente removido!"}); 
        } catch(erro){
            res.status(500).json({message: `${erro.message} - falha na remoção do cliente!`})
        }
    };


    
};

export default ClienteController;