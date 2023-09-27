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

calcularMedia()
console.log("novo calculo (1-sim 2-nao)")
let repetir = parseInt(lines.shift())


while(repetir != 2){
    if(repetir == 1){
        calcularMedia()
    }
    console.log("novo calculo (1-sim 2-nao)")
    repetir = parseInt(lines.shift())   
}


function calcularMedia(){
    let nota1, nota2
    let nota = parseFloat(lines.shift());
    while (!nota1 || !nota2) {
        if(nota >= 0 && nota <= 10){
            if(!nota1){
                nota1 = nota
            }else{
                nota2 = nota
            }
        }else{
            console.log("nota invalida")
        }

        if(!nota1 || !nota2){
            nota = parseFloat(lines.shift());
        }else{
            break;
        }
    }

    let media = (nota1 + nota2) / 2
    console.log("media = " + media.toFixed(2))
}