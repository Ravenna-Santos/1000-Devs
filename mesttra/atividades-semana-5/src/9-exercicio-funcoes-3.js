/*
Escreva um programa que realize o cálculo do valor de uma prestação em atraso, utilizando a fórmula:

prestacaoEmAtraso = prestacao + (prestacao*(juro/100) * mesesEmAtraso)

Você deve obter do usuário o valor da prestação, a quantidade de meses em atraso e a taxa de juros mensal.

O cálculo da prestação deve ser realizado por uma função que receba os parametros necessários para o
cálculo e retorne o valor final da prestação em atraso.
*/

const prompt = require('prompt-sync')();

var prestacao = getFloatNumber("Qual o valor da prestação? R$: ")
var mesesEmAtraso = getIntergerNumber("À quantos meses a parcela está em atraso? ")
var juro = getIntergerNumber("Qual a taxa de juros mensal? ")

console.log("O valor da prestação com os juros do atraso é: " + calcularPrestacaoAtrasada(prestacao, mesesEmAtraso, juro))


function getFloatNumber(message) {
    return Number(prompt(message));
}

function getIntergerNumber(message) {
    return parseInt(prompt(message));
}

function calcularPrestacaoAtrasada(prestacao, mesesEmAtraso, juro){
    let prestacaoEmAtraso = prestacao + (prestacao*(juro/100) * mesesEmAtraso)
    return prestacaoEmAtraso.toFixed(2)
}