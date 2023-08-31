/*
Uma imobiliária vende apenas terrenos retangulares. Faça um algoritmo para imprimiraárea do terreno e o valor
de venda do mesmo. Para isto será necessário o usuário informar as dimensões em metros (frente e lateral) do
terreno além do valor cobrado pelo metro quadrado.
*/

const prompt = require('prompt-sync')();

var base = Number(prompt("Quantos metros o terreno possui de frente: "))
var altura = Number(prompt("Quantos metros o terreno possui de lateral: "))
var valorMetro = Number(prompt("Informe o valor do metro quadrado: "))

var areaTotal = base * altura

var valorTerreno = areaTotal * valorMetro

console.log("\nÁrea total do terreno de " + base + "mts de frente com " + altura + "mts lateral é: " + areaTotal + "mts")
console.log("O valor deste terreno é: R$ " + valorTerreno.toFixed(2))