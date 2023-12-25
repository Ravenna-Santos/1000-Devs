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

const TAMANHOMATRIZ = 12

let operacao = lines.shift()
let matriz = []
let cont = 0;

for(let linha = 0; linha < TAMANHOMATRIZ; linha++){
    let colunas = []
    for(let coluna = 0; coluna < TAMANHOMATRIZ; coluna++){
        colunas[coluna] = Number(lines[cont])
        cont++
    }

    matriz[linha] = colunas
}

switch (operacao) {
    case 'S':
        console.log( calcularSoma(matriz, TAMANHOMATRIZ).toFixed(1) )
        break;
    case 'M':
        console.log( calcularMedia(matriz, TAMANHOMATRIZ).toFixed(1) )
        break;
    
}

function calcularSoma(matriz){
    soma = 0
    for(let linha = 0; linha < TAMANHOMATRIZ; linha++){
        for(let coluna = 0; coluna < TAMANHOMATRIZ; coluna++){
            if(coluna < linha){
                soma += matriz[linha][coluna]
            }
        }
    }
    return soma;
}

function calcularMedia(matriz, TAMANHOMATRIZ){
    let media = calcularSoma(matriz) / calcularQtdeNumeros(TAMANHOMATRIZ);
    return media;
}

function calcularQtdeNumeros(ordem){ // acima ou abaixo da diagonal principal
    let qtde = (ordem * (ordem - 1) / 2);
    return qtde;
} 