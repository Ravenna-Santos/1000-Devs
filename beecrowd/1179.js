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
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
//let [var1, var2, var3, var4] = lines.shift().split(" "); 

//para ler linhas com um unico valor na mesma linha use o comando a seguir
//let notaExame = lines.shift();
let impares = [];
let pares = [];

for (let qtdeEntradas = 0; qtdeEntradas < 15; qtdeEntradas++) {
    let numero = Number(lines.shift());

    if (numero % 2 === 0) {
        pares.push(numero);
    } else {
        impares.push(numero);
    }

    if (pares.length === 5) {
        imprimirArray(pares, 'par');
        pares = [];
    }

    if (impares.length === 5) {
        imprimirArray(impares, 'impar');
        impares = [];
    }
}

imprimirArray(impares, 'impar');
imprimirArray(pares, 'par');

function imprimirArray(array, tipo) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${tipo}[${i}] = ${array[i]}`);
    }
}
