console.clear()
const prompt = require('prompt-sync')();

let numero = Number(prompt("Digite um número de 4 dígitos: "))

if((numero > 9999) || (numero < 0)){
    console.log("Número Inválido")

}else if(numero >= 1000){
    console.log("\nMilhares: " + Math.trunc(numero / 1000))
    
    numero = numero - Math.trunc(numero / 1000) * 1000
    console.log("Centenas: " + Math.trunc(numero / 100))
    
    numero = numero - Math.trunc(numero / 100) * 100
    console.log("Dezenas: " + Math.trunc(numero / 10))
    
    numero = numero - Math.trunc(numero / 10) * 10
    console.log("Unidades: " + numero)

}else if(numero >= 100){
    console.log("Centenas: " + Math.trunc(numero / 100))

    numero = numero - Math.trunc(numero / 100) * 100
    console.log("Dezenas: " + Math.trunc(numero / 10))

    numero = numero - Math.trunc(numero / 10) * 10
    console.log("Unidades: " + numero)
}else if(numero >= 10){
    console.log("Dezenas: " + Math.trunc(numero / 10))

    numero = numero - Math.trunc(numero / 10) * 10
    console.log("Unidades: " + numero)
}else if(numero >= 1){
    console.log("Unidades: " + numero)
}
