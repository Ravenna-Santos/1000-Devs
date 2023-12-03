/*
var valor1 = 10
var valor2 = 3
var valor3 = 4
var valor4 = 3.2

var resultado1, resultado2

resultado1 = (valor1 * valor3) / valor2
resultado2 = valor4 - resultado1
resultado2 = Math.abs(resultado2)

console.log(resultado2.toFixed(2))

Faça o aninhamento de comandos para que não seja necessário utilizar
as variáveis resultado1 e resultado2 colocando o código aninhado dentro do
console.log mantendo o mesmo resultado produzido: 10.13
*/

var valor1 = 10
var valor2 = 3
var valor3 = 4
var valor4 = 3.2

console.log((Math.abs(valor4 - ((valor1 * valor3) / valor2))).toFixed(2))
