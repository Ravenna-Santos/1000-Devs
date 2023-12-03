const prompt = require('prompt-sync')();
console.clear()

let numero = Number(prompt("Digite um número: "))

let naoEhZero = (numero != 0)

if(((numero % 2) == 0) && naoEhZero){
    console.log(`Número ${numero} é par`)
}else if(naoEhZero){
    console.log(`Número ${numero} é impar`)
}