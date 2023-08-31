/*
Ler um número inteiro com até quatro dígitos e imprimir a saída da seguinte forma:
MILHARES=x
CENTENA=x
DEZENA=x
UNIDADE=x
 */

const prompt = require('prompt-sync')();

var numero = Number(prompt("Digite um número de 4 dígitos: "))

console.log("\nMilhares: " + Math.trunc(numero / 1000))

numero = numero - Math.trunc(numero / 1000) * 1000
console.log("Centena: " + Math.trunc(numero / 100))

numero = numero - Math.trunc(numero / 100) * 100
console.log("Dezena: " + Math.trunc(numero / 10))

numero = numero - Math.trunc(numero / 10) * 10
console.log("Unidade: " + numero)