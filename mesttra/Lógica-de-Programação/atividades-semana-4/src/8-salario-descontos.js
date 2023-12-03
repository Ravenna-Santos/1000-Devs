/*
Faça um algoritmo para ler o salário de um funcionário e aumentá-Io em 15%. Após o
aumento, desconte 11% de INSS e 8% de FGTS. Imprima o salário inicial, o salário com o
aumento, o salário final, o desconto do INSS, o desconto do FGTS e o Total de Descontos
(INSS+FGTS).
*/

const prompt = require('prompt-sync')();

var salarioInicial = Number(prompt("Informe o salário: "))

var salarioReajustado = salarioInicial + salarioInicial * (15 / 100)
var descontoInss = salarioReajustado * (11 / 100)
var descontoFgts = salarioReajustado * (8 / 100)

var totalDescontos = descontoInss + descontoFgts
var salarioFinal = salarioReajustado - totalDescontos

console.log("\nSalário Inicial: " + salarioInicial.toFixed(2)
         + "\nSalário Reajustado: " + salarioReajustado.toFixed(2)
         + "\nDesconto 11% INSS: " + descontoInss.toFixed(2)
         + "\nDesconto 8% FGTS: " + descontoFgts.toFixed(2)
         + "\nTotal Descontos : " + totalDescontos.toFixed(2)
         + "\nSalário Final: " + salarioFinal.toFixed(2)
         )