// Importação da biblioteca para rodar
const prompt = require('prompt-sync')()

console.log('--- Vetores com loop ---')
console.log('Digite o nome de 5 produtos de uma lista de compras abaixo:')
console.log('')

//Criando o Vetor para guardar os valores
const produto = []

// Estrutura de repetição para coletar o nome dos 5 produtos
for (let i = 0; i < 5; i++) {
    produto[i] = prompt(`Digite o nome do ${i + 1}º produto: `)
}

// Exibindo o nome dos produtos coletados
console.log('______________________________________')
console.log('')

//Laço para exibir os nomes coletados
for (let i = 0; i <5; i++) {
    console.log(`Nome do ${i + 1}º produto digitado: ${produto[i]}`)
}