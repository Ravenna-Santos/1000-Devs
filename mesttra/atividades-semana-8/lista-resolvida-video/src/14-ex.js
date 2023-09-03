const prompt = require("prompt-sync")()

console.clear()
let cont
let linha = ""

lado = Number(prompt("Digite a quantidade de posições: "))

for(cont = 1; cont <= lado; cont++){
    linha += "*"
    console.log(linha)
}