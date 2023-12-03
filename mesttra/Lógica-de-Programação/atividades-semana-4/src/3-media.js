/*
Faça um algoritmo para ler três notas de um aluno em uma disciplina e imprimir a sua
média ponderada (as notas tem pesos respectivos de 1, 2 e 3).
*/

const prompt = require('prompt-sync')();

var nota1 = Number(prompt('Informe a nota 1: '))
var nota2 = Number(prompt('Informe a nota 2: '))
var nota3 = Number(prompt('Informe a nota 3: '))

var media = (nota1 * 1 + nota2 * 2 + nota3 * 3) / (1 + 2 + 3)

console.log("\nA média ponderada das notas " + nota1 + ", " + nota2 + ", " + nota3 + " é: " + media.toFixed(2))
