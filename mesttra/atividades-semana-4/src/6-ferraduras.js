/*
Faça um algoritmo para calcular quantas ferraduras são necessárias para equipar
todos os cavalos comprados para um haras. O usuário devera informar a quantidade de
cavalos adquiridos.
 */

const prompt = require('prompt-sync')();

var qtdCavalos = Number(prompt("Informe a quantidade de cavalos: "))
var valorFerradura = Number(prompt("Informe o valor de cada ferradura R$: "))

var qtdFerraduras = qtdCavalos * 4

var valorCompra = qtdFerraduras * valorFerradura

console.log("\nA quantidade de ferraduras necessárias: " + qtdFerraduras)
console.log("Valor total para a compra das ferraduras: " + valorCompra.toFixed(2))