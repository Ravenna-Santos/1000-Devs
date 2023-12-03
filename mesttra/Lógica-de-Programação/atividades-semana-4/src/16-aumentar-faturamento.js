/*
Uma loja de decoração precisa aumentar o seu faturamento para o próximo mês em
20%. Esta loja deseja atingir este objetivo aumentando a venda de três produtos. O
produto 1 custa R$ 150 o produto 2 R$ 220,00 e o produto 3 R$ 97.00. Faça um algoritmo
que receba o valor de faturamento do último mês e apresente:
a) O faturamento do próximo mês para bater a meta de 20%. 
b) A quantidade de peças apenas do produto 1 necessárias para obter a meta desejada.
c) A quantidade de peças apenas do produto 2 necessárias para obter a meta desejada.
d) A quantidade de peças apenas do produto 3 necessárias para obter a meta desejada.
*/

const prompt = require('prompt-sync')();

var faturamentoAnterior = Number(prompt("Digite o valor do faturamento anterior: "))
var aumentandoMeta = faturamentoAnterior *  (20/100)

console.log("\nA meta para o próximo mês é: R$ " + (faturamentoAnterior + aumentandoMeta).toFixed(2))
console.log("Um aumento de: R$ " + aumentandoMeta.toFixed(2))
console.log("Quantidade de peças a serem vendidas para atingirmos a meta: ")

console.log("\nProduto 1: " + (aumentandoMeta / 150).toFixed(2) + " peças")
console.log("Produto 2: " + (aumentandoMeta / 220).toFixed(2) + " peças")
console.log("Produto 3: " + (aumentandoMeta / 97).toFixed(2) + " peças")