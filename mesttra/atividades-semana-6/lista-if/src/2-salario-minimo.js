const prompt = require('prompt-sync')();

let salarioMinimo = Number(prompt("Informe o valor do salário mínimo: "))
let salarioFuncionario = Number(prompt("Informe o valor do salário do funcionário: "))

if(salarioFuncionario < salarioMinimo){
    console.log("O funcionario ganha menos que um salario minimo!")
}else{
    let qtdSalariosMinimos = salarioFuncionario / salarioMinimo
    
    console.log("\nO funcionário recebe " + qtdSalariosMinimos.toFixed(1) + " salários mínimos!")

}

