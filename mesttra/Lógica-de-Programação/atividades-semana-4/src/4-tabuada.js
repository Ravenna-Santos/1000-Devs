/*
Faça um algoritmo que calcule e mostre a tabuada de (+, -, * e /) de um número
digitado pelo usuário.

OBS: Quando se calcula em uma substração um numero menor de um número maior (ex:
3 - 10) o resultado será um número negativo. Pesquise como desprezar o sinal negatio
para sempre termos um número positivo.
*/

const prompt = require('prompt-sync')();

var numero = Number(prompt('Informe o número para o cálculo da tabuada: '))

console.log("\nCálculo do + e - para o número " + numero +":")

for (let cont = 0; cont < 10; cont++) {

    console.log(numero + " + " + cont + " = " + Math.abs(numero + cont) +
    "\t" + numero + " - " + cont + " = " + Math.abs(numero - cont))
    
}

console.log("\nCálculo da * e / para o número " + numero +":")

for (let cont = 0; cont < 10; cont++) {

    if(cont == 0){
        console.log(numero + " * " + cont + " = " + (numero * cont) +
        "\t" + numero + " / " + cont + " = não existe divisão por zero")

    }else{
        console.log(numero + " * " + cont + " = " + (numero * cont) +
        "\t" + numero + " / " + cont + " = " + (numero / cont).toFixed(2))
    }

    
}