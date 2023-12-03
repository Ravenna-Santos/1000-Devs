const prompt = require('prompt-sync')();
console.clear()

let valor1 = Number(prompt("digite o valor 1: "))
let valor2 = Number(prompt("digite o valor 2: "))
let valor3 = Number(prompt("digite o valor 3: "))

if((valor1 + valor2) < valor3){
    console.log(`Soma de valor 1 (${valor1}) e valor 2 (${valor2}), soma: (${valor1 + valor2}) é menor que valor 3 (${valor3})`)
}