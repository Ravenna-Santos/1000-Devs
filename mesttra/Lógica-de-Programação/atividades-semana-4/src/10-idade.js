/*
Faça um algoritmo que receba o ano de nascimento de uma pessoa e o ano atual, calcule e mostre.
a) a idade dessa pessoa em anos;
b) a idade dessa pessoa em meses;
c) a idade dessa pessoa em dias; considere todos os meses com 30 dias
d) a idade dessa pessoa em semanas, considere que todos os messes possuem 4 semanas;
*/

const prompt = require('prompt-sync')();

var anoInicial = Number(prompt("Digite o ano inicial: "))
var anoFinal = Number(prompt("Digite o ano final: "))

var anos = anoFinal - anoInicial
var meses = anos * 12
var dias = meses * 30
var semanas = meses * 4

console.log("\nA idade dessa pessoa em"
            + "\nanos é: " + anos
            + "\nmeses é: " + meses
            + "\ndias é: " + dias
            + "\nsemanas é: " + semanas)