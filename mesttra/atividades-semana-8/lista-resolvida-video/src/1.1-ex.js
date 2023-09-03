const prompt = require("prompt-sync")()
console.clear()

let valor = Number(prompt("Digite um valor para calculo da tabuada [0-9]: "))

console.log("\nOperação de Soma")
for(let contador = 0; contador <= 9; contador++){
    console.log(`${valor} + ${contador} = ${valor + contador}`)
}

console.log("\nOperação de Subtração")
for(let contador = 0; contador <= 9; contador++){
    console.log(`${valor} - ${contador} = ${Math.abs(valor - contador)}`)
}

console.log("\nOperação de Multiplicação")
for(let contador = 0; contador <= 9; contador++){
    console.log(`${valor} * ${contador} = ${valor * contador}`)
}

console.log("\nOperação de Divisão")
for(let contador = 0; contador <= 9; contador++){
    if(contador == 0){
        console.log(`${valor} / ${contador} = não existe divisão por 0`)
    }else{
        console.log(`${valor} / ${contador} = ${(valor / contador).toFixed(1)}`)
    }
}
