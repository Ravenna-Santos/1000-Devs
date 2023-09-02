const prompt = require('prompt-sync')();

let pesoAtual = Number(prompt("Informe o peso em KG: "))

let peso15 = pesoAtual + pesoAtual * (15/100)
let peso20 = pesoAtual + pesoAtual * (20/100)

console.log("\nCaso a pessoa engorde 15% ficaria com: " + peso15.toFixed(2) + " KG")
console.log("Caso a pessoa engorde 20% ficaria com: " + peso20.toFixed(2) + " KG")

if((peso20 - peso15) >= 4.5){
    console.log("Você deve procurar um nutricionista")
}