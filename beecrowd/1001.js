const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//Realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf-8');
var lines = input.split('\r\n');

// COLAR NO BEECROWD O CÓDIGO A BAIXO

//Quebrando a entrada de dados de uma linha em variáveis separadas
//lines = lines[0].split(" ");

let a 
let b 
let x

a = parseInt(lines[0]);
b = parseInt(lines[1]);

x = a + b;

console.log("X = " + x)