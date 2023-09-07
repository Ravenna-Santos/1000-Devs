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
let duracaoSegundos = 0
let duracaoMinutos = 0
let duracaoHoras = 0
let duracaoDias = 0

let diaInicial = parseInt(lines.shift().replace("Dia ", ""));
let [horaInicial, minutoInicial, segundoIncial] = lines.shift().split(" : ");
horaInicial = parseInt(horaInicial)
minutoInicial = parseInt(minutoInicial)
segundoIncial = parseInt(segundoIncial)

let diaFinal = parseInt(lines.shift().replace("Dia ", ""));
let [horaFinal, minutoFinal, segundoFinal] = lines.shift().split(" : ");
horaFinal = parseInt(horaFinal)
minutoFinal = parseInt(minutoFinal)
segundoFinal = parseInt(segundoFinal)

duracaoSegundos = segundoFinal - segundoIncial
if(duracaoSegundos < 0){
    duracaoSegundos += 60
    duracaoMinutos -= 1
}

duracaoMinutos += (minutoFinal - minutoInicial)
if(duracaoMinutos < 0){
    duracaoMinutos += 60
    duracaoHoras -= 1
}

duracaoHoras += (horaFinal - horaInicial)
if(duracaoHoras < 0){
    duracaoHoras += 24
    duracaoDias -= 1
}

duracaoDias += (diaFinal - diaInicial)

console.log(duracaoDias + " dia(s)")
console.log(duracaoHoras + " hora(s)")
console.log(duracaoMinutos + " minuto(s)")
console.log(duracaoSegundos + " segundo(s)")
