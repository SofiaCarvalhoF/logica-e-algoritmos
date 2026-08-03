// Instrução para poder rodar
// npm install prompt-sync

// Importar módulo
const prompt = require('prompt-sync')();

// Coletar dados e criar variáveis
let nota = parseFloat(prompt("Insira a nota do aluno: "))
let frequencia = parseFloat(prompt("Informe a frequencia (%): "))
// Lógica para decidir o estado do aluno
if( media >= 7.0 && frequencia >=75) {
    console.log("Aluno aprovado.")
} else {
    console.log("Aluno reprovado.")
}
    