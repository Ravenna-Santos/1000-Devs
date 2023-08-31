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
let [cod, quantidade] = lines.shift().split(" "); 

//para ler linhas com um unico valor na mesma linha use o comando a seguir
//let notaExame = lines.shift();   

cod = parseFloat(cod)
quantidade = parseInt(quantidade)

var total = (valorLanche(cod) * quantidade).toFixed(2)

console.log("Total: R$ " + total)

function valorLanche(codigo){
    if(codigo == 1){
        return 4.00
    }else if(codigo == 2){
        return 4.50
    }else if(codigo == 3){
        return 5.00
    }else if(codigo == 4){
        return 2.00
    }else if(codigo == 5){
        return 1.50
    }
}