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

let cont = Number(lines.shift());

for(let i = 0; i < cont; i++){
    let array = []
    n = Number(lines.shift())

    fibonacci((n + 1), array);

    console.log(`Fib(${n}) = ${array[n]}`);

}

function fibonacci(n, array) {
    if (n <= 0) {
        return;
    } else if (n === 1) {
        array[0] = 0;
    } else if (n === 2) {
        array[0] = 0;
        array[1] = 1;
    } else {
        fibonacci(n - 1, array);
        array[n - 1] = array[n - 2] + array[n - 3];
    }
}