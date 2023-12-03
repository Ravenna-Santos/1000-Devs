const prompt = require('prompt-sync')();
console.clear()

let valorCompra = Number(prompt("Digite o valor da compra: "))

console.log(`
Código \t\tCondição de pagamento
1 \t\tÀ vista em dinheiro ou cheque, recebe 10% de desconto
2 \t\tÀ vista no cartão de crédito, recebe 15% de desconto
3 \t\tEm duas vezes, preço normal de etiqueta sem juros
4 \t\tEm três vezes, preço normal de etiqueta mais juros de 10%
`)

let codigo = Number(prompt("Digite o código desejado: "))

if(codigo == 1){
    console.log("Valor final com 10% de desconto: R$ " + (valorCompra * 0.9).toFixed(2))
}else if(codigo == 2){
    console.log("Valor final com 15% de desconto: R$ " + (valorCompra * 0.85).toFixed(2))
}else if(codigo == 3){
    console.log("Valor final sem juros: R$: " + valorCompra.toFixed(2))
    console.log("2x: R$ " + (valorCompra / 2).toFixed(2))
}else if(codigo == 4){
    let valorFinal = valorCompra * 1.1
    console.log("Valor final com 10% de juros: R$: " + valorFinal.toFixed(2))
    console.log("3x: R$ " + (valorFinal / 3).toFixed(2))
}