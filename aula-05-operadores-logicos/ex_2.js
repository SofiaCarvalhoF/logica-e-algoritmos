// Instrução para poder rodar
// npm install prompt-sync

// Importar módulo
const prompt = require('prompt-sync')();

// Coletar dados e criar variáveis
let idade = parseFloat(prompt("Insira a idade: "))

// Lógica para decidir a entrada
if( idade <5 || idade >=65) {
    console.log("A entrada é gratuita.")
} else {
    console.log("O visitante paga ingresso.")
}
    