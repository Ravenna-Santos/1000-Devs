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

let qtdeEntradas = Number(lines.shift())

for(let i = 0; i < qtdeEntradas; i++){
    let num = Number(lines.shift())
    let somaDivisores = 0

    for(let divisor = 1; divisor < num; divisor++){
        if(num % divisor == 0){
            somaDivisores += divisor
        }
    }

    if(somaDivisores == num){
        console.log(`${num} eh perfeito`)
    }else{
        console.log(`${num} nao eh perfeito`)

    }
    
}