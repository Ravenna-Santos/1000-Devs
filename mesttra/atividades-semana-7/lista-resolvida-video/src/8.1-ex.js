//const prompt = require('prompt-sync')();
console.clear()

let valor1 = 10
let valor2 = 50
let valor3 = 56
let temp

console.log(valor1, valor2, valor3)

if(valor1 < valor2){
    temp = valor1
    valor1 = valor2
    valor2 = temp
}

console.log(valor1, valor2, valor3)

if(valor2 < valor3){
    temp = valor2
    valor2 = valor3
    valor3 = temp
}

console.log(valor1, valor2, valor3)

if(valor1 < valor2){
    temp = valor1
    valor1 = valor2
    valor2 = temp
}

console.log(valor1, valor2, valor3)