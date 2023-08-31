/*
Entrar com o dia e o mês de uma data e informar quantos dias sepassaram desde o início do ano. Esqueça a questão
dos anos bissextos e considere sempre que um mês possui 30 dias.
*/

const prompt = require('prompt-sync')();

var dia = Number(prompt("Digite o dia: "))
var mes = Number(prompt("Digite o mês: "))

var diasPercorridos = mes * 30 + dia

console.log("\nA quantidade de dias que se passaram foi: " + diasPercorridos + " dias")