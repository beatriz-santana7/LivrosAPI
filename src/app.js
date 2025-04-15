import express from "express";
import conectaNaDatabase from "./config/dbConnect.js"; 
import livro from "./models/Livro.js";


const conexao = await conectaNaDatabase();


conexao.on("error", (erro) => { //on - relacionados a enventos
    console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!")
});

const app = express();  //todo o conjunto de funções express, para a variável app
app.use(express.json()); //middleware - acesso aos request e response, fazendo ações nelas, modificando objetos e etc | executa todas as expressões que chegam e são manuseadas pelo express | converte string para json



app.get("/", (req, res) => {  //express passa a ser responsável por gerenciar as rotas
    res.status(200).send("Curso Node");
});

//CRUD - Create, Read, Update, Delete


app.get("/livros", async(req, res) => {  //buscar livro - .get - "pegar" dados - request
    const listaLivros = await livro.find({});  //.find - método do mongoose
    res.status(200).json(listaLivros);  //json - notação de objeto, que tem como referencia um objeto em javascript
});

app.get("/livros/:id", (req, res) => {  //busca um livro, por um id específico, o ":" indica que id será uma variável
    const index = buscaLivro(req.params.id); 
    res.status(200).json(livros[index])  

})

app.post("/livros", (req, res) => { //cadastrar livro
    livros.push(req.body);  //express - cria o corpo da requisição
    res.status(201).send("Livro cadastrado!")
})

app.put("/livros/:id", (req, res) => { //editar livro
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
})

app.delete("/livros/:id", (req, res) => { //deletar livro
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);             //splice: deleta um elemento específico, em qualquer parte do array (index- array, 1 - indica que só deletará um item)
    res.status(200).send("Livro removido!")

})

export default app;







