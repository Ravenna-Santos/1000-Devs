console.clear()

let mensagem = ""

for(let cont = 1000; cont <= 2000; cont++){
    if((cont % 11) == 2){
        mensagem += cont + ", "
    }
}

console.log(mensagem.slice(0, (mensagem.length - 2)))