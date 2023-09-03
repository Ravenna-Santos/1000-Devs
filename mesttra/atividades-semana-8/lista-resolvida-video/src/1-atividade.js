const prompt = require("prompt-sync")()
console.clear()

let valor = Number(prompt("Digite um valor para calculo da tabuada [0-9]: "))

let linhaOperacoes = "Operação de Soma".padEnd(30, ' ')
linhaOperacoes += "Operação de Substração".padEnd(30, ' ')
linhaOperacoes += "Operação de Multiplicação".padEnd(30, ' ')
linhaOperacoes += "Operação de Divisão"
console.log(linhaOperacoes)

let linha = ""

for (let contador = 0; contador <= 9; contador ++){
    linha += `${valor} + ${contador} = ${valor + contador}`.padEnd(30, " ")
    linha += `${valor} - ${contador} = ${Math.abs(valor - contador)}`.padEnd(30, " ")
    linha += `${valor} * ${contador} = ${valor * contador}`.padEnd(30, " ")
    if(contador == 0){
        linha += `${valor} / ${contador} = não existe divisão por 0`.padEnd(30, " ")
    }else{
        linha += `${valor} / ${contador} = ${(valor / contador).toFixed(1)}`.padEnd(30, " ")
    }
    console.log(linha)
    linha = ""
}