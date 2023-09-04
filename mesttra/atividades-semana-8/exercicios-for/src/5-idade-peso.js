/*
Exercício 05: Faça um programa que receba a idade, altura e o peso de 25 pessoas, Calcule e mostre:

a) A quantidade de pessoas com idade superior a 50 anos;
b) A média das Alturas das pessoas com idade entre 10 e 20 anos
c) A porcentagem das pessoas com peso inferior a 40 quilos entre todas as pessoas analisadas.  
*/
console.clear()
const prompt = require("prompt-sync")()
const NPESSOAS = 25

let idade
let altura
let peso

//idades
let qtdIdadeMaior50 = 0

//media de alturas
let qtdPessoasEntre10e20Anos = 0
let somaAlturasPessoasEntre10e20Anos = 0
let mediaAlturasPessoasEntre10e20Anos

//peso
let qtdPessoasMenor40kg = 0
let porcentagemPessoasMenor40kg 

for(let i = 1; i <= NPESSOAS; i++){

    idade = parseInt(prompt("Digite a idade da pessoa " + i + ": "))
    altura = parseFloat(prompt("Digite a altura da pessoa " + i + ": "))
    peso = parseFloat(prompt("Digite o peso: da pessoa " + i + ": "))
    console.log("-------------------------------------------")

    if(idade > 50){
        qtdIdadeMaior50 += 1
    }else if(idade >= 10 && idade <= 20){
        qtdPessoasEntre10e20Anos += 1
        somaAlturasPessoasEntre10e20Anos += altura
    }

    if(peso < 40){
        qtdPessoasMenor40kg += 1
    }
}

mediaAlturasPessoasEntre10e20Anos = somaAlturasPessoasEntre10e20Anos / qtdPessoasEntre10e20Anos

porcentagemPessoasMenor40kg = (qtdPessoasMenor40kg / NPESSOAS) * 100


console.log(qtdIdadeMaior50 + " pessoas com idade superior a 50 anos")
console.log("A média das alturas das pessoas com idade entre 10 e 20 anos é: " + mediaAlturasPessoasEntre10e20Anos.toFixed(2))
console.log("A porcentagem das pessoas com peso inferior a 40 quilos entre todas as pessoas analisadas é: " + porcentagemPessoasMenor40kg.toFixed(2) + " %")