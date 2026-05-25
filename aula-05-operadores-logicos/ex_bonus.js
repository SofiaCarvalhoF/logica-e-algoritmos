// Instrução para poder rodar
// npm install prompt-sync

// Importar módulo
const prompt = require('prompt-sync')();

// Coletar dados e criar variáveis (guardando o texto "s" ou "n")
let compra = parseFloat(prompt("Qual o valor da compra? "));
let clienteVip = prompt("O cliente é VIP? (s/n): ");
let cupom = prompt("O cliente possui cupom? (s/n): ");
let parcela = prompt("O cliente tem parcelas atrasadas? (s/n): ");

// Lógica para decidir o desconto
// Cenário A: VIP ("s") e compra > 500
// OU
// Cenário B: tem cupom ("s") e NÃO possui parcelas atrasadas ("n")
if ((clienteVip === "s" && compra > 500) || (cupom === "s" && parcela === "n")) {
    console.log("Desconto aplicado!!");
} else {
    console.log("Desconto negado!!");
}