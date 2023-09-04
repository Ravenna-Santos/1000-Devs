/*
Exercício 02: Escreva um aplicativo que recebe um número inteiro. Mostre uma lista para os números pares e uma lista
para os números ímpares separados por , entre o número 1 até esse número inteiro fornecido pelo usuário.
*/

console.clear()
const prompt = require("prompt-sync")()

numero = parseInt(prompt("Digite um número: "))

let pares = ""
let impares = ""

for(let cont = 1; cont <= numero; cont++){
    if(cont % 2 == 0){
        pares += cont + ", "
    }else{
        impares += cont + ", "
    }
}

console.log("Pares:", pares.slice(0, (pares.length - 2)))
console.log("Impares:", impares.slice(0, (impares.length - 2)))
