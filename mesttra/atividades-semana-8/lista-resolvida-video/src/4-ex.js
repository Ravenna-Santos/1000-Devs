const prompt = require("prompt-sync")()
console.clear()

let valor = Number(prompt("Digite um valor inteiro: "))
let resultado = 1

for(let cont = 2; cont <= valor; cont++){
    resultado += 1 / cont
}

console.log(resultado.toFixed(2))