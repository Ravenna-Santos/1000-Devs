const validarSenha = require(".\\funcoes\\validarSenha.js")

const compMinimo = 6
const qtdeRepNaoAceita = 3

console.clear()

let minhaSenha = "s3grrr3d0"

let atendeCompMinimo = validarSenha.atendeCompMinimo(minhaSenha, compMinimo)
let atendeRepeticoesIguais = validarSenha.atendeRepeticoesIguais(minhaSenha, qtdeRepNaoAceita)

if(atendeCompMinimo && atendeRepeticoesIguais){
    console.log("Senha aceita.")
}else{
    console.log("Senha não aceita.")
}