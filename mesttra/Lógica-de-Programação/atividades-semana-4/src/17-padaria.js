/*
Uma padaria vende uma certa quantidade de pães franceses e uma quantidade de
broas a cada dia. Cada pãozinho custa R$ 0,12 e a broa custa R$ 1,60. Ao final do dia, o
dono quer saber quanto arrecadou com a venda dos pães e broas (juntos), e quanto deve
guardar numa conta de poupança (10% do total arrecadado) para realizar uma reforma.
Você foi contratado para fazer os cálculos para o dono. Com base nestes fatos, faça um
algoritmo para ler as quantidades de pães e de broas, o valor da reforma e depois calcule
o valor arrecado, o valor a ser depositado na poupança e quantos dias serão necessários,
caso mantenha o mesmo faturamento, para custear a reforma.

Requisito adicional:
A quantidade de dias deve ser retornado como um valor inteiro.
Exemplo:
3.78 dias deverá retornar 4 dias
9.2 dias deverá retornar 10 dias
10.89 dias deverá retornar 11 dias
*/

const prompt = require('prompt-sync')();

var qtdPaes = Number(prompt("Digite a quantidade de pães vendidos: "))
var qtdBroas = Number(prompt("Digite a quantidade de broas vendidas: "))
var valorReforma = Number(prompt("Digite o valor da reforma: "))

var faturamentoDiario = (qtdPaes * 0.12) + (qtdBroas * 1.60)
var deposito = faturamentoDiario * (10/100)

console.log("\nFaturamento com a venda de broas: " + (qtdBroas * 1.60).toFixed(2))
console.log("Faturamento com a venda de pães: " + (qtdPaes * 0.12).toFixed(2))
console.log("Faturamento diário (pães + broas): " + faturamentoDiario.toFixed(2))
console.log("Valor do depósito na poupança: " + (deposito.toFixed(2)))
console.log("Para pagar a reforma serão necessários: " + Math.ceil(valorReforma/deposito) + " dias")