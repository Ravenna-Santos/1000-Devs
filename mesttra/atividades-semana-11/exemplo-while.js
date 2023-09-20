// Aqui temos um exemplo de código capaz de identificar o resto de uma divisão inteira sem o uso do operador %.
// Este exemplo demostra um problema que possua a caractéristica de comportamento que se encaixa perfeitamente
// com a característica de uso do laço while.



const prompt = require('prompt-sync')()
let dividendo = Number(prompt("Digite o valor do dividendo: "))
let divisor =  Number(prompt("Digite o valor do divisor: "))

//utilizaremos a variavel resto para armazenar o resto da divisão inteira
let resto = dividendo
//utilizaremos a variavel contador para contar quantas vezes o divisor "cabe" dentro do dividendo
let contador = 0

// enquanto o resto for maior que o divisor ainda 
// é possível realizar a subtração
while (resto >= divisor) {
    resto -= divisor     //comando equivalente resto = (resto - divisor)
    contador += 1        //comando equivalente contador = (contador + 1)
}

if (contador > 0 ) {
        console.log("O resto da divisão inteira é: " + resto)
        console.log("O quociente da divisão inteira é: " + contador)
} else {
        console.log(`Não é possível realizar a divisão inteira de ${dividendo} por ${divisor}`)
}
