for(let i = 0; i <= 5; i++){
    procedimento(i);
}

for(let i = 4; i > 0; i--){
    procedimento(i);
}
function procedimento(identificador){
    switch(identificador){
        case 1:
            console.log("A".padStart(8));
            break;
        case 2:
            console.log("B".padStart(7) + "B".padStart(2));
            break;
        case 3:
            console.log("C".padStart(6) + "C".padStart(4));
            break;
        case 4:
            console.log("D".padStart(5) + "D".padStart(6));
            break;
        case 5:
            console.log("E".padStart(4) + "E".padStart(8));
            break;
    }
}