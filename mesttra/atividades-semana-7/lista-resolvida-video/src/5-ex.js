const prompt = require('prompt-sync')();
console.clear()

let numero = Number(prompt("digite um número: "))
let resultado, mensagem

if(numero < 0){
    resultado = numero * 2
    mensagem = "dobro"
}else if(numero > 0){
    resultado = numero * 3
    mensagem = "triplo"
}

console.log("Resultado do cálculo do " + mensagem + " : " + resultado)