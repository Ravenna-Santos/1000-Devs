let i
let j
let fracao

for(i = 0; i <= 20; i += 2){
    fracao = i / 10
    for(j = 1; j <= 3; j++){
        console.log(`I=${fracao} J=${j + fracao}`)
    }
}