function soma(){
    let soma = 0
    let elemento = document.getElementsByName("txtValor") 
    for(componente = 0; componente < elemento.length; componente++){
        soma += Number(elemento[componente].value)
    }

    document.getElementById("lblResultado").innerHTML = "Soma: " + soma
}

function adicionar(){
    let proxNum = document.getElementsByName("txtValor").length + 1
    document.getElementById("areaValores").innerHTML += `<label>Valor ${proxNum}: </label>
    <input type="text" name="txtValor" id="txtValor${proxNum}"><br><br>`

    document.getElementById("lblResultado").innerHTML = ""

}

function todosElementos(){
    let todosElementos = document.getElementsByTagName("input")

    for(let componente = 0; componente < todosElementos.length; componente++){
        if(todosElementos[componente].type == "text"){
            console.log(todosElementos[componente].id)
        }
    }
}