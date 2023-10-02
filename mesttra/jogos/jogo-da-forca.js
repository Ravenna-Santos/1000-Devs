const prompt = require("prompt-sync")()
const MASCARA_LETRA = "__"

main()

function main() {
    //TODO: codigo para ler a palavra secreta de um arquivo arquivo

    let palavraSecreta = ObterPalavraSecreta()

    let tentativasRestantes = (palavraSecreta.length - 1)
    let letrasTentadas = ""
    let letraEscolhida
    let palavraMascarada

    do {  
        palavraMascarada = retornarPalavraMascarada(palavraSecreta, letrasTentadas)
        console.clear()
        console.log("Letras tentadas: " + letrasTentadas)
        console.log()
        console.log("Tentativas restantes: " + tentativasRestantes)
        console.log()
        console.log("Palavra secreta: " +  palavraMascarada)
        console.log()
        exibirForca(tentativasRestantes)
        console.log()


        if(!(palavraMascarada.includes("_"))){
            console.log("Você venceu, parabéns!")
            break;
        }else{
            letraEscolhida = obterTentativa(palavraSecreta)
            if(letraEscolhida.length > 1){
                break
            }
            letrasTentadas += letraEscolhida
            //se a letra nao existir na palavra, atualiza a qtde de tentativa restantes
            if (!letraExisteNasLetrasTentadas(letraEscolhida, palavraSecreta)) {
                tentativasRestantes--
            }
        }

    } while (tentativasRestantes > 0 ) 

    if (tentativasRestantes == 0 ) {
        console.clear()
        console.log("Você perdeu, tente novamente.")
        exibirForca(0)
    }
}

function ObterPalavraSecreta(){
    const fileSystem = require('fs')
    const endereco = require('path');

    const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

    const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

    const quebraLinhaWindows = '\r\n'

    let lines = conteudoArquivo.split(quebraLinhaWindows);

    let palavraSecreta = lines.shift();

    return palavraSecreta
}

function retornarPalavraMascarada(palavraSecreta, letrasTentadas){
    let palavraMascarada = ""
    let letraDescoberta = false

    //pegar letra a letra da palavra secreta e descobrir se esta letra esta dentro das letras tentadas
    for (let posicao = 0; posicao < palavraSecreta.length; posicao++) { 
        let letraPalavraSecreta =  palavraSecreta.charAt(posicao) //obtem a letra da palavra secreta
    
        //verifica se a letra esta dentro das letras tentadas
        letraDescoberta = letraExisteNasLetrasTentadas(letraPalavraSecreta, letrasTentadas)
       
        //monta a palavra com as letras ja descobertas e __ nas letras que nao foram descobertas
        palavraMascarada += montarPalavraMascarada(letraDescoberta, letraPalavraSecreta)

    }

    return palavraMascarada
}

function montarPalavraMascarada(letraDescoberta, letraPalavraSecreta) {
    let palavraMascarada = ""
    //se a letra esta presente nas letras tentadas, imprime a letra ao inves de __
    if (letraDescoberta) {
        palavraMascarada = palavraMascarada + letraPalavraSecreta + "       "
    } else {
        palavraMascarada = palavraMascarada + MASCARA_LETRA + "       "
    }  

    return palavraMascarada
}

function letraExisteNasLetrasTentadas(letraPalavraSecreta, letrasTentadas){
    let letraDescoberta = false 
    //verifica se existe a letra da palavra secreta dentro da string letrasTentadas, se existir muda
    //o status da variavel de controle letraDescoberta para true e para o laço
    for (let indiceTentadas = 0; indiceTentadas < letrasTentadas.length; indiceTentadas++) { //pegar letra a letra da string letras tentadas
        if ( letraPalavraSecreta == letrasTentadas.charAt(indiceTentadas) ) {
            letraDescoberta = true
            //paramos o laço porque encontramos a letra
            //não é necessário continuar até o fim
            break
        } 
    }

    return letraDescoberta
}

function obterTentativa(palavraSecreta){
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

    } while ( opcao != 1 && opcao != 2 ) //avaliar a possibilidade de nao repetir esta expressao novamente

    let resposta

    //obter a letra ou palavra do usuario de acordo com o codigo escolhido
    switch (opcao) {
        case 1:
        do{
            resposta = prompt("Digite a letra desejada: ")
            //TODO: temos a possibilidade do infeliz do usuário digitar mais de uma letra
            //precisamos tratar esta possibilidade, faça um teste para ver o que ocorre se ele
            //escolher a opção para digitar uma letra mas na verdade digitar uma palavra
        }while(resposta.length != 1)
            return resposta
            break
        case 2:
            resposta =  prompt("Digite a  palavra secreta: ")
            //TODO: implementar o bloco de codigo necessário para verificar se ele acertou a palavra
            //se acertou ganhou o jogo, se errou perde o jogo

            if(resposta == palavraSecreta){
                console.log("Você venceu, parabéns!")
            }else{
                console.log("Você perdeu, tente novamente.")
            }
            return resposta

            break
    }
}

function exibirForca(estado) {
    switch (estado) {
        case 6:
            console.log(`
  +---+
  |   |
      |
      |
      |
      |
  ========= `)
        break
        case 5:
            console.log(`
  +---+
  |   |
  O   |
      |
      |
      |
  ========= `)
        break
        case 4:
            console.log(`
  +---+
  |   |
  O   |
  |   |
      |
      |
  ========= `)
        break
        case 3:
            console.log(`
  +---+
  |   |
  O   |
 /|   |
      |
      |
  ========= `)
        break
        case 2:
            console.log(`
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
  ========= `)
        break
        case 1:
            console.log(`
  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
  ========= `)
        break
        case 0:
            console.log(`
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
  ========= `)
    }
}