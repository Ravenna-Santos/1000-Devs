console.clear()

let cont
let valor = 500

console.log("Tabela")

for(cont = 1; cont <= 25; cont++){
    console.log(formatarMoeda(valor) + " = " + cont + "%")
    valor += 100;
}

function formatarMoeda(valor){
    return valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}