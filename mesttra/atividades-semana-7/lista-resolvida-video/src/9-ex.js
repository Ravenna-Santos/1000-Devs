const prompt = require('prompt-sync')();
console.clear()

let altura = Number(prompt("Digite sua altura em metros: "))
let sexo = prompt("Digite seu sexo: ")
let pesoIdeal

if(sexo == "masculino"){
    pesoIdeal = (72.7 * altura) - 58
}else if(sexo == "feminino"){
    pesoIdeal = (62.1 * altura) - 44.7
}

if(pesoIdeal != undefined){
    console.log("Peso ideal: " + pesoIdeal.toFixed(3))
}