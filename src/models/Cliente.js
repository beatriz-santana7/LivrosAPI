import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, required: true},
    endereco: {type: String},
    cpf: {type: String},
    livro: {type: mongoose.Schema.Types.ObjectId, ref: 'livros', required: true},

    }, {versionKey: false});  //versionKey - controla a versão do documento, sendo útil internamente para o contrle de versões de atualizações

    const cliente = mongoose.model("clientes", clienteSchema);

    export default cliente;  //o Scheama - permite exportar o autor, como uma propriedade de livrohttps://chatgpt.com/c/67eea6f4-0698-800c-aadf-683e7787b7a4