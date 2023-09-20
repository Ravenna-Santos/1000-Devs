const prompt = require("prompt-sync")();

let alturaChico = parseInt(prompt("Digite a altura do Chico em cm: "))
let taxaCrescimentoChico = parseInt(prompt("Digite a taxa de crescimento anual do Chico em cm: "))
let alturaZe = parseInt(prompt("Digite a altura do Zé em cm: "))
let taxaCrescimentoZe = parseInt(prompt("Digite a taxa de crescimento anual do Chico em cm: "))

if ((alturaZe <= alturaChico) && (taxaCrescimentoZe > taxaCrescimentoChico) ) {
    console.log("Zé vai demorar " + calcularTempoUltrapassarAlturas(alturaZe, taxaCrescimentoZe, alturaChico,taxaCrescimentoChico) + " anos para passar a altura de Chico")
} else if ( (alturaChico < alturaZe) && (taxaCrescimentoChico > taxaCrescimentoZe)){
    console.log("Chico vai demorar " +  calcularTempoUltrapassarAlturas(alturaChico,taxaCrescimentoChico,alturaZe, taxaCrescimentoZe) + " anos para passar a altura de Zé")
} else if(alturaZe >= alturaChico && taxaCrescimentoZe <= taxaCrescimentoChico) {
    console.log("Chico é impossível passar o Zé pois as taxas de crescimento não permitem que isso ocorra.")
} else if (alturaChico >= alturaZe && taxaCrescimentoChico <= taxaCrescimentoZe) {
    console.log("Zé é impossível passar o Chico pois as taxas de crescimento não permitem que isso ocorra.")
}

function calcularTempoUltrapassarAlturas(altura1, taxaCrescimento1, altura2, taxaCrescimento2){
    for(var anos = 0; altura1 <= altura2; anos ++){
        altura1 += taxaCrescimento1
        altura2 += taxaCrescimento2
    }

    return anos
}