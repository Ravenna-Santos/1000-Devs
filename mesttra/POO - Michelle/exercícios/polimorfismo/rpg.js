/*
Criar classes que representem personagens, monstros e itens em um jogo de RPG.
Cada classe deve ter propriedades e métodos que descrevam características,
habilidades e ações relacionadas aos personagens, monstros e itens pode
criar instâncias de cada classe e simular interações em um cenário de jogo.

*/


class Personagem{
    constructor(nome, hp, resistencia, dano, range, habilidade_ataque, habilidade_defesa){
        this.nome = nome
        this.hp = hp
        this.resistencia = resistencia
        this.dano = dano
        this.range = range
        this.habilidade_ataque = habilidade_ataque
        this.habilidade_defesa = habilidade_defesa
    }

    atacar(monstro){
        monstro.hp -= this.dano;
        if(monstro.hp <= 0){
            console.log(`O monstro ${monstro.tipo} foi derrotado!`)
        }else{
            console.log(`${this.nome} atacou o monstro ${monstro.tipo}, com a habilidade ${this.habilidade_ataque}, causando ${this.dano.toFixed()} de dano e baixando o HP do monstro para ${monstro.hp}`) 
        }
    }

    defender(dano){
        this.hp -=  dano / this.resistencia ;
        if(this.hp <= 0){
            console.log(`${this.nome} morreu!`)
        }else{
            console.log(`${this.nome} usou a habilidade ${this.habilidade_defesa} resistindo ao ataque e seu hp atual é ${this.hp.toFixed()}`)
        }

    }
}

class Monstro{
    constructor(tipo, hp, dano, range){
        this.tipo = tipo
        this.hp = hp
        this.dano = dano
        this.range = range
    }

    atacar(personagem){
        personagem.defender(this.dano)
    }

}

class Item{
    constructor(nome, multiplicador_hp, multiplicador_dano, multiplicador_resistencia){
        this.nome = nome
        this.multiplicador_hp = multiplicador_hp
        this.multiplicador_dano = multiplicador_dano
        this.multiplicador_resistencia = multiplicador_resistencia
    }

    equipar(personagem){
        personagem.hp *= this.multiplicador_hp
        personagem.resistencia *= this.multiplicador_resistencia
        personagem.dano *= this.multiplicador_dano

        console.log(`${personagem.nome} equipou o item ${this.nome}`)
    }
}

const player = new Personagem("Ravenna", 300, 2, 100, 110, "Umbracinese", "Escudo de energia sombria")
const monstro = new Monstro("Trigon", 1000, 110, 50)
const capa = new Item("Capa", 1.5, 1, 1.5)
const luvas = new Item("Luvas", 1, 2, 1)

capa.equipar(player)
luvas.equipar(player)

player.atacar(monstro)
monstro.atacar(player)
