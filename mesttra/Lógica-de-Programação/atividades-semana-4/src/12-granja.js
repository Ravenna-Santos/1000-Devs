/*
A granja Frangotech possui um controle automatizado de cada frango da sua
produção. No pé direito do frango há um anel com um chip de identificação; no pé
esquerdo são dois anéis para indicar o tipo de alimento que ele deve consumir. Sabendo
que o anel com chip custa R$4,00 e o anel de alimento custa R$3,50, faça um algoritmo
para calcular o gasto total da granja para marcar todos os seus frangos que deverá ser
informado pelo usuário.
*/

const prompt = require('prompt-sync')();

var QtdeFrangos = Number(prompt("Digite a QTDE de frangos: "))

var gastoTotal = QtdeFrangos * (4 + 2 * 3.5)

console.log("\nO valor para identificar os frangos é: R$: " + gastoTotal.toFixed(2))