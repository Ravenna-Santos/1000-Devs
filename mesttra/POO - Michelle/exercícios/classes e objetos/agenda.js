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

    editar(posicao, novoNome, novoSobrenome, novoNumero){
        arrayAgenda[posicao - 1] = new Contato(novoNome, novoSobrenome, novoNumero)
    },

    excluir(posicao){
        arrayAgenda.splice(posicao - 1, 1)
    },

    imprimir(){
        let contato;
        console.log("id".padEnd(5) + "nome".padEnd(20) + "número".padEnd(10))
        for(let index = 0; index < arrayAgenda.length; index++){
            contato = arrayAgenda[index]
            console.log(String(index).padEnd(5) + String(contato.nome + " " + contato.sobrenome ).padEnd(20) + String(contato.numero).padEnd(10))
        }
    }


})

agenda.adicionar("Ravenna", "Santos", 123)
agenda.imprimir()
agenda.adicionar("Maria", "Jesus", 123)
agenda.imprimir()
agenda.excluir(1)
agenda.imprimir()



