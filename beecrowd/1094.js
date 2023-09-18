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
let qtdExperiencias = parseInt(lines.shift());
let qtdCobaiasTotal = 0
let qtdRatos = 0
let qtdCoelhos = 0
let qtdSapos = 0

for (let i = 0; i < qtdExperiencias; i++) {
    let [qtdCobaias, tipoCobaias] = lines.shift().split(" ");
    qtdCobaias = parseInt(qtdCobaias)
    switch (tipoCobaias) {
        case "R":
            qtdRatos += qtdCobaias
            break;
        case "C":
            qtdCoelhos += qtdCobaias
            break;
        case "S":
                qtdSapos += qtdCobaias
                break;
        default:
            break;
    }
    
}

qtdCobaiasTotal = qtdCoelhos + qtdRatos + qtdSapos

console.log(`Total: ${qtdCobaiasTotal} cobaias
Total de coelhos: ${qtdCoelhos}
Total de ratos: ${qtdRatos}
Total de sapos: ${qtdSapos}
Percentual de coelhos: ${((qtdCoelhos / qtdCobaiasTotal) * 100).toFixed(2)} %
Percentual de ratos: ${((qtdRatos / qtdCobaiasTotal) * 100).toFixed(2)} %
Percentual de sapos: ${((qtdSapos / qtdCobaiasTotal) * 100).toFixed(2)} %`)
