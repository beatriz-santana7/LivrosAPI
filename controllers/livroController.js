import {livro} from "../src/models/Livro.js";

class LivroController{

    static async listarLivros(req, res){  //listar todos os livros
        try{ 
            const listaLivros = await livro.find({}).populate("autor").exec();  //populate: retorna todos os dados completos do autor e não só o id
            res.status(200).json(listaLivros); 
        } catch(erro){
            res.status(500).json({message: `${erro.message} - falha na requisição`})
        }
    };

    static async listarLivroPorId(req, res){  //listar livro por Id
        try{
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);  
            res.status(200).json(livroEncontrado); 
        } catch(erro){
            res.status(500).json({message: `${erro.message} - falha na requisição do livro!`})
        }
    };

    static async cadastroLivro(req, res){ //cadastrar novo livro
        try{
            const novoLivro = await livro.create(req.body);
            res.status(201).json({message: "criado com sucesso!", livro: novoLivro});
        }catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao cadastrar livro`});
        }
    };

    static async atualizarLivro(req, res){ //editar livro por Id
        try{
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);  
            res.status(200).json({message: "livro aualizado!"}); 
        } catch(erro){
            res.status(500).json({message: `${erro.message} - falha na atualização do livro!`})
        }
    };

    static async deletarLivro(req, res){ //editar livro por Id
        try{
            const id = req.params.id;
            await livro.findByIdAndDelete(id, req.body);  
            res.status(200).json({message: "livro removido!"}); 
        } catch(erro){
            res.status(500).json({message: `${erro.message} - falha na remoção do livro!`})
        }
    };

    static async listarLivrosPorEditora(req, res){ //listar livro por editora
        const editora = req.query.editora;
        try{
            const listarLivrosPorEditora = await livro.find({editora: editora})  // edtora- prorpiedade , referenciando a model, 2º editora - variável que guarda a inf via rota, parâmetro de consulta
            res.status(200).json(listarLivrosPorEditora);
        }catch (erro){
            res.status(500).json({message: `${erro.message} - falha na busca!`})
        };
    };

    static async listarLivrosPorAutor(req, res){ //listar livro por autor
        const autor = req.query.editora;
        try{
            const listarLivrosPorAutor = await livro.find({autor: autor})  // edtora- prorpiedade , referenciando a model, 2º editora - variável que guarda a inf via rota, parâmetro de consulta
            res.status(200).json(listarLivrosPorAutor);
        }catch (erro){
            res.status(500).json({message: `${erro.message} - falha na busca!`})
        };
    };
};

export default LivroController;

