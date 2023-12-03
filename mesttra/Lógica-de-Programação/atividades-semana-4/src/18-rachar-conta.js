/*
Três amigos, Carlos, André e Felipe. decidiram rachar igualmente a conta de um bar.
Faça um algoritmo para ler o valor total da conta e imprimir quanto cada um deve pagar,
mas faça com que Carlos e André não paguem centavos.
Ex: uma conta de R$101,53
resulta em R$33,00 para Carlos, R$33,00 para André e R$35,53 para Felipe.
*/

const prompt = require('prompt-sync')();

var valorConta = Number(prompt("Digite o valor da conta R$: "))

console.log("\nCarlos pagará: R$: " + Math.floor(valorConta / 3))
console.log("André pagará: R$: " + Math.floor(valorConta / 3))
console.log("Felipe pagará: R$: " + (valorConta - (Math.floor(valorConta / 3) * 2)).toFixed(2))