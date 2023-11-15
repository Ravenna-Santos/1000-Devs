//importo o modulo fs (filesystem) para trabalhar com arquivos e diretorios
const fileSystem = require('fs')

//importo o modulo path para trabalhar com o endereço de arquivos e diretorios
const endereco = require('path');

//descubro o endereço de onde meu script js esta salvo
//ex: c:\documentos\javascript
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin que foi criado
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

//define qual é a quebra de linha utilizada no seu sistema operacional
//se você estiver utilizando linux coloque \n se for windows coloque \r\n
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

let qtdeEntradas = lines.shift()
//pega cada linha do arquivo fornecido pelo beecrowd
for(let i = 0; i < qtdeEntradas; i++){
    //pega a quantidade de casos de teste
    let palavra = lines.shift()

    //cria um vetor para auxiliar nas substituicoes dos caracteres
    let mensagemCrifrada = []
    
    mensagemCrifrada = primeiraPassada(palavra)
    mensagem = segundaPassada(mensagemCrifrada)
    mensagemCrifrada = terceiraPassada(mensagemCrifrada)
    console.log(converterMensagemCifradaParaString(mensagemCrifrada))
}

function converterMensagemCifradaParaString(mensagemCrifrada){ 
    let txtCifrado = ""
    for(let i = 0; i < mensagemCrifrada.length; i++){
        txtCifrado += mensagemCrifrada[i]
    }

    return txtCifrado
}

function terceiraPassada(mensagemCrifrada){
    //descobre a posicao equivalente a metade do vetor
    let metade = parseInt(mensagemCrifrada.length / 2)
    
    //para cada caractere a partir da metade do vetor
    for(let i = metade; i < mensagemCrifrada.length; i++){
        //obtem o codigo ascii do caractere
        let codAscii = mensagemCrifrada[i].charCodeAt()

        //converte a letra para o caractere anterior
        mensagemCrifrada[i] = String.fromCharCode( codAscii - 1)
    }

    return mensagemCrifrada
}

function segundaPassada(vetor) {
    return vetor.reverse()
}

function ehLetra(codAscii) {
    if ((codAscii >= 65 && codAscii <= 90) || (codAscii >= 97 && codAscii <= 122)){
        return true
    } else {
        return false
    }
}

function primeiraPassada(palavra){
    let codAscii
    let mensagemCrifrada = []

    for(let i = 0; i < palavra.length; i++){
        //obtem o codigo ascii do caractere
        codAscii = palavra.charCodeAt(i) 
    
        //se for uma letra realiza a substituicao
        //se nao for mantem a mesma letra
        if (ehLetra(codAscii)){
            mensagemCrifrada[i] = String.fromCharCode( codAscii + 3) 
        } else {
            mensagemCrifrada[i] = palavra[i]
        }
    }    

    return mensagemCrifrada
}


/*
// reverse criado pelo professor
function inverter(vetor) {
    let aux 
    let metade = (vetor.length / 2)
    let metadeInteiro = parseInt(metade)
    let limite 

    // if (metade == metadeInteiro) 
    //     limite = (metade - 1)
    // else 
    //     limite = (metadeInteiro - 1)

    //e necessario realizar a troca somente ate a metade do vetor
    //caso for ate o fim ocorra a inversao duas vezes
    // aí troca e destroca e o vetor fica o msm
    limite = (metade == metadeInteiro) ? metade : metadeInteiro
    limite--

    for(let i = 0, j = (vetor.length - 1); i < metade; i++, j--){
        aux = vetor[i]
        vetor[i] = vetor[j]
        vetor[j] = aux
    }

    return vetor
}
*/