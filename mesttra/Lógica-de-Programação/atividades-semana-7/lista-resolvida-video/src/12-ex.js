const prompt = require('prompt-sync')();
console.clear()

let codigo = Number(prompt("Digite o código de identificação: "))
let nota1 = Number(prompt("Digite a nota 1: "))
let nota2 = Number(prompt("Digite a nota 2: "))
let nota3 = Number(prompt("Digite a nota 3: "))
let trabalhos = Number(prompt("Digite a média dos trabalhos do aluno: "))

let media = (nota1 + (nota2 * 2) + (nota3 * 3) + trabalhos)/7

imprimirDadosAluno(codigo, nota1, nota2, nota3, trabalhos)
let status = imprimirStatusAluno(media)

function imprimirDadosAluno(codigo, nota1, nota2, nota3, trabalhos){
    console.log("Código aluno: " + codigo)
    console.log("Nota prova 1: " + nota1)
    console.log("Nota prova 2: " + nota2)
    console.log("Nota prova 3: " + nota3)
    console.log("Média Trabalhos: " + trabalhos)
}

function imprimirStatusAluno(media){
    let status
    if(media >= 90){
        status = "Aprovado"
        console.log("Conceito A")
        console.log(status)
    }else if(media >= 75 && media < 90){
        status = "Aprovado"
        console.log("Conceito B")
        console.log(status)
    }else if(media >= 60 && media < 75){
        status = "Aprovado"
        console.log("Conceito C")
        console.log(status)
    }else if(media >= 40 && media < 60){
        status = "Reprovado"
        console.log("Conceito D")
        console.log(status)
    }else if(media < 40){
        status = "Reprovado"
        console.log("Conceito E")
        console.log(status)
    }
    return status
}