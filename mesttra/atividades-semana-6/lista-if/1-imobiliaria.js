/*
matrizes. Teste seus algoritmos com os mesmos valores do exemplo e compare os resultados. Questão 01: Uma imobiliária vende apenas terrenos retangulares. Faça um algoritmo para
imprimir a área do terreno e o valor de venda do mesmo. Para isto será necessário o usuário
informar as dimensões em metros (frente e lateral) do terreno além do valor cobrado pelo metro
quadrado.
Caso a diferença de metragem entre a frente e a lateral seja menor que 10% da metragem da frente,
    o cliente terá um acréscimo de 22% no valor final do terreno.
Caso a metragem da frente for menor que 40% da lateral,
    o cliente terá um desconto de 12% no valor final do terreno.
Caso a metragem da frente for maior que 70% da lateral,
    o cliente terá um desconto de 15%.
Caso as medidas não encaixem em nenhuma das regras o valor final do terreno não sofrerá alterações.
*/

const prompt = require('prompt-sync')();

var frente = Number(prompt("Quantos metros o terreno possui de frente: "))
var lateral = Number(prompt("Quantos metros o terreno possui de lateral: "))
var valorMetro = Number(prompt("Informe o valor do metro quadrado: "))

var areaTotal = frente * lateral

var valorTerreno = areaTotal * valorMetro

console.log("\nÁrea total do terreno de " + frente + "mts de frente com " + lateral + "mts lateral é: " + areaTotal + "mts")

if(Math.abs(frente - lateral) < ((frente) * (10/100))){ //diferença de metragem entre a frente e a lateral seja menor que 10% da metragem da frente,
    valorTerreno = valorTerreno - (valorTerreno * (22/100)) //o cliente terá um acréscimo de 22% no valor final do terreno.
    console.log('O terreno recebeu um decrescimo de 12% e custara: R$ ' + valorTerreno)
}else if(frente < (lateral * (40/100))){ //Caso a metragem da frente for menor que 40% da lateral
    console.log('O terreno recebeu um acrescimo de 22% e custara: R$ ' + valorMetro)
    valorTerreno = valorTerreno + (valorTerreno * (12/100))// cliente terá um desconto de 12% no valor final do terreno
}else if(frente > (lateral * (70/100))){ //Caso a metragem da frente for maior que 70% da lateral,
    valorTerreno = valorTerreno - (valorTerreno * (15/100))//o cliente terá um desconto de 15%.
    console.log('O terreno recebeu um decrescimo de 15% e custara: R$ ' + valorTerreno)
}else{
    valorMetro = valorTerreno
    console.log('O terreno não sofrerá nenhuma alteração e custará: R$ ' + valorTerreno)
}

