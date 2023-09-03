const prompt = require("prompt-sync")()

console.clear()

let qtdPessoas
let contagem
let idade
let qtdeMaiores = 0
let qtdeEntre5e10 = 0

qtdPessoas = Number(prompt("Digite a quantidade de pessoas a ser lidas: "))

for(contagem = 1; contagem <= qtdPessoas; contagem++){
    idade = Number(prompt("Digite a idade da pessoa " + contagem + ": "))

    if(idade >= 18){
        qtdeMaiores += 1;
    }else if(idade >= 5 && idade <= 10){
        qtdeEntre5e10 += 1
    }
}

console.log("A quantidade de pessoas maiores que 18 anos é " + qtdeMaiores + " pessoas")
console.log("A quantidade de pessoas entre 5 e 10 anos é " + qtdeEntre5e10 + " pessoas")