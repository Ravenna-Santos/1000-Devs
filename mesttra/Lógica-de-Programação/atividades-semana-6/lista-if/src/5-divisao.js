const prompt = require('prompt-sync')();

let valor1 = parseInt(prompt("Informe o valor 1: "))
let valor2 = parseInt(prompt("Informe o valor 2: "))

if(valor1 < valor2){
    let aux = valor1
    valor1 = valor2
    valor2 = aux
}

if(valor2 == 0){
    console.log("A operação não pode ser realizada.")
}else{
    console.log(`A divisão de ${valor1} por ${valor2} = ${(valor1 / valor2).toFixed(2)}`)
}