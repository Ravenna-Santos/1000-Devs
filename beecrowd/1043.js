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
let [a, b, c] = lines.shift().split(" "); 

a = parseFloat(a)
b = parseFloat(b)
c = parseFloat(c)

        // | b - c | < a < b + c                       | a - c | < b < a + c                      a - b | < c < a + b
if( (Math.abs(b - c)) < a && (a < (b + c)) || (Math.abs(a - c)) < b && (b < (a + c)) || (Math.abs(a - b)) < c && (c < (a + b)) ){
    let perimetro = a + b + c
    console.log("Perimetro = " + perimetro.toFixed(1))
}else{
    let area = ((a + b) * c) / 2
    console.log("Area = " + area.toFixed(1))
}