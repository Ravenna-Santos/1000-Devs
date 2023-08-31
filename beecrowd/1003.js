const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//Realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf-8');
var lines = input.split('\r\n');

// COLAR NO BEECROWD O CÓDIGO A BAIXO

//Quebrando a entrada de dados de uma linha em variáveis separadas
//lines = lines[0].split(" ");

let a = parseInt(lines[0])
let b = parseInt(lines[1])

let soma = a + b

console.log("SOMA = " + soma)