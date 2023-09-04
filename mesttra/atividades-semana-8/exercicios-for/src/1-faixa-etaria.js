/*
Exercício 01: Faça um programa que receba a idade de 15 pessoas e que calcule e mostre:

a) A quantidade de pessoas em cada faixa etária;
b) A percentagem de pessoas em cada faixa etária em relação ao total de pessoas: 

Até 15 anos
De 16 a 30 anos
De 31 a 45 anos
De 46 a 60 anos
Acima de 61 anos
*/

const prompt = require("prompt-sync")()

console.clear()

let qtdPessoas = 15
let contagem
let idade
let qtdAte15anos = 0
let qtdDe16ate30Anos = 0
let qtdDe31ate45Anos = 0
let qtdDe46ate60Anos = 0
let qtdMais61Anos = 0

for(contagem = 1; contagem <= qtdPessoas; contagem++){
    idade = Number(prompt("Digite a idade da pessoa " + contagem + ": "))

    if(idade <= 15){
        qtdAte15anos += 1;
    }else if(idade <= 30){
        qtdDe16ate30Anos += 1
    }else if(idade <= 45){
        qtdDe31ate45Anos += 1
    }else if(idade <= 60){
        qtdDe46ate60Anos += 1
    }else{
        qtdMais61Anos += 1
    }
}

console.log("A quantidade de pessoas até 15 anos é " + qtdAte15anos + " pessoas")
console.log("A quantidade de pessoas entre 16 e 30 anos é " + qtdDe16ate30Anos + " pessoas")
console.log("A quantidade de pessoas entre 31 e 45 anos é " + qtdDe31ate45Anos + " pessoas")
console.log("A quantidade de pessoas entre 46 e 60 anos é " + qtdDe46ate60Anos + " pessoas")
console.log("A quantidade de pessoas acima de 61 anos ou mais é " + qtdMais61Anos + " pessoas")