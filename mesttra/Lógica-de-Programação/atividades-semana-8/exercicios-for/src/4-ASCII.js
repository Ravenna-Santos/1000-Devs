/*
Exercício 04: Mostre a tabela do código ASCII dos números 32 até 126. Utilize o método String.fromCharCode(Numero)
 */

console.log("==========TABELA ASCII============")
console.log(" Código\t\t Símbolo")
for(let cont = 32; cont <= 126; cont++){
    console.log("| " + cont + "\t\t|\t\t" +String.fromCharCode(cont) + " |")
}
console.log("==================================")