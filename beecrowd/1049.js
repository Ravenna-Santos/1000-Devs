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
let filo = lines.shift().toLowerCase();
let classe = lines.shift().toLowerCase();
let habitoAlimentar = lines.shift().toLowerCase();
let especie

if(filo == "vertebrado"){
    if(classe == "ave"){
        if(habitoAlimentar == "carnivoro"){
            especie = "aguia"
        }else if(habitoAlimentar == "onivoro"){
            especie = "pomba"
        }
    }else if(classe == "mamifero"){
        if(habitoAlimentar == "onivoro"){
            especie = "homem"
        }else if(habitoAlimentar == "herbivoro"){
            especie = "vaca"
        }
    }
}else if( filo == "invertebrado"){
    if(classe == "inseto"){
        if(habitoAlimentar == "hematofago"){
            especie = "pulga"
        }else if(habitoAlimentar == "herbivoro"){
            especie = "lagarta"
        }
    }else if(classe == "anelideo"){
        if(habitoAlimentar == "hematofago"){
            especie = "sanguessuga"
        }else if(habitoAlimentar == "onivoro"){
            especie = "minhoca"
        }
    }
}

console.log(especie)

