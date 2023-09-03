const prompt = require("prompt-sync")()
console.clear()

let valor = Number(prompt("Digite um valor para calculo da tabuada [0-9]: "))
let operacao = prompt("Digite a operação desejada [* ou / ou + ou -]: ")

for(let contador = 0; contador <= 9; contador++){
    if(operacao == "+"){
        console.log(`${valor} + ${contador} = ${valor + contador}`)
    }else if(operacao == "-"){
        console.log(`${valor} - ${contador} = ${Math.abs(valor - contador)}`)
    }else if(operacao == "*"){
        console.log(`${valor} * ${contador} = ${valor * contador}`)
    }else if(operacao == "/"){
        if(contador == 0){
            console.log(`${valor} / ${contador} = não existe divisão por 0`)
        }else{
            console.log(`${valor} / ${contador} = ${(valor / contador).toFixed(1)}`)

        }
    }
}