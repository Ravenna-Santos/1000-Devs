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
let [qtdeAbas, qtdeAcoes] = lines.shift().split(" ").map((n) => Number(n));
let acao;

for(let i = 0; i < qtdeAcoes; i++){
    acao = lines.shift();
    if(acao.toLowerCase() == 'fechou'){
        qtdeAbas += 1;
    }else if(acao.toLowerCase() == 'clicou'){
        qtdeAbas -= 1;
    } 
}

console.log(qtdeAbas);