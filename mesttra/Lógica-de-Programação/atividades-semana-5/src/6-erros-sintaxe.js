/*
O código abaixo possui uma série de erros de sintaxe, corrija todos os erros para
que o software produza o seguinte resultado:

// lê os números
var num1 = Numbr(prompt("Número 1: ");
var num2 = Number(promt("Número 2: "));

// calcula a soma
var soma = nm1 + num2;

// exibe o resultado
console.og("Soma é: "  soma);
*/

const prompt = require('prompt-sync')();

// lê os números
var num1 = Number(prompt("Número 1: "));
var num2 = Number(prompt("Número 2: "));

// calcula a soma
var soma = num1 + num2;

// exibe o resultado
console.log("Soma é: " + soma);