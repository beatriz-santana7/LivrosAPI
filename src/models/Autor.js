import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, required: true},
    nacionalidade: {type: String}

    }, {versionKey: false});  //versionKey - controla a versão do documento, sendo útil internamente para o contrle de versões de atualizações

    const autor = mongoose.model("autores", autorSchema);

    export {autor, autorSchema};  //o Scheama - permite exportar o autor, como uma propriedade de livro