/*
A empresa Hipotheticus paga R$10,00 por hora normal trabalhada, R$15,00 por hora
extra e R$ 90 reais por cada dependente menor que 6 anos. Faça um algoritmo que
solicite a quantidade de horas normais e extras trabalhadas no mês além da quantidade
de dependentes menores que 6 anos. Considere que o salário líquido é igual ao salário de
horas normais descontando-se 11% de impostos. O salário final é o salário liquido mais o
valor recebido por cada dependente mais as horas extras.
*/

const prompt = require('prompt-sync')();

var qtdHorasNormais = Number(prompt("Digite a quantidade total de horas normais: "))
var qtdHorasExtras = Number(prompt("Digite a quantidade total de horas extras: "))
var qtdDependentes = Number(prompt("Digite a quantidade total de dependentes menores que 6 anos: "))
var salarioLiquido = (qtdHorasNormais * 10) * (89/100)
var salarioFinal = salarioLiquido + (qtdHorasExtras * 15) + (qtdDependentes * 90)

console.log("\nHoras normais: R$ " + (qtdHorasNormais * 10).toFixed(2))
console.log("Adicional de  extras: R$ " + (qtdHorasExtras * 15).toFixed(2))
console.log("Adicional de Dependentes: R$ " + (qtdDependentes * 90).toFixed(2))
console.log("Salário Líquido (Hrs normais - Desconto): R$: " + salarioLiquido.toFixed(2))
console.log("Salário Final: R$ " + salarioFinal.toFixed(2))
