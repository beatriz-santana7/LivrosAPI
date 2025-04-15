import mongoose from "mongoose";


const livroSchema = new mongoose.Schema({  //Schema: objeto de configuração, onde o mongoose irá definir a estrutura e propriedades (atributos) que o objeto deve ter
    id: {type: mongoose.Schema.Types.ObjectId},  //object id: mongdb para a criação de id's únicos
    titulo: {type: String, required: true}, //propriedade obrigatória
    editora: {type: String},
    preco: {type: Number},
    paginas: {type: Number}

}, {versionKey: false}); //rastrear a versão de um documento e evitar conflitos quando múltiplos processos tentam modificar o mesmo documento ao mesmo tempo

const livro = mongoose.model("livros", livroSchema);

export default livro;

//modelo - interface - objeto que representa uma coleção na base de dados