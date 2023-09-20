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

///////////////////////COLAR NO BEECROWD O CODIGO ABAIXO///////////////////
//let [a, b] = valores.shift().split(" ");

let qtdeLinhas = parseInt(lines.shift());
let soma

for(let i = 1; i <= qtdeLinhas; i++){
    let linha = lines.shift()

    soma = processarLinha(linha)
    console.log(soma)
    

}

function processarLinha(linha){
    let textoNumero = "";
    let caractere;
    let soma = 0
 
    for(let i = 0; i < linha.length; i++) {
        caractere = linha.charAt(i);         
    
        if (ehNumero(caractere)){
            textoNumero += caractere; //concatena o caractere numerico obtido 
        } else {  
            soma += Number(textoNumero)
            textoNumero = "";
        }
    }

    // resolve a situacao do texto terminar com o terceiro numero.
    // sem este bloco o caso "a23ab54k33" faria com que o numero3 
    // ficasse com o valor 0 ao inves de 33, pois o criterio adotado 
    // dentro do laço é esperar um caractere nao numerico para encerrar 
    // a leitura do numero.
    if (textoNumero != "") {
        soma += Number(textoNumero);
    }
    
    return soma;
}

function ehNumero(caractere) {
    let codCaractere = caractere.charCodeAt() //descobre o codigo ascii de um caractere
    //verifica se o codigo do caractere esta entre os codigos dos numeros 0 e 9
    if (codCaractere >= 48 && codCaractere <= 57){ 
        return true
    } 
    return false
}