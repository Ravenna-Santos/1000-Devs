/*
A fábrica de refrigerantes Meia-Cola vende seu produto em três formatos: lata de 350
ml, garrafa de 600 ml e garrafa de 2 litros. Se um comerciante compra uma determinada
quantidade de cada formato, faça um algoritmo para calcular quantos litros de refrigerante
ele comprou.
*/

const prompt = require('prompt-sync')();

var qtdLatinha = Number(prompt("Digite a quantidade de latas de 350ml: "))
var qtdGarrafa600 = Number(prompt("Digite a quantidade de garrafas de 600ml: "))
var qtdGarrafa2l = Number(prompt("Digite a quantidade de garrafas de 2l: "))

var qtdLitros = qtdLatinha * 0.350 + qtdGarrafa600 * 0.600 + qtdGarrafa2l * 2

console.log("\nA quantidade total de litros é: " + qtdLitros)