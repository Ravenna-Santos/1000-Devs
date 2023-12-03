/*
Exercício 03: Faça um programa que recebe a quantidade de caracteres da base de um triangulo e imprima este triângulo utilizando asteriscos. Quando for fornecido um número que não permita a construção do triângulo perfeito, uma mensagem deverá ser exibida informando.
Exemplos: 
Entrada: 9

    *
   ***
  *****
 *******
*********

Entrada: 5

  *
 ***
*****

*/

const prompt = require("prompt-sync")()

console.clear()
let cont
let linha = ""

lado = Number(prompt("Digite a quantidade de posições: "))

for(cont = 1; cont <= lado; cont++){
    linha += "*"
    console.log(linha)
}