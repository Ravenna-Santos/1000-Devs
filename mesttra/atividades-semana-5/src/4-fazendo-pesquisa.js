/*
O código abaixo abaixo apesar de aparentar estar tudo correto
ainda produz um resultado concatenado conforme a imagem abaixo:

    var valor

    valor = prompt("Digite um valor: ")       
    valor = parseFloat(valor)
    valor = valor.toFixed(2)

    console.log("A variável somada com 10 produz o resultado:" + (valor + 10))

Tente entender o que está acontecendo neste código e faça a correção.
Dica, utilize este link para consultar o comportamento do método toFixed()
com relação ao tipo de dados retornado.
Se concentre na informação referente ao valor de retorno.

Caso você consiga identificar qual o problema e realizar a correção,
tente substituir as três linhas abaixo (ver figura) por uma única linha
utilizando a técnica de aninhamento de comandos.
*/

const prompt = require('prompt-sync')();

var valor

valor = Number(parseFloat(prompt("Digite um valor: ")).toFixed(2))

console.log("A variável somada com 10 produz o resultado: " + (valor + 10))