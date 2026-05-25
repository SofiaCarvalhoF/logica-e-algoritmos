// Instrução para poder rodar
// npm install prompt-sync

// Importar módulo
const  prompt = require('prompt-sync')();

// Coletar dados e criar variáveis
let resposta = (prompt("O produto está esgotado?"))

// Lógica para decidir a resposta do sistema
if( resposta === "n") {
    console.log("Produto não esgotado, disponivel para venda!!")
} else if (resposta === "s"){
    console.log("Produto esgotado. Por favor, reabasteça o estoque!!")
}
    
