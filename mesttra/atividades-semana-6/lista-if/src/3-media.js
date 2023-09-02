const prompt = require('prompt-sync')();

let nota1 = parseFloat(prompt('Informe o valor da primeira nota: '))
let nota2 = parseFloat(prompt('Informe o valor da segunda nota: '))
let nota3 = parseFloat(prompt('Informe o valor da terceira nota: '))

let nota1ComPeso = nota1 
let nota2ComPeso = nota2 * 2
let nota3ComPeso = nota3 * 3

let media = (nota1ComPeso + nota2ComPeso + nota3ComPeso) / (1 + 2 + 3)

console.log("\nA média ponderada das notas " + nota1.toFixed(2) + ", " + nota2.toFixed(2) + ", " + nota3.toFixed(2) + " é: " + media.toFixed(2))

// uma nota maior
if(nota1ComPeso > nota2ComPeso && nota1ComPeso > nota3ComPeso){
    console.log(`A nota 1 (${nota1.toFixed(2)}) é a maior nota após o cálculo do peso 1 (${nota1ComPeso.toFixed(2)})`) // nota 1 maior

}else if(nota2ComPeso > nota1ComPeso && nota2ComPeso > nota3ComPeso){
    console.log(`A nota 2 (${nota2.toFixed(2)}) é a maior nota após o cálculo do peso 2 (${nota2ComPeso.toFixed(2)})`) //nota 2 maior

}else if(nota3ComPeso > nota2ComPeso && nota3ComPeso > nota1ComPeso){
    console.log(`A nota 3 (${nota3.toFixed(2)}) é a maior nota após o cálculo do peso 3 (${nota3ComPeso.toFixed(2)})`) // nota 3 maior
}

// duas notas iguais maiores
else if(nota1ComPeso === nota2ComPeso && nota1ComPeso > nota3ComPeso){
    console.log(`As notas 1 (${nota1.toFixed(2)}) e 2 (${nota2.toFixed(2)}) foram as maiores notas após o cálculo do peso 1 (${nota1ComPeso.toFixed(2)}) e peso 2 (${nota2ComPeso.toFixed(2)})`) // nota 1 e 2 maiores
}else if(nota1ComPeso === nota3ComPeso && nota1ComPeso > nota2ComPeso){
    console.log(`As notas 1 (${nota1.toFixed(2)}) e 3 (${nota3.toFixed(2)}) foram as maiores notas após o cálculo do peso 1 (${nota1ComPeso.toFixed(2)}) e peso 3 (${nota3ComPeso.toFixed(2)})`) // nota 1 e 3 maiores
}else if(nota2ComPeso === nota3ComPeso && nota2ComPeso > nota1ComPeso){
    console.log(`As notas 2 (${nota2.toFixed(2)}) e 3 (${nota3.toFixed(2)}) foram as maiores notas após o cálculo do peso 2 (${nota2ComPeso.toFixed(2)}) e peso 3 (${nota3ComPeso.toFixed(2)})`) // nota 2 e 3

    // todas notas iguais
}else{
    console.log("AS três notas foram iguais")
}