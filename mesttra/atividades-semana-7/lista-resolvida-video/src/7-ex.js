const prompt = require('prompt-sync')();
console.clear()

let numero = Number(prompt("Digite um valor: "))

if((numero % 2) == 0 && numero != 0){
    console.log(numero + 5)
}else if (numero != 0){
    console.log(numero + 8)
}