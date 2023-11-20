// let nome = "mesttra"

// let vetorString = [nome]

// let vetorLetras = [...nome]

// console.log(vetorString)
// console.log(vetorLetras)

// let vetorA = [5,55]
// let vetorB = [2,33]

// let matriz = [vetorA, vetorB]
// let vetorMatrizEspalhamento = [...vetorA, ...vetorB]

// console.log(matriz)
// console.log(vetorMatrizEspalhamento)

console.clear()

let valor1 = 41
let valor2 = 30
let valor3 = 45

let media = calcularMedia(valor1, valor2, valor3)

console.log(media)

function calcularMedia(...valores){
    let soma = 0

    for (let valor of valores) {
        soma += valor
    }

    return soma / valores.length
}