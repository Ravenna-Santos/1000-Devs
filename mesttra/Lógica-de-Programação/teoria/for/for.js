console.clear()

// let str = "mesttra";

// for (let letra of str){
//     console.log(letra)
// }

let valores = [31, 2, 4, 5, "mesttra", "B"]

for(let indice = 0; indice < valores.length; indice++){
    console.log("Tradicional Indice: " + indice + " " + valores[indice])
}

console.log()

for(let valor of valores){
    console.log("Simplificado: " + valor)
}

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of
// for(let valor in valores){
//     console.log("Simplificado: " + valor)
// }

console.log()

valores.forEach( (valores) => console.log("Arrow Functions " + valores))

console.log()