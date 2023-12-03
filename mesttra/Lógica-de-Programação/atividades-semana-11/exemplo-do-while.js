// O código abaixo apresenta um exemplo de uso de uma estrutura de decisão do tipo do while para realizar a
// leitura de sucessivas senhas até que uma atenda os critérios da senha.



console.clear()
const prompt = require("prompt-sync")()
console.log("Imprimir os critérios para que a senha seja aceita. ")

let retorno = false

do {
    senha = prompt("Digite uma senha: ")
    
    retorno = validarSenha(senha)

    if (retorno == false) {
        console.log("A sua senha não foi aceita. Tente novamente.")
    }

} while (retorno == false)


function validarSenha(senha){
    const vogais = "aeiou"
    let qtdeVogais = 0
    let letraPassword
    for (let indicePassword = 0; indicePassword < senha.length; indicePassword++){
        letraPassword = senha.charAt(indicePassword)
    
        for (let indiceVogais = 0; indiceVogais < vogais.length; indiceVogais++) {
            if (letraPassword == vogais.charAt(indiceVogais)) {
                qtdeVogais += 1;
            }
        }

    }

    if (qtdeVogais >= 2) {
        return true
    } else {
        return false
    }

}