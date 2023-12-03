const prompt = require("prompt-sync")()
console.clear()

let totalVendas = 0

let lojaB = 54000
let qtde

for(qtde = 1; qtde <= 5; qtde++){
    totalVendas += Number(prompt("Digite o valor da venda " + qtde + " R$: "))
}

if(totalVendas > lojaB){
    let diferenca = (totalVendas - lojaB)
    let percentual = (diferenca / lojaB) * 100

    console.log("O faturamento foi maior em " + percentual.toFixed(1) + "%: totalizando um aumento de: " + diferenca.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
}