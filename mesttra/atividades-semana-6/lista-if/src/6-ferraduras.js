const prompt = require('prompt-sync')();

let qtdCavalos = parseInt(prompt("Informe a quantidade de cavalos: "))
let valorFerradura = parseFloat(prompt("Informe o valor de cada ferradura R$: "))

let qtdFerraduras = qtdCavalos * 4
let valorCompra = qtdFerraduras * valorFerradura

if(valorCompra >= 15000.01 && valorCompra <= 20000){
    valorCompra -= calcularDesconto(valorCompra, 10)
}else if(valorCompra >= 20000.01 && valorCompra <= 25000){
    valorCompra -= calcularDesconto(valorCompra, 12)
}else if(valorCompra >= 25000.01 && valorCompra <= 30000){
    valorCompra -= calcularDesconto(valorCompra, 15)
}else if(valorCompra >= 30000.01){
    valorCompra -= calcularDesconto(valorCompra, 20)
}

console.log("\nA quantidade de ferraduras necessárias: " + qtdFerraduras)
console.log("Valor total para a compra das ferraduras: " + valorCompra.toFixed(2))

function calcularDesconto(valorCompra, percentual){
    return(valorCompra * (percentual / 100))
}
