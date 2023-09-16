const prompt = require('prompt-sync')();

let qtdPaes = Number(prompt("Digite a quantidade de pães vendidos: "))
let qtdBroas = Number(prompt("Digite a quantidade de broas vendidas: "))
let valorReforma = Number(prompt("Digite o valor da reforma: "))

let faturamentoBroas = (qtdBroas * 1.60)
let faturamentoPaes = (qtdPaes * 0.12)
let faturamentoDiario = faturamentoPaes + faturamentoBroas
let deposito = faturamentoDiario * (10/100)
let dias = Math.ceil(valorReforma/deposito)

console.log("\nFaturamento com a venda de broas: " + faturamentoBroas.toFixed(2))
console.log("Faturamento com a venda de pães: " + faturamentoPaes.toFixed(2))
console.log("Faturamento diário (pães + broas): " + faturamentoDiario.toFixed(2))
console.log("Valor do depósito na poupança: " + (deposito.toFixed(2)))
console.log("Para pagar a reforma serão necessários: " + dias + " dias")

if(dias > 120){
    let depositoNecessario = valorReforma / 120
    console.log(`Para realizar a reforma em 120 dias sera necessario depositar diariamente R$: ${depositoNecessario.toFixed(2)}`)
}