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
let valorInicial = parseInt(lines.shift());

let valor = valorInicial

let notas100 = parseInt(valor / 100)
valor -= notas100 * 100

let notas50 = parseInt(valor / 50)
valor -= notas50 * 50

let notas20 = parseInt(valor / 20)
valor -= notas20 * 20

let notas10 = parseInt(valor / 10)
valor -= notas10 * 10

let notas5 = parseInt(valor / 5)
valor -= notas5 * 5

let notas2 = parseInt(valor / 2)
valor -= notas2 * 2

let notas1 = valor

console.log(`${valorInicial}
${notas100} nota(s) de R$ 100,00
${notas50} nota(s) de R$ 50,00
${notas20} nota(s) de R$ 20,00
${notas10} nota(s) de R$ 10,00
${notas5} nota(s) de R$ 5,00
${notas2} nota(s) de R$ 2,00
${notas1} nota(s) de R$ 1,00`)