const prompt = require('prompt-sync')();

let ltsRefresco = parseFloat(prompt("Digite a QTDE de lts de suco necessária: "))
let percentualAgua = parseFloat(prompt("Digite o percentual (%) de concentração da água: "))
let percentualSuco = parseFloat(prompt("Digite o percentual (%) de concentração do suco: "))

if((percentualSuco + percentualAgua) == 100){
    let ltsAgua = ltsRefresco *  (percentualAgua / 100)
    let ltsConcentrado = ltsRefresco * (percentualSuco / 100)

    console.log("\nSerá nescessário para fazer " + ltsRefresco + " de suco de maracujá:")
    console.log(ltsAgua.toFixed(2) + " lts de água")
    console.log(ltsConcentrado.toFixed(2) + " lts de suco concentrado de maracujá")
}else{
    console.log("\nOs valores de concentração não totalizam 100%.")
    let escolha = prompt("Deseja enquadrar os valores em escala de 100%[s|n]?: ")
    if(escolha == 's'){
        let percentualAguaNovo = (percentualAgua / (percentualAgua + percentualSuco)) * 100
        let percentualSucoNovo = (percentualSuco / (percentualAgua + percentualSuco)) * 100

        let ltsAgua = ltsRefresco *  (percentualAguaNovo / 100)
        let ltsConcentrado = ltsRefresco * (percentualSucoNovo / 100)

        console.log(`\nNovo percentual do Suco: ${percentualSucoNovo.toFixed(2)}\nNovo percentual do Agua: ${percentualAguaNovo.toFixed(2)}`)
    
        console.log("\nSerá nescessário para fazer " + ltsRefresco + " de suco de maracujá:")
        console.log(ltsConcentrado.toFixed(2) + " lts de suco concentrado de maracujá")
        console.log(ltsAgua.toFixed(2) + " lts de água")
    }else{
        console.log("Valores de concentracao incorretos. Processo finalizado!")
    }
}

