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
let [nota1, nota2, nota3, nota4] = lines.shift().split(" "); 

//para ler linhas com um unico valor na mesma linha use o comando a seguir

nota1 = parseFloat(nota1)
nota2 = parseFloat(nota2)
nota3 = parseFloat(nota3)
nota4 = parseFloat(nota4)

let media = ((nota1 * 2) + (nota2 * 3) + (nota3 * 4) + (nota4 * 1)) / (1 + 2 + 3 + 4)

console.log("Media: " + media.toFixed(1))

if(media >= 7){
    console.log("Aluno aprovado.")
}else if(media < 5){
    console.log("Aluno reprovado.")
}else{
    console.log("Aluno em exame.")

    let notaExame = lines.shift();
    notaExame = parseFloat(notaExame)
    console.log("Nota do exame: " + notaExame.toFixed(1))
    
    media = (media + notaExame) / 2

    if(media >= 5){
        console.log("Aluno aprovado.")
    }else{
        console.log("Aluno reprovado.")
    }

    console.log("Media final: " + media.toFixed(1))

}