const prompt = require("prompt-sync")();

let mesInicial = parseInt(prompt("Digite o mês inicial: "))
let mesFinal = parseInt(prompt("Digite o mês final: "))

if(mesFinal < mesInicial){
    console.log("Mês inicial não pode ser maior que o mês final")
}else{
    let somaDias = 0
    for(let mesAtual = mesInicial; mesAtual <= mesFinal; mesAtual++){
        somaDias += calcularQtdDiasDoMes(mesAtual)
    }

    console.log(somaDias)
}

function calcularQtdDiasDoMes(mes){
    let qtdDias
    if(mes <= 7){
        if(mes == 2){
            qtdDias = 28
        }else if(mes % 2 == 0){
            qtdDias = 30
        }else{
            qtdDias = 31
        }
    }else{
        if(mes % 2 != 0){
            qtdDias = 30
        }else{
            qtdDias = 31
        }

    }

    return qtdDias
}