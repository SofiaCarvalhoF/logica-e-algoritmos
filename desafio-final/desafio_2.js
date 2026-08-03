// Não esquecer de instalar (Para poder simular):
// npm install prompt-sync

const prompt = require('prompt-sync')();

// --- ETAPA 1 — Vetores Paralelos ---
const nomes = [];
const notas1 = [];
const notas2 = [];
const frequencias = [];
const medias = [];
const situacoes = [];
const Total_Alunos = 3;

// --- ETAPA 2 — Cálculo  ---

// Calcula e retorna a média das duas notas
function calculaMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

// Retorna a situação do aluno com base nas regras do enunciado
function verificaSituacao(media, frequencia) {
    if (media >= 7.0 && frequencia >= 75) {
        return "Aprovado";
    } else if (media >= 4.0 && frequencia >= 75) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

// --- ETAPA 3 — Exibição  ---
// Exibe os dados completos de cada aluno individualmente
function exibeDados(indice) {
    console.log(`\n Dados — Aluno ${indice + 1}          `);
    console.log(`  Nome:        ${nomes[indice]}`);
    console.log(`  Nota 1:      ${notas1[indice].toFixed(1)}`);
    console.log(`  Nota 2:      ${notas2[indice].toFixed(1)}`);
    console.log(`  Frequência:  ${frequencias[indice]}%`);
    console.log(`  Média:       ${medias[indice].toFixed(1)}`);
    console.log(`  Situação:    ${situacoes[indice]}`);
    console.log(`==========================================`);
}

// Resumo final da turma
function exibeResumo() {
    let totalAprovados = 0;
    let totalRecuperacao = 0;
    let totalReprovados = 0;

    // Loop utilizando os contadores acumulados
    for (let i = 0; i < situacoes.length; i++) {
        if (situacoes[i] === "Aprovado") {
            totalAprovados++;
        } else if (situacoes[i] === "Recuperação") {
            totalRecuperacao++;
        } else {
            totalReprovados++;
        }
    }

    console.log("\nResumo Geral Da Turma");
    console.log(`  Aprovados:       ${totalAprovados}`);
    console.log(`  Recuperação:     ${totalRecuperacao}`);
    console.log(`  Reprovados:      ${totalReprovados}`);
}

// --- (LAÇOS LOOP) ---

console.log(`--- Sistema de Cadastro de Alunos ---`);

// Loop para Entrada de Dados (Cadastro)
for (let i = 0; i < Total_Alunos; i++) {
    console.log(`\nDigite os dados do ${i + 1}º aluno:`);
    
    nomes[i] = prompt("Nome: ");
    notas1[i] = parseFloat(prompt("Nota 1: "));
    notas2[i] = parseFloat(prompt("Nota 2: "));
    frequencias[i] = parseFloat(prompt("Frequência (%): "));

    // Processamento imediato utilizando as funções obrigatórias
    medias[i] = calculaMedia(notas1[i], notas2[i]);
    situacoes[i] = verificaSituacao(medias[i], frequencias[i]);
}

// Loop para Exibição dos Boletins
for (let i = 0; i < Total_Alunos; i++) {
    exibeDados(i);
}

// Exibição do Resumo 
exibeResumo();