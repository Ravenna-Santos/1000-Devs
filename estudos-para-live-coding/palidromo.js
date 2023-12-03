/*
crie um programa que testa se uma palavra é ou não é um palidromo
*/
console.clear()
let palavras = ['abacate', 'ana', 'Roma é amor',
             'omissíssimo', 'socorram me subino onibus em Marrocos']
let qtde_palavras = palavras.length;
for(let indice = 0; indice < qtde_palavras; indice++){           
    let palavra = palavras[indice].toLowerCase().split('');

    if(palavras[indice].toLowerCase() == palavras[indice].split('').reverse().join('').toLowerCase()){
        console.log(`${palavras[indice]} é um palidromo`)
    }else{
        console.log(`${palavras[indice]} não é um palidromo`)  
    }
}
