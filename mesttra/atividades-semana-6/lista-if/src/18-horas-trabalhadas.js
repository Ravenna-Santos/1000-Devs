const prompt = require('prompt-sync')();

let qtdHorasNormais = Number(prompt("Digite a quantidade total de horas normais: "))
let qtdHorasExtras = Number(prompt("Digite a quantidade total de horas extras: "))
let qtdDependentes = Number(prompt("Digite a quantidade total de dependentes: "))

let salarioLiquido = (qtdHorasNormais * 10) * (89/100)
let salarioFinal

if(qtdDependentes > 3){
    salarioFinal = salarioLiquido + (qtdHorasExtras * 15) + (3 * 90)
    console.log("\nHoras normais: R$ " + (qtdHorasNormais * 10).toFixed(2))
    console.log("Adicional de  extras: R$ " + (qtdHorasExtras * 15).toFixed(2))
    console.log("Adicional de Dependentes: R$ " + (3 * 90).toFixed(2))
    console.log("Salário Líquido (Hrs normais - Desconto): R$: " + salarioLiquido.toFixed(2))
    console.log("Salário Final: R$ " + salarioFinal.toFixed(2))
    console.log(`Salario calculado para apenas 3 dependentes. Os demais ${qtdDependentes - 3} dependentes nao receberao o auxilio.`)

}else{
    salarioFinal = salarioLiquido + (qtdHorasExtras * 15) + (qtdDependentes * 90)
    console.log("\nHoras normais: R$ " + (qtdHorasNormais * 10).toFixed(2))
    console.log("Adicional de  extras: R$ " + (qtdHorasExtras * 15).toFixed(2))
    console.log("Adicional de Dependentes: R$ " + (qtdDependentes * 90).toFixed(2))
    console.log("Salário Líquido (Hrs normais - Desconto): R$: " + salarioLiquido.toFixed(2))
    console.log("Salário Final: R$ " + salarioFinal.toFixed(2))

}
