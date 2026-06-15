// Importação da biblioteca para rodar ( npm install prompt-sync)
const prompt = require('prompt-sync')(); 

// Criando as variáveis 
let nomesPratos = [];
let precosPratos = [];

// Estrutura 
for (let i = 0; i < 4; i++) {
    nomesPratos[i] = prompt(`Digite o nome do prato ${i + 1}:`);
    precosPratos[i] = parseFloat(prompt(`Digite o preço do prato ${i + 1}:`));
}

let cardapioTexto = "--- Cardápio ---\n";


for (let i = 0; i < 4; i++) {
    cardapioTexto += `${i + 1}. ${nomesPratos[i]} - R$ ${precosPratos[i].toFixed(2)}\n`;
}

// Mostra o cardápio e pede a escolha do usuário
let opcao = parseInt(prompt(cardapioTexto + "Escolha um prato pelo número (1 a 4):"));

// Estrutura se...senão para validar a opção do usuário
if (opcao >= 1 && opcao <= 4) {
    let indice = opcao - 1; // Ajusta o número digitado para o índice do vetor (0 a 3)
    console.log(`Você escolheu: ${nomesPratos[indice]}\nPreço: R$ ${precosPratos[indice].toFixed(2)}`);
} else {
    console.log("Opção inválida! Escolha um número entre 1 e 4.");
}