const prompt = require("prompt-sync")()

console.clear()
let cont
let linha = ""

lado = Number(prompt("Digite a quantidade de posições: "))

//monta a linha
for(cont = 1; cont <= lado; cont++){
    linha += "*"
}

//repete X vezes a linha
for(cont = 1; cont <= lado; cont++){
    console.log(linha)
}