// Instrução para poder rodar
// npm install prompt-sync

// Importar módulo
const  prompt = require('prompt-sync')();

// Coletar dados e criar variáveis
let idade = parseFloat(prompt("Qual é a sua idade?"))

let sabeJS = prompt("Sabe JavaScript? (s/n): ") === "s"

let nomeP = prompt("Sabe Python? (s/n): ") === "s"

// Lógica para decidir se o curriculo é aprovado ou não
if(idade < 18 || (sabeJS == "n" && sabeP == "n")) {
    console.log("Currículo Negado!!")
} else {
    console.log("Currículo Aprovado!!")
}
    