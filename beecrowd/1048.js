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
let salario = parseFloat(lines.shift());
let reajuste, percentual


if(salario <= 400){
    percentual = 15
}else if(salario <= 800){
    percentual = 12
}else if(salario <= 1200){
    percentual = 10
}else if(salario <= 2000){
    percentual = 7
}else{
    percentual = 4
}

reajuste = calcularReajuste(salario, percentual)
salario += reajuste

console.log(`Novo salario: ${salario.toFixed(2)}
Reajuste ganho: ${reajuste.toFixed(2)}
Em percentual: ${percentual} %`)

function calcularReajuste(salario, percentual){
    let reajuste = salario * (percentual / 100)
    return reajuste
}