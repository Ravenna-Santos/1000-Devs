/*
Faça um algoritmo que receba o peso de uma pessoa, calcule e mostre:
a) o novo peso se a pessoa engordar 15% sobre o peso digitado;
b) o novo peso se a pessoa engordar 20% sobre o peso digitado.
*/

const prompt = require('prompt-sync')();

var pesoAtual = Number(prompt("Informe o peso em KG: "))

var peso15 = pesoAtual + pesoAtual * (15/100)
var peso20 = pesoAtual + pesoAtual * (20/100)

console.log("\nCaso a pessoa engorde 15% ficaria com: " + peso15.toFixed(2) + " KG")
console.log("Caso a pessoa engorde 20% ficaria com: " + peso20.toFixed(2) + " KG")