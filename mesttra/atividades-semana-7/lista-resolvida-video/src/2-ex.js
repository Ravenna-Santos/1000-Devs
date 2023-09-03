const prompt = require('prompt-sync')();
console.clear()

let nome = prompt("digite o nome: ")
let sexo = prompt("digite f ou m: ")
let estadoCivil = prompt("digite o estado civil: ")

let tempoCasada
if((sexo == 'f' || sexo == "F") && (estadoCivil == "casada" || estadoCivil == "CASADA")){
    tempoCasada = Number(prompt("digite o tempo casada [anos]: "))
}

console.log(tempoCasada)