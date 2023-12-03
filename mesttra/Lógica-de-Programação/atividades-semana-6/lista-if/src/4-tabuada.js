// fiz sem estrutura de repetição pq não foi ensinado antes dessa lista
const prompt = require('prompt-sync')();

let operacao = prompt('Informe a operação desejada [+,-,*,/]: ')
let numero = parseInt(prompt('Informe o número para o cálculo da tabuada: '))


switch (operacao) {
    case "+":
        console.log(`Tabuada do ${operacao} para o número ${numero}
        ${numero} ${operacao} 0 = ${numero + 0}
        ${numero} ${operacao} 1 = ${numero + 1}
        ${numero} ${operacao} 2 = ${numero + 2}
        ${numero} ${operacao} 3 = ${numero + 3}
        ${numero} ${operacao} 4 = ${numero + 4}
        ${numero} ${operacao} 5 = ${numero + 5}
        ${numero} ${operacao} 6 = ${numero + 6}
        ${numero} ${operacao} 7 = ${numero + 7}
        ${numero} ${operacao} 8 = ${numero + 8}
        ${numero} ${operacao} 9 = ${numero + 9}`)
        break;

    case "-":
        console.log(`Tabuada do ${operacao} para o número ${numero}
        ${numero} ${operacao} 0 = ${Math.abs(numero - 0)}
        ${numero} ${operacao} 1 = ${Math.abs(numero - 1)}
        ${numero} ${operacao} 2 = ${Math.abs(numero - 2)}
        ${numero} ${operacao} 3 = ${Math.abs(numero - 3)}
        ${numero} ${operacao} 4 = ${Math.abs(numero - 4)}
        ${numero} ${operacao} 5 = ${Math.abs(numero - 5)}
        ${numero} ${operacao} 6 = ${Math.abs(numero - 6)}
        ${numero} ${operacao} 7 = ${Math.abs(numero - 7)}
        ${numero} ${operacao} 8 = ${Math.abs(numero - 8)}
        ${numero} ${operacao} 9 = ${Math.abs(numero - 9)}`)
        break;

    case "*":
            console.log(`Tabuada do X para o número ${numero}
            ${numero} X 0 = ${numero * 0}
            ${numero} X 1 = ${numero * 1}
            ${numero} X 2 = ${numero * 2}
            ${numero} X 3 = ${numero * 3}
            ${numero} X 4 = ${numero * 4}
            ${numero} X 5 = ${numero * 5}
            ${numero} X 6 = ${numero * 6}
            ${numero} X 7 = ${numero * 7}
            ${numero} X 8 = ${numero * 8}
            ${numero} X 9 = ${numero * 9}`)
            break;

    case "/":
        console.log(`Tabuada do ${operacao} para o número ${numero}
        ${numero} ${operacao} 0 = não existe divisão por zero
        ${numero} ${operacao} 1 = ${(numero / 1).toFixed(2)}
        ${numero} ${operacao} 2 = ${(numero / 2).toFixed(2)}
        ${numero} ${operacao} 3 = ${(numero / 3).toFixed(2)}
        ${numero} ${operacao} 4 = ${(numero / 4).toFixed(2)}
        ${numero} ${operacao} 5 = ${(numero / 5).toFixed(2)}
        ${numero} ${operacao} 6 = ${(numero / 6).toFixed(2)}
        ${numero} ${operacao} 7 = ${(numero / 7).toFixed(2)}
        ${numero} ${operacao} 8 = ${(numero / 8).toFixed(2)}
        ${numero} ${operacao} 9 = ${(numero / 9).toFixed(2)}`)
        break;

    default:
        console.log(`Operação digitada (${operacao}) incorreta`)
        break;
}

