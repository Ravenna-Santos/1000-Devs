const prompt = require('prompt-sync')();
const PRECOPRODUTO1 = 150
const PRECOPRODUTO2 = 220
const PRECOPRODUTO3 = 97

let faturamentoAnterior = Number(prompt("Digite o valor do faturamento anterior: "))
let aumentandoMeta = faturamentoAnterior *  (20/100)

console.log(`=== Codigo dos Produtos === 
Produto 1: 101
Produto 2: 122
Produto 3: 163`)

let codigoProduto = Number(prompt("Digite o codigo do produto que se deseja bater a meta: "))

if((codigoProduto == 101 )|| (codigoProduto == 122) || (codigoProduto == 163)){
    console.log("\nA meta para o próximo mês é: R$ " + (faturamentoAnterior + aumentandoMeta).toFixed(2))
    console.log("Um aumento de: R$ " + aumentandoMeta.toFixed(2))
    console.log("Quantidade de peças a serem vendidas para atingirmos a meta: ")
}

switch (codigoProduto) {
    case 101:
        let qtdProdutos1 = (aumentandoMeta / PRECOPRODUTO1)
        console.log("\nProduto 1: " + qtdProdutos1.toFixed(2) + " peças")
        break;
    case 122:
        let qtdProdutos2 = (aumentandoMeta / PRECOPRODUTO2)
        console.log("\nProduto 2: " + qtdProdutos2.toFixed(2) + " peças")
        break;
    
    case 163:
        let qtdProdutos3 = (aumentandoMeta / PRECOPRODUTO3)
        console.log("\nProduto 3: " + qtdProdutos3.toFixed(2) + " peças")
        break

    default:
        console.log("Codigo de produto nao encontrado!")
        break;
}