/*
Criar classes que representam animais em um zoológico.
Cada classe de animal deve ter métodos que descrevam suas características
e comportamentos pode  criar uma classe Zoo que permite adicionar e
gerenciar diferentes animais no zoológico.
*/

class Animal{
    constructor(nome, especie, alimento, habito_diurno_noturno, idade, sexo){
        this.nome = nome
        this.especie = especie
        this.alimento = alimento
        this.habito_diurno_noturno = habito_diurno_noturno
        this.idade = idade
        this.sexo = sexo
    }

    comer(){
        console.log(`O(a) ${this.nome} da especie ${this.especie} comeu ${this.alimento} e está de buchinho cheio`)
    }

    brincar(){
        console.log(`O(a) ${this.nome} da especie ${this.especie} está brincando`)
    }

    reproduzir(){
        console.log(`O(a) ${this.nome} da especie ${this.especie} está fazendo filhotinhos!`)
    }

    dormir(){
        console.log(`O(a) ${this.nome} da especie ${this.especie} é ${this.habito_diurno_noturno} e está dormindo zzzz`)
    }
}

class Zoo{
    animais = []
    constructor(animais, nome){
        this.animais = animais
        this.nome = nome
    }

    adicionar(animal){
        this.animais.push(animal)
    }

    gerenciar(){
        console.log("ESPECIE".padEnd(20) + "NOME".padEnd(20) + "IDADE".padEnd(6) + "SEXO")
        this.animais.forEach(animal => {
            console.log(String(animal.especie).padEnd(20) + String(animal.nome).padEnd(20) + String(animal.idade).padEnd(6) + animal.sexo)
        });
    }
}

const zoologico = new Zoo([], "Bichinhos Felizes")

const capivara = new Animal("Capitú", "Capivara", "Capim", "diurno", 5, "Fêmea")
const macaco = new Animal("Chico", "Chimpanzé", "Banana","diurno" , 8, "Macho")

zoologico.adicionar(capivara)
zoologico.adicionar(macaco)
zoologico.gerenciar()

capivara.comer()
capivara.brincar()
capivara.dormir()
capivara.reproduzir()

macaco.comer()



