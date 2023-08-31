/*
Faça um algoritmo que leia os dados necessários para calcular e exibir a área:
Pesquisa na Internet como calculcar a área de cada objeto abaixo:

    a) de um trapézio.
    b) de um quadrado.
    c) de um retangulo.
    d) de um círculo.
    e) de um triangulo.
*/
const prompt = require('prompt-sync')();

console.log("Área do trapézio: ")
var baseMaior = Number(prompt("Informe o valor da base maior: "))
var baseMenor = Number(prompt("Informe o valor da base menor: "))
var altura = Number(prompt("Informe o valor da altura: "))
var area = (baseMaior + baseMenor) * altura / 2
console.log("A área do trapézio é: " + area.toFixed(2))

console.log("\nÁrea do quadrado:")
altura = Number(prompt("Informe o valor de um dos lados: "))
area = altura * altura
console.log("A área do quadrado é: " + area.toFixed(2))

console.log("\nÁrea do retângulo:")
var base = Number(prompt("Informe o valor da largura: "))
altura = Number(prompt("Informe o valor da altura: "))
area = base * altura
console.log("A área do retângulo é: " + area.toFixed(2))

console.log("\nÁrea do círculo:")
var raio = Number(prompt("Informe o valor do raio: "))
area = Math.PI * raio ** 2
console.log("A área do círculo é: " + area.toFixed(2))

console.log("\nÁrea do triângulo:")
base = Number(prompt("Informe o valor da base: "))
altura = Number(prompt("Informe o valor da altura: "))
area = (base * altura) / 2
console.log("A área do triângulo é: " + area.toFixed(2))
