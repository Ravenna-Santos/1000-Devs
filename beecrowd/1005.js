const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//Realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf-8');
var lines = input.split('\r\n');

// COLAR NO BEECROWD O CÓDIGO A BAIXO

//Quebrando a entrada de dados de uma linha em variáveis separadas
//lines = lines[0].split(" ");

let a = parseFloat(lines[0])
let b = parseFloat(lines[1])

let resultado = ((a * 3.5) + (b * 7.5)) / 11

console.log("MEDIA = " + resultado.toFixed(5))