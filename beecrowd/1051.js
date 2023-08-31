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

let imposto;

if(salario <= 2000){
    console.log("Isento");
}else if(salario <= 3000){
    imposto = calcularImposto((salario - 2000), 8)
    console.log("R$ " + imposto.toFixed(2))
}else if(salario <= 4500){
    imposto = calcularImposto((1000), 8)
    imposto += calcularImposto((salario - 3000), 18)
    console.log("R$ " + imposto.toFixed(2))

}else{
    imposto = calcularImposto((1000), 8)
    imposto += calcularImposto((1500), 18)
    imposto += calcularImposto((salario - 4500), 28)
    console.log("R$ " + imposto.toFixed(2))
}

function calcularImposto(salario, percentual){
    return (salario * (percentual / 100))
}