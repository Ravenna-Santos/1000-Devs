//Segunda Versão do Jogo da Forca (Em construção)
const prompt = require("prompt-sync")()

//codigo para ler a palavra secreta do arquivo

let palavraSecreta = "mesttra"

let tentativasRestantes = palavraSecreta.length
let letrasTentadas = ""

for (  ; tentativasRestantes > 0; tentativasRestantes--) {
    let conteudoTentado

    console.clear()
    console.log("Tentativas restantes: " + tentativasRestantes)
    console.log()
    console.log("Palavra secreta: " + construirPalavraMascarada(palavraSecreta) )
    console.log()

    letrasTentadas += obterTentativa()
} 

function construirPalavraMascarada(palavraSecreta){
    //Alterar a função para receber um novo parametro que é a variavel
    //letras tentadas. 
    //Alterar o for para que ao inves de sempre imprimir __ decidir se deve 
    //ser impresso __ caso na posicao nao existir uma letra que foi descoberta
    //ou imprimir a letra que já foi descoberta

    let palavraMascarada = "    "

    for (let posicao = 0; posicao < palavraSecreta.length; posicao++) {
        palavraMascarada = palavraMascarada + "__" + "       "
    }

    return palavraMascarada
}

function obterTentativa(){
    let opcao

    console.log(`Escolha a opção abaixo:
    1 - Digitar uma letra
    2 - Chutar a palavra
    `)
    
    do {
        opcao = prompt("Digite a opção: ")

        if (opcao != 1 && opcao != 2) {
            console.log("Opção digitada inválida!")
        }

    } while ( opcao != 1 && opcao != 2)

    let resposta

    switch (opcao) {
        case 1:
            resposta = prompt("Digite a letra desejada: ")
            //temos a possibilidade do infeliz do usuário digitar mais de uma letra
            //precisamos tratar esta possibilidade
            break
        case 2:
            resposta =  prompt("Digite a letra palavra desejada: ")
            break
    }
}

if (tentativasRestantes == 0 ) {
    console.log("Você perdeu, tente novamente.")
}