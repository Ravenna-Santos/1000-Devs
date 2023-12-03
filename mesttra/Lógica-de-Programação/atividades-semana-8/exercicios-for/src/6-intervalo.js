/*
Exercício 06: Faça um programa que receba dez números e usando laços de repetição calcule e mostre a
quantidade de números entre 30 e 90.  
*/

console.clear()
const prompt = require("prompt-sync")()

const QTDNUMEROS = 10

let numero
let qtdNumerosIntervalo = 0

for(let i = 1; i <= 10; i++){
    numero = Number(prompt("Digite o número " + i + ": "))
    if(numero >= 30 && numero <= 90){
        qtdNumerosIntervalo += 1
    }
}

console.log(qtdNumerosIntervalo, "dos números digitados estão no intervalo entre 30 e 90")