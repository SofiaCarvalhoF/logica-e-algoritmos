// Importa o módulo (Para rodar algoritmo no terminal)
const prompt = require('prompt-sync')()

// Título
console.log('--- Senha ---')
console.log("")

let senha;
{
    // Solicita a senha ao usuário
    senha = prompt("Digite a sua senha:");

// Continua pedindo enquanto a senha digitada for diferente de "1234"
} while (senha !== "1234");

// Mensagem exibida assim que a senha correta é inserida
console.log("Acesso permitido!");