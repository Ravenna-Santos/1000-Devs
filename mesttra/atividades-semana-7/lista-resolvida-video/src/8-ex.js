const prompt = require('prompt-sync')();
console.clear()

let maior, meio, menor

let v1 = Number(prompt("Digite um valor 1: "))
let v2 = Number(prompt("Digite um valor 2: "))
let v3 = Number(prompt("Digite um valor 3: "))

if(v1 > v2 && v1 > v3 && v2 > v3){
    maior = v1
    meio = v2
    menor = v3
}else if(v1 > v2 && v1 > v3 && v3 > v2){
    maior = v1
    meio = v3
    menor = v2
}else if(v2 > v1 && v2 > v3 && v3 > v1){
    maior = v2
    meio = v3
    menor = v1
}else if(v2 > v1 && v2 > v3 && v1 > v3){
    maior = v2
    meio = v1
    menor = v3
}else if(v3 > v1 && v3 > v2 && v2 > v1){
    maior = v3
    meio = v2
    menor = v1
}else if(v3 > v1 && v3 > v2 && v1 > v2){
    maior = v3
    meio = v1
    menor = v2
}

if(maior == undefined && meio == undefined && menor == undefined){
    console.log("É necessário que os valores sejam diferentes")
}else{
    console.log(maior, meio, menor)
}