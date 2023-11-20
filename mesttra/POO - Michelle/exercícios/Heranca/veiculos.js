/*




Objetivo: Criar uma hierarquia de classes representando veículos, como carros, motos e bicicletas, com propriedades e métodos específicos para cada tipo de veículo.

Passos sugeridos:

Crie uma classe base Veículo:

A classe base Veículo deve ter propriedades gerais, como marca e modelo,
 e um método acelerar que exibe uma mensagem genérica.

Crie uma classe Carro que herda de Veículo:
A classe Carro deve ter propriedades adicionais, como ano e portas.
Sobrescreva o método acelerar para que ele exiba uma mensagem específica para carros.
Adicione um método ligarArCondicionado que exiba uma mensagem relacionada ao ar-condicionado.


Crie uma classe Moto que herda de Veículo:
A classe Moto deve ter propriedades adicionais, como cilindradas.
Sobrescreva o método acelerar para que ele exiba uma mensagem específica para motos.
Adicione um método ligarFarol que exiba uma mensagem relacionada ao farol da moto.

Crie uma classe Bicicleta que herda de Veículo:
A classe Bicicleta não precisa de propriedades adicionais.
Sobrescreva o método acelerar para que ele exiba uma mensagem específica para bicicletas.
Adicione um método pedalar que exiba uma mensagem relacionada à ação de pedalar.
Crie objetos de cada classe e chame seus métodos:

Crie objetos representando um carro, uma moto e uma bicicleta.
Chame os métodos acelerar e os métodos adicionais de cada objeto
para demonstrar a herança e o polimorfismo em ação.

*/



class Veiculo{
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }

    acelerar(){
        console.log(`O veículo do modelo ${this.modelo} e marca ${this.marca} acelerou vrummm`);
    }
}

class Carro extends Veiculo{
    constructor(marca, modelo, ano, portas){
        super(marca, modelo);
        this.ano = ano;
        this.portas = portas;
    }

    acelerar(){
        console.log(`O carro com ${this.portas} portas, ano ${this.ano} do modelo ${this.modelo} e marca ${this.marca} acelerou vrummm`)
    }

    ligarArCondicionado(){
        console.log(`O ${this.modelo} está com o ar condicionado no 15`);
    }
}

class Moto extends Veiculo{
    constructor(marca, modelo, cilindradas){
        super(marca, modelo)
        this.cilindradas = cilindradas;
    }

    acelerar(){
        console.log(`A moto com ${this.cilindradas} cilindradas, do modelo ${this.modelo} e marca ${this.marca} acelerou vrummm`)

    }

    ligarFarol(){
        console.log(`A moto ${this.modelo} está com o farol ligado!`)
    }
}

class Bicicleta extends Veiculo{
    constructor(marca, modelo){
        super(marca, modelo);
    }

    acelerar(){
        console.log(`A bicicleta do modelo ${this.modelo} e marca ${this.marca} acelerou vrummm`)
    }

    pedalar(){
        console.log(`O ciclista está pedalando a bicicleta do modelo ${this.modelo} e marca ${this.marca}.`)

    }
}




const carro = new Carro("Ford", "Mustang", 2010, 4)
carro.acelerar()
carro.ligarArCondicionado();

const moto = new Moto("Honda", "Xl", 250)
moto.acelerar()
moto.ligarFarol()

const bicicleta = new Bicicleta("Monark", "Barra circular FI")
bicicleta.acelerar()
bicicleta.pedalar()