const prompt = require('prompt-sync')();
console.clear()

let valor1 = Boolean(Number(prompt("Digite um número: ")))
let valor2 = Boolean(Number(prompt("Digite um número: ")))

console.log("São iguais: ", (valor1 == valor2))