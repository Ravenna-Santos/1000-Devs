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

//cada indice do vetor tem a quantidade equivalente de 
//leds para compor o numero
const NUM_LEDS = [6,2,5,5,4,5,6,3,7,6]

let caractere
let qtdeLeds
let numero

let total = lines.shift()

for(let i = 0; i < total; i++){
    numero = lines.shift()
    qtdeLeds = 0

    for(let indice = 0; indice < numero.length; indice++){
        caractere = numero[indice]
        qtdeLeds += informarQtdeLeds(NUM_LEDS, caractere)
    }
    
    console.log(qtdeLeds + " leds")
}

function informarQtdeLeds(NUM_LEDS, caractere){
    return NUM_LEDS[caractere]
}