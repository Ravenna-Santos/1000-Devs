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

let ordemMatriz = Number(lines.shift())
while(ordemMatriz){
    let matriz = criarMatriz(ordemMatriz)
    ordemMatriz = Number(lines.shift())
    imprimirMatriz(matriz)
}

function criarMatriz(ordemMatriz){
    let matriz = [[]]
    let inicioQuadradoCentral = Math.floor(ordemMatriz/3)
    for(let coluna = 0; coluna < ordemMatriz; coluna++){
        let linhaMatriz = []
        for(let linha = 0; linha < ordemMatriz; linha++){


            if((linha == (((ordemMatriz - 1) / 2))) && linha == coluna){
                linhaMatriz[linha] = 4
            }else if((linha >= inicioQuadradoCentral && linha <= (ordemMatriz -1 - inicioQuadradoCentral )) &&
                (coluna >= inicioQuadradoCentral && coluna <= (ordemMatriz -1 - inicioQuadradoCentral ))){
                linhaMatriz[linha] = 1
            }else if(linha == coluna){
                linhaMatriz[linha] = 2
            }else if((linha + coluna) == (ordemMatriz -1)){
                linhaMatriz[linha] = 3
            }else{
                linhaMatriz[linha] = 0
            }
    }
    matriz[coluna] = linhaMatriz   
    }
    return matriz
}

function imprimirMatriz(matriz){
    for(let linha = 0; linha < matriz.length; linha ++){
        linhaMatriz = matriz[linha].join('').split(',').join('');
        console.log(linhaMatriz)
    }
    console.log()
}