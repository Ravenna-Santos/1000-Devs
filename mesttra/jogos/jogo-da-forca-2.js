const prompt = require("prompt-sync")()

//codigo para ler a palavra secreta do arquivo

let palavraSecreta = "abacate"

let tentativasRestantes = palavraSecreta.length
let letrasTentadas = ""

for (  ; tentativasRestantes > 0; tentativasRestantes--) {
    let conteudoTentado

    console.clear()
    console.log("Tentativas restantes: " + tentativasRestantes)
    console.log()
    console.log("Palavra secreta: " + construirPalavraMascarada(palavraSecreta, letrasTentadas) )
    console.log()

    letrasTentadas += obterTentativa()
} 

function construirPalavraMascarada(palavraSecreta, letrasTentadas){
    //Alterar a função para receber um novo parametro que é a variavel
    //letras tentadas. 
    //Alterar o for para que ao inves de sempre imprimir __ decidir se deve 
    //ser impresso __ caso na posicao nao existir uma letra que foi descoberta
    //ou imprimir a letra que já foi descoberta

    let palavraMascarada = "    "
    
    for (let posicao = 0; posicao < palavraSecreta.length; posicao++) {
        let letraPalavraSecreta = palavraSecreta.charAt(posicao)
        let caractere = ""
        let achouLetra = false
        for(let posicaoLetraTentada = 0; posicaoLetraTentada < letrasTentadas.length; posicaoLetraTentada++){
            if(letrasTentadas.charAt(posicaoLetraTentada) == letraPalavraSecreta){
                achouLetra = true;
                break;
           
            }
        }

        if(achouLetra){
            palavraMascarada += letraPalavraSecreta + "       "

           }else{
            palavraMascarada += "__" + "       "
           }
  
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
        opcao = Number(prompt("Digite a opção: "))

        if (opcao != 1 && opcao != 2) { //avaliar a possibilidade de nao repetir esta expressao duas vezes
            console.log("Opção digitada inválida!")
        }

    } while ( opcao != 1 && opcao != 2 )

    let resposta

    //executar a obtencao da informacao do usuario de acordo com o codigo escolhido
    switch (opcao) {
        case 1:
            resposta = prompt("Digite a letra desejada: ")
            //temos a possibilidade do infeliz do usuário digitar mais de uma letra
            //precisamos tratar esta possibilidade

            return resposta


            break
        case 2:
            resposta =  prompt("Digite a letra palavra desejada: ")
            break
    }
}