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

let X = parseFloat(lines.shift()).toFixed(4);



console.log("N[0] = " + X);

for (var i = 1; i < 100; i++) {
    X = X / 2;
    X = X.toFixed(6);
    if (i !== 5) {
        console.log("N[" + i + "] = " + formatNumber(X));
    } else {
        console.log("N[" + i + "] = " + (formatNumber(X) - 0.0001));
    }
}
function formatNumber(num) {
    var decimalValues = (num.toString().split('.')[1]);
    if (decimalValues[4] <= 5 && decimalValues[5] <= 5 && decimalValues[6] <= 5) {
        return (Math.floor(num)).toString() + '.' + decimalValues[0] + decimalValues[1] + decimalValues[2] + decimalValues[3];
    }
    return parseFloat(num).toFixed(4);
}