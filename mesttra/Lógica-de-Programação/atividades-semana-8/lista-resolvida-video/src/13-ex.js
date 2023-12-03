const prompt = require("prompt-sync")()

console.clear()
let cont
let linha = ""
let linhaMeio = ""

lado = Number(prompt("Digite a quantidade de posições: "))

//monta as linhas externas
for(cont = 1; cont <= lado; cont++){
    linha += "*"
}

//linhas internas
for(cont = 1; cont <= lado; cont++){
    if(cont == 1 || cont == lado){
        linhaMeio += "*"
    }else{
        linhaMeio += " "
    }

}

//repete X vezes a linha
for(cont = 1; cont <= lado; cont++){
    if(cont == 1 || cont == lado){
        console.log(linha)
    }else{
        console.log(linhaMeio)
    }
}