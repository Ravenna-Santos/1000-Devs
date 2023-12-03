const prompt = require('prompt-sync')();

let mesInicial = Number(prompt("Digite o mes inicial: "))
let anoInicial = Number(prompt("Digite o ano inicial: "))
let mesFinal = Number(prompt("Digite o mes final: "))
let anoFinal = Number(prompt("Digite o ano final: "))

let anoInvalido = anoFinal < anoInicial
let mesFinalInvalido = (mesFinal < 1) || (mesFinal > 12)
let mesInicialInvalido = (mesInicial < 1) || (mesInicial > 12)

if (anoInvalido || mesFinalInvalido || mesInicialInvalido) {
    console.log("Impossivel realizar o calculo. Anos e/ou Meses inconsistentes")
} else {
    let mesInicialEmDias = calcularMesesDias(mesInicial - 1)
    let mesFinalEmDias = calcularMesesDias(mesFinal)

    let anosEmDias = 0
    let mesesEmDias = 0
    let idadeEmDias
    if (mesInicial <= mesFinal) {
        anosEmDias = (anoFinal - anoInicial) * 365
        mesesEmDias = mesFinalEmDias - mesInicialEmDias
        idadeEmDias = anosEmDias + mesesEmDias
        console.log(`A idade desta pessoa em dias é: ${idadeEmDias}`)
    } else {
        anosEmDias = ((anoFinal - anoInicial) - 1) * 365
        mesesEmDias = (mesFinalEmDias - mesInicialEmDias) + 365
        idadeEmDias = anosEmDias + mesesEmDias
        console.log(`A idade desta pessoa em dias é: ${idadeEmDias}`)
    }
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