const prompt = require('prompt-sync')();

let valorConta = 42.5 //parseFloat(prompt("Digite o valor da conta R$: "))

let centavos = (valorConta / 3) - (Math.floor(valorConta / 3))

if(centavos <= 0.30){
    console.log("\nCarlos pagará: R$: " + (Math.floor(valorConta / 3)).toFixed(2))
    console.log("André pagará: R$: " + (Math.floor(valorConta / 3)).toFixed(2))
    console.log("Felipe pagará: R$: " + (valorConta - (Math.floor(valorConta / 3) * 2)).toFixed(2))
}else{
    console.log("\nCarlos pagará: R$: " + (valorConta / 3).toFixed(2))
    console.log("André pagará: R$: " + (valorConta / 3).toFixed(2))
    console.log("Felipe pagará: R$: " + (valorConta / 3).toFixed(2))
}