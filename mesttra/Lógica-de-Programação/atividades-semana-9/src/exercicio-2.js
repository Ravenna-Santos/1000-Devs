let alturaChico = 150
let taxaCrescimentoChico = 2
let alturaZe = 110
let taxaCrescimentoZe = 3

for(var anos = 0; alturaZe <= alturaChico; anos ++){
    alturaZe += taxaCrescimentoZe
    alturaChico += taxaCrescimentoChico
}

console.log(`Zé gastará ${anos} anos para passar a altura de Chico`)