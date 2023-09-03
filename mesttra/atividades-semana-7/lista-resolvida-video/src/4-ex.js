const prompt = require('prompt-sync')();
console.clear()

let valorA = Number(prompt("digite o valor de A: "))
let valorB = Number(prompt("digite o valor de B: "))

let resultado
let mensagem

if(valorA == valorB){
    resultado = valorA + valorB
    mensagem = "soma"
}else{
    resultado = valorA * valorB
    mensagem = "multiplicação"
}

console.log("Resultado da " + mensagem + ": "+ resultado )