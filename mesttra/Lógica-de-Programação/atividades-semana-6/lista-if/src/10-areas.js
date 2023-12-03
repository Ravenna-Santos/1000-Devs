const prompt = require('prompt-sync')();

let areaTrapezio, areaQuadrado, areaRetangulo, areaCirculo, areaTriangulo

console.log("Area do Trapézio: ")
areaTrapezio = calcularAreaTrapezio()

console.log("\nArea do Quadrado: ")
areaQuadrado = calcularAreaQuadrado()

console.log("\nArea do Retângulo: ")
areaRetangulo = calcularAreaRetangulo()

console.log("\nArea do Círculo: ")
areaCirculo = calcularAreaCirculo()

console.log("\nArea do Triângulo: ")
areaTriangulo = calcularAreaTriangulo()

console.log("\nA área do trapézio é: " + areaTrapezio.toFixed(2))
console.log("A área do quadrado é: " + areaQuadrado.toFixed(2))
console.log("A área do retângulo é: " + areaRetangulo.toFixed(2))
console.log("A área do círculo é: " + areaCirculo.toFixed(2))
console.log("A área do triângulo é: " + areaTriangulo.toFixed(2))

if((areaTrapezio >= areaQuadrado) && (areaTrapezio > areaRetangulo) && (areaTrapezio > areaCirculo) && (areaTrapezio > areaTriangulo)){
    console.log(`O objeto com a maior área é o Trapézio com ${areaTrapezio.toFixed(2)} de área`)
}else if((areaQuadrado >= areaRetangulo) && (areaQuadrado > areaCirculo) && (areaQuadrado > areaTriangulo)){
    console.log(`O objeto com a maior área é o Quadrado com ${areaQuadrado.toFixed(2)} de área`)
}else if((areaRetangulo > areaCirculo) && (areaRetangulo > areaTriangulo)){
    console.log(`O objeto com a maior área é o Retângulo com ${areaRetangulo.toFixed(2)} de área`)
}else if((areaCirculo > areaTriangulo)){
    console.log(`O objeto com a maior área é o Círculo com ${areaCirculo.toFixed(2)} de área`)
}else{
    console.log(`O objeto com a maior área é o Triângulo com ${areaTriangulo.toFixed(2)} de área`)
}


function calcularAreaTrapezio(){
    let baseMaior = parseFloat(prompt("Informe o valor da base maior: "))
    let baseMenor = parseFloat(prompt("Informe o valor da base menor: "))
    let altura = parseFloat(prompt("Informe o valor da altura: "))

    let areaTrapezio = ((baseMaior + baseMenor) * altura) / 2

    return areaTrapezio
}

function calcularAreaQuadrado(){
    let lado = parseFloat(prompt("Informe o valor de um dos lados: "))

    let areaQuadrado = lado * lado

    return areaQuadrado
}

function calcularAreaRetangulo(){
    let largura = parseFloat(prompt("Informe o valor da largura: "))
    let altura = parseFloat(prompt("Informe o valor da altura: "))

    let areaRetangulo = largura * altura

    return areaRetangulo
}

function calcularAreaCirculo(){
    const PI = 3.14
    let raio = parseFloat(prompt("Informe o valor do raio: "))

    let areaCirculo = PI * (raio ** 2)

    return areaCirculo
}

function calcularAreaTriangulo(){
    let base = parseFloat(prompt("Informe o valor da base: "))
    let altura = parseFloat(prompt("Informe o valor da altura: "))

    let areaTriangulo = (base * altura) / 2

    return areaTriangulo
}
