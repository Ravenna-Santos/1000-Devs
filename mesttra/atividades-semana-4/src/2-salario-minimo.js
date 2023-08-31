/*
2. Faça um algoritmo que receba o valor do salário mínimo e o valor do salário de um
funcionário, calcule e mostre a quantidade de salários mínimos que ganha esse
funcionário.
*/

const prompt = require('prompt-sync')();

var salarioMinimo = Number(prompt("Informe o valor do salário mínimo: "))
var salarioFuncionario = Number(prompt("Informe o valor do salário do funcionário: "))

var qtdSalariosMinimos = salarioFuncionario / salarioMinimo

console.log("\nO funcionário recebe " + qtdSalariosMinimos.toFixed(1) + " salários mínimos!")