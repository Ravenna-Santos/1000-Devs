const prompt = require('prompt-sync')();

let QtdeFrangos = parseInt(prompt("Digite a QTDE de frangos: "))
let valorChipAlimentacao = parseFloat(prompt("Digite o valor do chip de alimentação: "))
let valorChipId = parseFloat(prompt("Digite o valor do chip de identificação: "))

let calculoDiferenca = Math.abs(valorChipAlimentacao - valorChipId)

let qtdeChipId = QtdeFrangos
let qtdeChipAlimentacao = QtdeFrangos * 2

let gastoChipId = qtdeChipId * valorChipId
let gastoChipAlimentacao = qtdeChipAlimentacao * valorChipAlimentacao
let gastoTotal = gastoChipAlimentacao + gastoChipId




if((valorChipId > valorChipAlimentacao) && (calculoDiferenca <= ((20 / 100) * valorChipId))){
    let qtdeChipAlimentacaoAumento = Math.ceil(qtdeChipAlimentacao * (20 / 100))
    let adicionalChipAlimentacao = qtdeChipAlimentacaoAumento * valorChipAlimentacao
    gastoTotal += adicionalChipAlimentacao 

    console.log(`A quantidade do chip de alimentacao sofreu aumento de 20% de (${qtdeChipAlimentacao} unidades) para (${(qtdeChipAlimentacaoAumento + qtdeChipAlimentacao)} unidades)

O valor total para identificar os frangos e:
Chip Alimentacao = R$ ${gastoChipAlimentacao.toFixed(2)} \t\tAdicional 20%= R$ ${adicionalChipAlimentacao.toFixed(2)}
Chip Identificacao = R$ ${gastoChipId.toFixed(2)}
Valor Total = R$ ${gastoTotal.toFixed(2)}`)

}else if((valorChipId < valorChipAlimentacao) && (calculoDiferenca <= ((20 / 100) * valorChipAlimentacao))){
    let qtdeChipIdAumento = Math.ceil(qtdeChipId * (20 / 100))
    let adicionalChipId = qtdeChipIdAumento * valorChipId
    gastoTotal += adicionalChipId

    console.log(`A quantidade do chip de identificacao sofreu aumento de 20% de (${qtdeChipId} unidades) para (${qtdeChipId + qtdeChipIdAumento} unidades)

O valor total para identificar os frangos e:
Chip Alimentacao = R$ ${gastoChipAlimentacao.toFixed(2)}
Chip Identificacao = R$ ${gastoChipId} Adicional 20%= R$ ${adicionalChipId.toFixed(2)}
Valor Total = R$ ${gastoTotal.toFixed(2)}`)

    
}else{

    console.log(`
O valor total para identificar os frangos e:
Chip Alimentacao = R$ ${gastoChipAlimentacao.toFixed(2)}
Chip Identificacao = R$ ${gastoChipId.toFixed(2)}
Valor Total = R$ ${gastoTotal.toFixed(2)}
`)
    
}
