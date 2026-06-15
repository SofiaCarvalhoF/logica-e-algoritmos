const prompt = require('prompt-sync')();

console.log('--- Vetores com loop ---');
console.log('Digite o preço de 6 produtos abaixo:');
console.log('');

// Criando o Vetor para guardar os valores
const precos = [];

// 1. Estrutura de repetição para coletar os 6 preços
for (let i = 0; i < 6; i++) {
    let valor = parseFloat(prompt(`Digite o preço do produto ${i + 1}: `));
    precos.push(valor);
}


let maior = precos[0];
let menor = precos[0];

// 2. Achar o maior e o menor preço
for (let i = 0; i < 6; i++) {
    if (precos[i] > maior) {
        maior = precos[i];
    }
    if (precos[i] < menor) {
        menor = precos[i];
    }
}


console.log('______________________________________');
console.log('');

// 3. Para exibir os preços coletados
for (let i = 0; i < 6; i++) {
    console.log(`Preço do ${i + 1}º produto digitado: R$ ${precos[i].toFixed(2)}`);
}

console.log('______________________________________');
console.log(`O maior preço encontrado foi: R$ ${maior.toFixed(2)}`);
console.log(`O menor preço encontrado foi: R$ ${menor.toFixed(2)}`);

