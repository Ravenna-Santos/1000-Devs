/*
O algoritmo abaixo deve realizar o cálculo do tempo que será gasto na viagem e qual o valor de custo do combustível baseado nos valores inseridos pelo usuário.

O valor do tempo da viagem deve ser exibido no formado de Xhoras e Yminutos, ou seja, se o tempo de viagem for de 11,11 este valor deve ser convertido para 11 horas e 7 minutos. Desta forma, você deve pensar em como converter a parte fracionária em minutos.

Regras: 

1 - Você deve manter a função converterHoras(totalHoras) . Esta função deve receber um valor de horas em fração e converter para o formato de texto desejado.

2 - As funções  calcTempoViagem(distancia,
velocidadeMedia) e 
calcValorCombustivel(qtdeLitros, valorLitro) devem ser utilizadas sem nenhuma alterção no seu código ou parametros recebidos.


main()

function main() {
    let distancia
    let kmPorLitro
    let valorLitro
    let velocidadeMedia
    
    distancia = getFloatNumber("Digite a distância a ser percorrida (km): ")
    velocidadeMedia = getFloatNumber("Digite a velocidade média do carro: ")
    kmPorLitro = getFloatNumber("Digite quantos km/l o veículo faz: ")
    valorLitro = getFloatNumber("Digite digite o valor do litro do combustível: ")
    
    console.log("A viagem irá demorar: " + ????????? )
    console.log("O gasto com combustível será de R$: " + ???????????? )

}

function calcTempoViagem(distancia, velocidadeMedia){
    return (distancia / velocidadeMedia).toFixed(2);
}

function calcValorCombustivel(qtdeLitros, valorLitro){
    return (distancia / velocidadeMedia).toFixed(2);
}

//a funcao deve receber um valor de horas 
function converterHoras(totalHoras){
    //a funcao deve retonar o seguinte resultado
    //exemplos: recebe parametro 10 devolve 10horas e 0minutos
    //          recebe parametro 10.52 devolve 10horas e 31minutos
    //          recebe parametro de 5.5 devolve 10 horas e 30minutos
}

function getFloatNumber(message) {
    return Number(prompt(message));
}

*/

const prompt = require('prompt-sync')();

main()

function main() {
    let distancia
    let kmPorLitro
    let valorLitro
    let velocidadeMedia
    
    distancia = getFloatNumber("Digite a distância a ser percorrida (km): ")
    velocidadeMedia = getFloatNumber("Digite a velocidade média do carro: ")
    kmPorLitro = getFloatNumber("Digite quantos km/l o veículo faz: ")
    valorLitro = getFloatNumber("Digite digite o valor do litro do combustível: ")

    
    console.log("A viagem irá demorar: " + converterHoras(calcTempoViagem(distancia, velocidadeMedia)))
    console.log("O gasto com combustível será de R$: " + calcValorCombustivel(calcGastoCombustivel(distancia, kmPorLitro), valorLitro))

}

function calcTempoViagem(distancia, velocidadeMedia){
    return (distancia / velocidadeMedia).toFixed(2);
}

function calcGastoCombustivel(distancia, kmPorLitro){
    return (distancia / kmPorLitro)
}

function calcValorCombustivel(qtdeLitros, valorLitro){
    return (qtdeLitros * valorLitro).toFixed(2);
}

//a funcao deve receber um valor de horas 
function converterHoras(totalHoras){
    //a funcao deve retonar o seguinte resultado
    //exemplos: recebe parametro 10 devolve 10horas e 0minutos
    //          recebe parametro 10.52 devolve 10horas e 31minutos
    //          recebe parametro de 5.5 devolve 10 horas e 30minutos
    let horas = Math.trunc(totalHoras);
    let minutos = Math.ceil((totalHoras - horas) * 60)

    return (horas + "hora(s) e " + minutos + " minuto(s)")
}

function getFloatNumber(message) {
    return Number(prompt(message));
}