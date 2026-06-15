// Importação da biblioteca para rodar ( npm install prompt-sync)
const prompt = require('prompt-sync')(); 

// Criando as variáveis 
let gols = []; 
let mais3 = 0;
let menos3 = 0;

// Loop para o usuário digitar os 5 valores
for (let i = 0; i < 5; i++) {
    gols[i] = Number(prompt("Digite os gols do time " + (i + 1) + ": "));
}

// Loop para testar e contar as condições
for (let i = 0; i < 5; i++) {
    if (gols[i] > 3) {
        mais3 = mais3 + 1;
    } else {
        menos3 = menos3 + 1;
    }
}

// Exibindo as respostas na tela 
console.log("Times com mais de 3 gols: " + mais3);
console.log("Times com 3 gols ou menos: " + menos3);