/*
A lanchonete Gostosura vende apenas um tipo de sanduíche, cujo recheio inclui duas
fatias de queijo, uma fatia de presunto e uma rodela de hambúrguer. Sabendo que cada
fatia de queijo ou presunto pesa 50 gramas, e que a rodela de hambúrguer pesa 120
gramas, faça um algoritmo em que o dono forneça a quantidade de sanduíches a fazer, e
a máquina informe as quantidades (em quilos) de queijo, presunto e carne necessários
para compra. Resultado esperado:
*/

const prompt = require('prompt-sync')();

var quantidadeSanduiche = Number(prompt("Digite a quantidade de sanduíches: "))

var mussarela = 2 * (50/1000) * quantidadeSanduiche
var presunto = (50/1000) * quantidadeSanduiche
var hamburguer = (120/1000) * quantidadeSanduiche

console.log("\nPara produzir " + quantidadeSanduiche+ " sanduíches serão necessários: ")
console.log(mussarela.toFixed(2) + " kgs de mussarela")
console.log(presunto.toFixed(2) + " kgs de presunto")
console.log(hamburguer.toFixed(2) + " kgs de hamburger")