// Importação da biblioteca para rodar
const prompt = require('prompt-sync')()

let vetor = [];

// Lê os 5 números
for (let i = 0; i < 5; i++) {
    vetor[i] = Number(prompt("Digite um número:"));
}

// Mostra invertido 
for (let i = 4; i >= 0; i--) {
    console.log(vetor[i]);
}