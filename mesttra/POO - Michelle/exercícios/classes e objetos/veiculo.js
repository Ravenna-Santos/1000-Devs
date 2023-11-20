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