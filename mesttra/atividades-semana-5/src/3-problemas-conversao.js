/*
Código a ser corrigido:

var valor

valor = prompt("Digite um valor: ")

console.log("A variável somada com 10 produz o resultado:" + (valor + 10))
Corrija o código para que a soma seja realizada corretamente através da leitura do valor do teclado
*/

const prompt = require('prompt-sync')();

var valor

valor = Number(prompt("Digite um valor: "))

console.log("A variável somada com 10 produz o resultado: " + (valor + 10))