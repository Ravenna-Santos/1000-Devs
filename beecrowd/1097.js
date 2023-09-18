let j = 7
for(let i = 1; i <= 9; i += 2){
    let contador
    for(contador = 0; contador < 3; contador ++){
        console.log(`I=${i} J=${j}`)
        j -= 1
    }
    j += 5
    contador = 0
}