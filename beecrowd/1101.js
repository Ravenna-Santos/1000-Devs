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
//let qtdTeste = parseInt(lines.shift());

let [num1, num2] = lines.shift().split(" ").map((elemento) => Number(elemento))

while (num1 > 0 && num2 > 0) {
    console.log(calcularSoma(num1, num2))
    let [numero1, numero2] = lines.shift().split(" ")
    num1 = Number(numero1)
    num2 = Number(numero2)

}

function calcularSoma(num1, num2){
    let soma = 0
        let linha = ""

        if(num1 > num2){
            let aux = num1
            num1 = num2
            num2 = aux
        }

        for(let i = num1; i <= num2; i++){
            linha += (i + " ")
            soma += i
        }

        linha += "Sum=" + soma
    return linha
}