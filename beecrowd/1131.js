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

let vitoriasInter = 0
let vitoriasGremio = 0
let empates = 0
let qtdGrenais = 0
let novoGrenal = 1

while(novoGrenal == 1){
    let [inter, gremio] = lines.shift().split(" ").map((elemento) => Number(elemento))
    if(inter > gremio){
        vitoriasInter ++
    }else if(gremio > inter){
        vitoriasGremio ++
    }else{
        empates ++
    }
    qtdGrenais ++

    console.log("Novo grenal (1-sim 2-nao)")

    novoGrenal = parseInt(lines.shift());
}

console.log(`${qtdGrenais} grenais
Inter:${vitoriasInter}
Gremio:${vitoriasGremio}
Empates:${empates}`)

if(vitoriasGremio > vitoriasInter){
    console.log("Gremio venceu mais")
}else if(vitoriasInter > vitoriasGremio){
    console.log("Inter venceu mais")
}else{
    console.log("Nao houve vencedor")
}