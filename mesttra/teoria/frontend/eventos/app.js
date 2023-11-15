function soma(){
    let soma = 0
    let componente = document.getElementsByName("txtValor")

    for (let index = 0; index < componente.length; index++) {
        soma += Number(componente[index].value)
        
    }
    
    document.getElementById("lblResultado").innerHTML ="Soma: " + soma

}

function limparClick(){
    let componente = document.getElementsByName("txtValor")
    for (let index = 0; index < componente.length; index++) {
        componente[index].value = ""
        
    }

    document.getElementById("lblResultado").innerHTML =""


}

function tamanho(tamanho){
    document.getElementById("txtValor1").size = tamanho
}

function desabilitar(){
    document.getElementById("txtValor2").disabled = true
}