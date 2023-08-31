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
let [aa, bb, cc] = lines.shift().split(" "); 

let aux 

aa = parseFloat(aa)
bb = parseFloat(bb)
cc = parseFloat(cc)

// ordena os números
let [a, b, c] = ordenarNumeros(aa, bb, cc)

//classifica o triângulo
classificarTriangulo(a, b, c)

function ordenarNumeros(a,b,c){
    if( b < c){
        aux = b
        b = c
        c = aux
    }
    if( a < b){
        aux = a
        a = b
        b = aux
        if( b < c){
            aux = b
            b = c
            c = aux
        }
    }
    return [a, b, c]
}

function classificarTriangulo(){
    if(a >= (b + c)){
        console.log("NAO FORMA TRIANGULO")
    }else{
        if((a ** 2) == ((b ** 2) + (c **2))){
            console.log("TRIANGULO RETANGULO")
        }else if((a ** 2) > ((b ** 2) + (c **2))){
            console.log("TRIANGULO OBTUSANGULO")
        }else{
            console.log("TRIANGULO ACUTANGULO")
        }
    
        if(a == b && b == c){
            console.log("TRIANGULO EQUILATERO")
        }else if(a == b || b == c || a == c){
            console.log("TRIANGULO ISOSCELES")
        }
    }
}