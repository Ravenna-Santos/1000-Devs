/*
Faça um algoritmo que receba dois números inteiros, calcule e mostre a divisão do
primeiro número pelo segundo. Sabe-se que o segundo número não pode ser zero,
portanto não é necessário se preocupar com validações.
 */

const prompt = require('prompt-sync')();

var numero1 = Number(prompt("Informe o valor 1: "))
var numero2 = Number(prompt("Informe o valor 2: "))

var divisao = numero1 / numero2

console.log("\nA divisão de " + numero1 + " por " + numero2 + " é " + divisao.toFixed(2))