/*
Gerenciador de Tarefas:
Criar uma classe Tarefa que representa uma tarefa com propriedades como título,
descrição e data de vencimento. Em seguida, criar  um objeto  GerenciadorDeTarefas
que permite  criar métodos para  adicionar, remover e listar tarefas.

*/

let arrayTarefas = []

class Tarefa{
    constructor(titulo, descricao, data){
        this.titulo = titulo;
        this.descricao = descricao;
        this.data = new Date(data);
    }
}

let gerenciadorDeTarefas = ({

    adicionar(titulo, descricao, data){
        let tarefinha = new Tarefa(titulo, descricao, data);
        arrayTarefas.push(tarefinha);
    },

    remover(posicao){
        arrayTarefas.splice(posicao - 1, 1);
    },

    listar(){
        let tarefinha;
        console.log("id".padEnd(5) + "título".padEnd(30) + "descrição".padEnd(40) + "data")
        for(let id = 0; id < arrayTarefas.length; id++){
            tarefinha = arrayTarefas[id];
            console.log(String(id + 1).padEnd(5) + tarefinha.titulo.padEnd(30) + tarefinha.descricao.padEnd(40) + (tarefinha.data.getDate() + "/" + (tarefinha.data.getMonth() + 1) + "/" + tarefinha.data.getFullYear()))
        }
    }

});

gerenciadorDeTarefas.adicionar("Fazer o almoço", "Esquentar o arroz, feijão e carne", "2023-11-20");
gerenciadorDeTarefas.listar()
gerenciadorDeTarefas.remover(1)
gerenciadorDeTarefas.listar()
