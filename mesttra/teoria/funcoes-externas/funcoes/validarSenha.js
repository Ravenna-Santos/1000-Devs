function atendeCompMinimo(senha, comprimento){
    if(senha.length >= comprimento){
        return true
    }else{
        return false
    }
}

function atendeRepeticoesIguais(senha, repeticoes){
    let str 
    for(letra = 0; letra < (senha.length - 1); letra++){
        str = senha[letra].repeat(repeticoes)

        if(existeRepeticao(senha, str)){
            return false
        }
    }
    return true
}

function existeRepeticao(senha, str){ // não está no exports logo não é acessivel externamente, só é usada aq
    return senha.includes(str)        
}

module.exports = {  atendeCompMinimo,
                    atendeRepeticoesIguais

}