// //Exemplo: A soma de variavel x com a variavel y é maior ou igual a 90 e a variável z é diferente de 70

// let x = 3
// let y = 35
// let z = 9

// let resultado

// resultado = ((x + y) >= 90) && (z != 70)
// resultado = ((x + y) > 90 || (x + y) == 90) && (z != 70)     // outra possibilidade de construção do operador >= 
//                                                              // utilizando o operador lógico ||



// //O aluno será aprovado se a nota final do aluno (notaFinal) é maior ou igual a 60 e a frequência do aluno (aulasPresentes) é maior ou igual a 80% do total de aulas (totalAulas)

// let notaFinal = 88
// let totalAulas = 200 

// let alunoAprovado
// aulasPresentes = 152

// alunoAprovado = (notaFinal  >= 60) && (aulasPresentes >= ((80/100) * totalAulas))

// console.log("Aluno foi aprovado? " + alunoAprovado)


// //O veículo chegará ao destino se a distância a ser percorrida (percorrerDistancia) é menor ou igual a quantidade de combustível (qtdeCombustivel) multiplicado pela média de km por litro (mediaKmLitro)

// let percorrerDistancia = 800
// let mediaKmLitro = 9
// let qtdeCombustivel = 80

// let veiculoChegaAoDestino

// veiculoChegaAoDestino = (percorrerDistancia <= (qtdeCombustivel * mediaKmLitro))

// console.log("Veículo chega até o destino? " + veiculoChegaAoDestino )


// //Viajarei no fim de semana, se a passagem de ônibus (valorPassagemOnibus) for menor ou igual ao valor que tenho (valorQueTenho) e tenha passagem de onibus (temPassagemOnibus) ou consiga carona de carro (temCaronaCarro)

// let valorPassagemOnibus = 200.40
// let valorQueTenho = 180.00
// let temPassagemOnibus = true
// let temCaronaCarro = false

// let vouViajar

// vouViajar = ((valorPassagemOnibus <= valorQueTenho) && temPassagemOnibus) || temCaronaCarro
//// vouViajar = (valorPassagemOnibus <= valorQueTenho) && (temPassagemOnibus == true || temCaronaCarro == true) //correção do professor


// console.log("Vou viajar? " + vouViajar)


// //No cinema, vou comer lanche se a soma do valor da bebida (valorBebida) com a pipoca (valorPipoca) for no máximo 80% do valor que eu tenho (valorQueTenho) e ainda se a bebida (bebida) for "coca-cola"

// let bebida = "pepsi"
// let valorBebida = 5.50
// let valorPipoca = 6.00
// let valorQueTenho = 52.50

// let comereiLanche

// comereiLanche = ((valorBebida + valorPipoca) <= ((80/100) * valorQueTenho)) && (bebida == "coca-cola")


// console.log("Vou comer o lanche no cinema? " + comereiLanche)
