const prompt = require('prompt-sync')();
console.clear()

let altura = Number(prompt("Digite sua altura em metros: "))
let peso = Number(prompt("Digite seu peso em KG: "))

let imc = peso / (altura ** 2)

if(imc <= 18.5){
    console.log("Abaixo do peso")
}else if(imc > 18.5 && imc <= 25){
    console.log("Peso normal")
}else if(imc > 25 && imc <= 30){
    console.log("Acima do normal")
}else{
    console.log("Obeso")
}