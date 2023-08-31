/*
Um tonel de refresco é feito com 8 partes de água mineral e 2 partes de suco de
maracujá. Faça um algoritmo para calcular quantos litros de água e de suco são
necessários para se fazer uma certa quantidade de litros de refresco informados pelo
usuário.
*/

const prompt = require('prompt-sync')();

var ltsRefresco = Number(prompt("Digite a QTDE de lts de suco necessária: "))

var ltsAgua = ltsRefresco *  (8 / 10)
var ltsConcentrado = ltsRefresco * (2 / 10)

console.log("\nSerá nescessário para fazer " + ltsRefresco + " de suco de maracujá:")
console.log(ltsAgua.toFixed(2) + " lts de água")
console.log(ltsConcentrado.toFixed(2) + " lts de suco concentrado de maracujá")