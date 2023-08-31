/*
Este algortimo calcula a área de 5 figuras geométicas.

A área do trapézio é calcula por uma função que não retorna valor.

A área do quadrado é calcula por uma função que retorna valor.

Baseado no funcionamento destas duas funções calcularAreaTrapezio() e calcularAreaQuadrado() implemente duas versões deste código realizando os ajustes necessários para:

1 - Alterar o código para que a área do retângulo, circulo e triângulo sejam calculadas por uma função QUE NÃO RETORNA valores.

2 -Alterar o código para que a área do retângulo, circulo e triângulo sejam calculadas por uma função QUE RETORNA valores. 

main()

function main() {
    let baseMaior;
    let baseMenor;
    let altura;
    let area;
    let lateral;
    let base;
    let raio;
    
    //Cálculo da Área do Trapézio
    console.log("== Cálculo da Área do Trapézio ==");
    
    baseMaior = getFloatNumber("Digite o valor da base maior: ");
    baseMenor = getFloatNumber("Digite o valor da base menor: ");
    altura = getFloatNumber("Digite o valor da altura: ");
    
    //////////uso de funcao que nao retorna valor
    calcularAreaTrapezio(baseMaior, baseMenor, altura); 
    
    //Cálculo da Área do Quadrado
    console.log("== Cálculo da Área do Quadrado ==");
    
    lateral = getFloatNumber("Digite o valor de um dos lados: ")
    
    /////////uso de funcao que retorna valor
    console.log("Área do Quadrado: " + calcularAreaQuadrado(lateral));
  
    //Cálculo da Área do Retângulo
    console.log("== Cálculo da Área do Retângulo ==");
    base = getFloatNumber("Digite o valor da base: ");
    altura = getFloatNumber("Digite o valor da altura: ");
    
    console.log("Área do Retângulo: " + (base * altura).toFixed(2));
    
    //Cálculo da Área do Círculo
    console.log("== Cálculo da Área do Círculo ==");
    raio = getFloatNumber("Digite o valor do raio: ");
    
    console.log("Área do Círculo: " + (3.14 * raio * raio).toFixed(2));
    
    //Cálculo da Área do Triângulo
    console.log("== Cálculo da Área do Triângulo ==");
    base = getFloatNumber("Digite o valor da base: ");
    base = getFloatNumber("Digite o valor da altura: ");
    
    console.log("Área do Triângulo: " + (base * altura).toFixed(2));
}

function getFloatNumber(message) {
    return Number(prompt(message));
}

function calcularAreaQuadrado(lateral){
    let area = (lateral * lateral);
    return area.toFixed(2);
}

function calcularAreaTrapezio(baseMaior, baseMenor, altura){
    let area = ((baseMaior + baseMenor) * altura) / 2

    console.log("Área do Trapézio: " + area.toFixed(2));
}

*/

const prompt = require('prompt-sync')();

main()

function main() {
    let baseMaior;
    let baseMenor;
    let altura;
    let area;
    let lateral;
    let base;
    let raio;
    
    //Cálculo da Área do Trapézio
    console.log("== Cálculo da Área do Trapézio ==");
    
    baseMaior = getFloatNumber("Digite o valor da base maior: ");
    baseMenor = getFloatNumber("Digite o valor da base menor: ");
    altura = getFloatNumber("Digite o valor da altura: ");
    
    //////////uso de funcao que nao retorna valor
    calcularAreaTrapezio(baseMaior, baseMenor, altura); 
    
    //Cálculo da Área do Quadrado
    console.log("== Cálculo da Área do Quadrado ==");
    
    lateral = getFloatNumber("Digite o valor de um dos lados: ")
    
    /////////uso de funcao que retorna valor
    console.log("Área do Quadrado: " + calcularAreaQuadrado(lateral));
  
    //Cálculo da Área do Retângulo
    console.log("== Cálculo da Área do Retângulo ==");
    base = getFloatNumber("Digite o valor da base: ");
    altura = getFloatNumber("Digite o valor da altura: ");

    
    calcularAreaRetangulo(base, altura);
    
    //Cálculo da Área do Círculo
    console.log("== Cálculo da Área do Círculo ==");
    raio = getFloatNumber("Digite o valor do raio: ");
    
    calcularAreaCirculo(raio);
    
    //Cálculo da Área do Triângulo
    console.log("== Cálculo da Área do Triângulo ==");
    base = getFloatNumber("Digite o valor da base: ");
    altura = getFloatNumber("Digite o valor da altura: ");
    
    calcularAreaTriangulo(base, altura)
}

function getFloatNumber(message) {
    return Number(prompt(message));
}

function calcularAreaQuadrado(lateral){
    let area = (lateral * lateral);
    return area.toFixed(2);
}

function calcularAreaTrapezio(baseMaior, baseMenor, altura){
    let area = ((baseMaior + baseMenor) * altura) / 2

    console.log("Área do Trapézio: " + area.toFixed(2));
}

function calcularAreaRetangulo(base, altura){
    let area = base * altura

    console.log("Área do Retângulo: " + area.toFixed(2));
}

function calcularAreaCirculo(raio){
    let area = (3.14 * raio * raio)

    console.log("Área do Círculo: " + area.toFixed(2));
}

function calcularAreaTriangulo(base, altura){
    let area = (base * altura) / 2

    console.log("Área do Triângulo: " + area.toFixed(2));

}