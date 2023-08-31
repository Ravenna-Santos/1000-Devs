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
let [num1, num2, num3] = lines.shift().split(" "); 

num1 = Number(num1)
num2 = Number(num2)
num3 = Number(num3)


if( num1 <= num2 && num1 <= num3){
    if(num2 <= num3){
        console.log(num1 + "\n" + num2 + "\n" + num3)
    }else{
        console.log(num1 + "\n" + num3 + "\n" + num2)
    }
}else if( num2 <= num1 && num2 <= num3){
    if(num1 <= num3){
        console.log(num2 + "\n" + num1 + "\n" + num3)
    }else{
        console.log(num2 + "\n" + num3 + "\n" + num1)
    }
}else if( num3 <= num1 && num3 <= num2){
    if(num1 <= num2){
        console.log(num3 + "\n" + num1 + "\n" + num2)
    }else{
        console.log(num3 + "\n" + num2 + "\n" + num1)//
    }
}

console.log("\n"+ num1 + "\n"+ num2 + "\n"+ num3)