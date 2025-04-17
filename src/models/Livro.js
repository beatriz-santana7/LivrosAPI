import mongoose from "mongoose";


const livroSchema = new mongoose.Schema({  //Schema: objeto de configuração, onde o mongoose irá definir a estrutura e propriedades (atributos) que o objeto deve ter
    id: {type: mongoose.Schema.Types.ObjectId},  //object id: mongdb para a criação de id's únicos
    titulo: {type: String, required: true}, //propriedade obrigatória
    editora: {type: String},
    preco: {type: Number},
    paginas: {type: Number},
    autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true}, //Reference: referência para um documento de coleção autores | "Esse campo autor não vai guardar o autor inteiro, só o ObjectId do autor, que está salvo em outra coleção chamada autores." | ligar dois objetos que estão em classes diferentes

}, {versionKey: false}); //rastrear a versão de um documento e evitar conflitos quando múltiplos processos tentam modificar o mesmo documento ao mesmo tempo

const livro = mongoose.model("livros", livroSchema);

export {livro, livroSchema};

//modelo - interface - objeto que representa uma coleção na base de dados