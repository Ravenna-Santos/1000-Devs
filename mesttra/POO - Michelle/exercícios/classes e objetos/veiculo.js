/*
Classe de Veículo:
Criar uma classe Veículo com propriedades como marca, modelo, ano, e um
 método dirigir que exibe uma mensagem. Em seguida,crie objetos de diferentes 
 veículos, como carros, motos, etc.

*/

class Veiculo{
    constructor(marca, modelo, ano){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }

    dirigir(){
        console.log(`Você está diriginto um(a) ${this.modelo}, da marca ${this.marca} do ano ${this.ano}`)
    }
}

const moto = new Veiculo("Honda", "X-ADV", 2023)
moto.dirigir()

const carro = new Veiculo("Chevrolet", "Onix", 2022)
carro.dirigir()