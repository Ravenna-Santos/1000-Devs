const prompt = require('prompt-sync')();

let qtdLatinha = Number(prompt("Digite a quantidade de latas de 350ml: "))
let qtdGarrafa600 = Number(prompt("Digite a quantidade de garrafas de 600ml: "))
let qtdGarrafa2l = Number(prompt("Digite a quantidade de garrafas de 2l: "))

let qtdLitros = (qtdLatinha * 0.350) + (qtdGarrafa600 * 0.600) + (qtdGarrafa2l * 2)

let lucroGarrafa600 = qtdGarrafa600 * (9/100)
let lucroLatinha = qtdLatinha * (15/100)

console.log("\nA quantidade total de litros é: " + parseInt(qtdLitros))

if(lucroGarrafa600 >= lucroLatinha){
    let qtdGarrafa600Substituicao = ((qtdLatinha * 350) / 600)
    console.log(`Considere substituir a compra de:
${qtdLatinha} latas de 350 ml por ${qtdGarrafa600Substituicao.toFixed(2)} garrafas de 600ml e oferecer uma promocao`)
}