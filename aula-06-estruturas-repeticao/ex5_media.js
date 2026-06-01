// Importa o módulo (Para rodar algoritmo no terminal)
const prompt = require('prompt-sync')();

// Título
console.log('--- Média ---')
console.log("")

let nota = Number (prompt("Digite a nota do aluno (-1 para encerrar): "));

let soma = 0;
let contador = 0;

while (nota !== -1) {
    soma += nota;
    contador++;

    nota = Number(prompt("Digite outra nota (-1 para encerrar): "));
}

if (contador > 0) {
    let media = soma / contador;
    console.log("Média das notas:", media);
} else {
    console.log("Nenhuma nota foi informada.");
}