const prompt = require('prompt-sync')();

let diaFinal = Number(prompt("Digite o dia final: "))
let mesFinal = Number(prompt("Digite o mes final: "))

let qtdDiasMesFinal = calcularQtdDiasDoMes(mesFinal)

let diaInvalido = (diaFinal > qtdDiasMesFinal) || (diaFinal < 1)
let mesInvalido = (mesFinal < 1 )|| (mesFinal > 12)

if(diaInvalido || mesInvalido){
    console.log("Impossivel realizar o calculo. Anos e Meses inconsistentes")
}else{
    let qtdDias = calcularMesesDias(mesFinal)
    qtdDias -= (qtdDiasMesFinal - diaFinal)
    console.log("Quantidade de dias " + qtdDias)
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

function calcularMesesDias(mes) {
    let mesEmDias = 0
    if (mes == 12) {
        mesEmDias += 31
        mes--
    }

    if (mes == 11) {
        mesEmDias += 30
        mes--
    }

    if (mes == 10) {
        mesEmDias += 31
        mes--
    }

    if (mes == 9) {
        mesEmDias += 30
        mes--
    }

    if (mes == 8) {
        mesEmDias += 31
        mes--
    }

    if (mes == 7) {
        mesEmDias += 31
        mes--
    }

    if (mes == 6) {
        mesEmDias += 30
        mes--
    }

    if (mes == 5) {
        mesEmDias += 31
        mes--
    }

    if (mes == 4) {
        mesEmDias += 30
        mes--
    }

    if (mes == 3) {
        mesEmDias += 31
        mes--
    }

    if (mes == 2) {
        mesEmDias += 28
        mes--
    }

    if (mes == 1) {
        mesEmDias += 31
        mes--
    }

    return mesEmDias
}