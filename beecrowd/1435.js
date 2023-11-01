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

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
let matriz = [[]]
let ordemMatriz = Number(lines.shift())
while(ordemMatriz){
    for(let coluna = 0; coluna < ordemMatriz; coluna++){
        let linhaMatriz = []
        for(let linha = 0; linha < ordemMatriz; linha++){
            linhaMatriz[linha] = 1
    }
    matriz[coluna] = linhaMatriz   
    }

    for(let camada = 1; camada <= Math.ceil(ordemMatriz / 2); camada++){
        for(let coluna = camada; coluna < (matriz.length - camada); coluna++){
            for(let linha = camada; linha < (matriz.length - camada); linha++){
                matriz[coluna][linha] += 1            
            }
        }
    }

    for(let coluna = 0; coluna < ordemMatriz ; coluna ++){
        let linhaMatriz = ""
        for(let linha = 0; linha < ordemMatriz ; linha ++){
            if(linha == (ordemMatriz - 1)){
            linhaMatriz += (matriz[coluna][linha]).toString().padStart(3)
            }else{
            linhaMatriz += (matriz[coluna][linha]).toString().padStart(3) + " "
            }
        }
        console.log(linhaMatriz)

    }
    console.log()

    ordemMatriz = Number(lines.shift());
}