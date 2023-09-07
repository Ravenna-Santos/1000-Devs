console.clear()
const prompt = require('prompt-sync')();
const pesoFatiaMussarela = (50/1000)
const pesoFatiaPresunto = (50/1000)
const pesoHamburguer = (120/1000)
const pesoMortadela = (70/1000)

let quantidadeSanduiche = Number(prompt("Digite a quantidade de sanduíches: "))

let mussarela = 2 * pesoFatiaMussarela * quantidadeSanduiche
let presunto = pesoFatiaPresunto * quantidadeSanduiche
let hamburguer = pesoHamburguer * quantidadeSanduiche

console.log("\nPara produzir " + quantidadeSanduiche+ " sanduíches serão necessários: ")
console.log(mussarela.toFixed(3) + " kgs de mussarela")
console.log(presunto.toFixed(3) + " kgs de presunto")
console.log(hamburguer.toFixed(3) + " kgs de hamburger")

let presuntoDisponivel = Number(prompt("Qual a quantidade em Kgs disponivel de presunto? "))

if(presunto > presuntoDisponivel){

    let sanduichesPossiveis = Math.floor(presuntoDisponivel / pesoFatiaPresunto)
    let sanduichesRestantes = quantidadeSanduiche - sanduichesPossiveis
    let restantePresunto = presuntoDisponivel - (sanduichesPossiveis * pesoFatiaPresunto)
    let mortadela = (pesoMortadela * sanduichesRestantes) // dando erro

    console.log(`
Sera possivel produzir apenas ${sanduichesPossiveis} sanduiches com presunto
Sera necessario ${mortadela.toFixed(3)} kgs de mortadela para produzir ${sanduichesRestantes} sanduiches restantes
Da quantidade de presunto disponivel sobrara ${restantePresunto.toFixed(3)} kgs`)
}