let arrayAgenda = []

class Contato{
    constructor(nome, sobrenome, numero){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.numero = numero;
    }
}

var agenda = ({
    adicionar(nome, sobrenome, numero){
        const contato = new Contato(nome, sobrenome, numero);
        arrayAgenda[arrayAgenda.length] = contato;

    },

    editar(){

    },

    excluir(){

    }


})

agenda.adicionar("Ravenna", "Santos", 123)
console.log(arrayAgenda)
agenda.adicionar("Maria", "Jesus", 123)
console.log(arrayAgenda)



