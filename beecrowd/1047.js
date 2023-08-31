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
let [horaInicial, minutoInicial, horaFinal, minutoFinal] = lines.shift().split(" ");

let duracaoHoras, duracaoMinutos

horaInicial = parseInt(horaInicial)
minutoInicial = parseInt(minutoInicial)
horaFinal = parseInt(horaFinal)
minutoFinal = parseInt(minutoFinal)

duracaoMinutos = minutoFinal - minutoInicial
duracaoHoras = horaFinal - horaInicial

if(duracaoMinutos < 0){
    duracaoMinutos += 60
    duracaoHoras--
}

if(duracaoHoras < 0){
    duracaoHoras += 24
}else if(duracaoHoras == 0 && duracaoMinutos == 0){
    duracaoHoras += 24
}

console.log(`O JOGO DUROU ${duracaoHoras} HORA(S) E ${duracaoMinutos} MINUTO(S)`)