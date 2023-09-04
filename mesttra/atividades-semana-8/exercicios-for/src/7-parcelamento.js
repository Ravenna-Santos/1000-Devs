/*
Exercício 07: Faça um programa que receba o valor de um carro e mostre uma tabela com os seguintes dados:
preço final, quantidade de parcelas e valor da parcela. Considere o seguinte:

a) O preço final para compra à vista tem um desconto de 20%;
b) A quantidade de parcelas podem ser: 6, 12, 18, 24, 30, 36, 42, 48, 54 e 60.
c) Os percentuais de acréscimo seguem a tabela a seguir.

Quantidade de parcelas => Percentual de acréscimo sobre o preço final
6x => 3%
12x => 6%
18x => 9%
24x => 12%
30x => 15%
36x => 18%
42x => 21%
48x => 24%
54x => 27%
60x => 30%  
*/

console.clear()
const prompt = require("prompt-sync")()

let valorCarro = parseFloat(prompt("Digite o valor do carro: "))
let descontoAvista = valorCarro * (20 / 100)
let qtdParcelas
let acrescimo
let valorParcela
let valorFinal

console.log("Formas de Pagamento")
console.log("À vista com 20% de desconto: R$ " + (valorCarro - descontoAvista).toFixed(2))
console.log("Parcelado conforme a tabela:")

for(let i = 1; i <= 10; i++){
    qtdParcelas = i * 6
    acrescimo = valorCarro * ((3 * i) / 100)
    valorFinal = valorCarro + acrescimo
    valorParcela = valorFinal / qtdParcelas

    console.log(`${qtdParcelas.toFixed()} X ${valorParcela.toFixed(2)} = ${valorFinal.toFixed(2)}`)
}
