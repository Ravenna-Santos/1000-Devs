const prompt = require('prompt-sync')();

let salarioInicial = parseFloat(prompt("Informe o salário: "))

let salarioReajustado = salarioInicial + salarioInicial * (5 / 100) //reajuste (+5%)
//DESCONTOS
let descontoInss = salarioReajustado * (11 / 100)
let descontoFgts = salarioReajustado * (8 / 100)
//imposto de renda
let faixaIR = calcularFaixaIR(salarioReajustado)
let impostoRenda = faixaIR * salarioReajustado

// Calculo salário final
let totalDescontos = descontoInss + descontoFgts + impostoRenda
let salarioFinal = salarioReajustado - totalDescontos

let faixaIRAnterior = calcularFaixaIR(salarioInicial) // faixa de imposto de renda antes do reajuste (+5%)


console.log("\nSalário Inicial: " + salarioInicial.toFixed(2)
         + "\nSalário Reajustado: " + salarioReajustado.toFixed(2)
         + "\nDesconto 11% INSS: " + descontoInss.toFixed(2)
         + "\nDesconto 8% FGTS: " + descontoFgts.toFixed(2)
         + "\nDesconto IR: " + impostoRenda.toFixed(2)
         + "\nTotal Descontos INSS+FGTS+IR: " + totalDescontos.toFixed(2)
         + "\nSalário Final: " + salarioFinal.toFixed(2)
         )

if(faixaIRAnterior < faixaIR){
    console.log("O novo salário final é menor do que o salário recebido antes do aumento!")
}

function calcularFaixaIR(salario){
    let faixa 

    if(salario <= 1903.98){
        faixa = 0
    }else if (salario >= 1903.99 && salario <= 2826.65){
         faixa = (7.5 / 100)
    } else if(salario >= 2826.66 && salario <= 3751.05){
         faixa = (15 / 100)  
    }else if(salario >= 3751.06 && salario <= 4664.68){
         faixa = (22.5 / 100)  
    }else if(salario > 4664.68){
         faixa = (27.5 / 100)
    }

    return faixa
}