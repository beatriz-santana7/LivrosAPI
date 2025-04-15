//import http from "http";
import app from "./src/app.js";

const PORT = 3000;


app.listen(PORT, () => {  //listen - utlizado para eventos com o servidor, conexão com o servidor | 3000- porta que a conexão acontecerá , porta de comunicação
    console.log("servidor escutando!");
});



