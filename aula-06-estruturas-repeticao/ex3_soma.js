// Importa o módulo (Para rodar algoritmo no terminal)
const prompt = require('prompt-sync')();

// Solicita o número ao usuário
let numero = parseInt(prompt("Digite um número inteiro positivo:"));

// Valida se o número é positivo
if (numero > 0) {
    let contador = 1;
    let soma = 0;

    // Estrutura de repetição WHILE com condição no início
    while (contador <= numero) {
        soma += contador; // Acumula o valor na soma
        contador++;       // Incrementa o contador
    }

    // Exibe o resultado final
    console.log("A soma de todos os números de 1 até " + numero + " é: " + soma);
    console.log("A soma é: " + soma);
} else {
    console.log("Entrada inválida. Digite um número inteiro positivo.");
}