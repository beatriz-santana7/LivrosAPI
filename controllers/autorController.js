import { autor } from "../src/models/Autor.js";

class AutorController{

    static async listarAutores(req, res){  //listar todos os autores
        try{ 
            const listaAutores = await autor.find({});  
            res.status(200).json(listaAutores); 
        } catch(erro){
            res.status(500).json({message: `${erro.message} - falha na requisição`})
        }
    };

    static async listarAutorPorId(req, res){  //listar autor por Id
        try{
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);  
            res.status(200).json(autorEncontrado); 
        } catch(erro){
            res.status(500).json({message: `${erro.message} - falha na requisição do autor!`})
        }
    };

    static async cadastroAutor(req, res){ //cadastrar novo autor
        try{
            const novoAutor = await autor.create(req.body);
            res.status(201).json({message: "criado com sucesso!", autor: novoAutor});
        }catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao cadastrar autor!`});
        }
    };

    static async atualizarAutor(req, res){ //editar autor por Id
        try{
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);  
            res.status(200).json({message: "autor aualizado!"}); 
        } catch(erro){
            res.status(500).json({message: `${erro.message} - falha na atualização do autor!`})
        }
    };

    static async deletarAutor(req, res){ //deletar autor por Id
        try{
            const id = req.params.id;
            await livro.findByIdAndDelete(id, req.body);  
            res.status(200).json({message: "autor removido!"}); 
        } catch(erro){
            res.status(500).json({message: `${erro.message} - falha na remoção do autor!`})
        }
    };
};

export default AutorController;

