const express = require('express'); //importamos o express
const crypto = require('crypto');
const cors = require('cors');

const app = express(); // inicializo a minha instancia do express;

app.use(express.json()); // habilito o midleware de json do express;

app.use(cors()); //uso o middleware para remover o problema de cors

//criar uma lista de tarefas pre cadastrada
const tarefas = [
    {
        id: crypto.randomUUID(),
        text: 'Ir ao mercado',
        prazo: '2 dias'
    },
    {
        id: crypto.randomUUID(),
        text: 'Estudar sobre git',
        prazo: '3 dias'
    },
    {
        id: crypto.randomUUID(),
        text: 'Estudar javascript',
        prazo: '10 dias'
    }
];

app.get('/', (req, res) => {
    res.send('ola galera');
});

//rota q lista todas as tarefas pre cadastradas 
app.get('/tarefas', (req, res) =>{
    res.send(tarefas);
})

//rota que busca por uma tarefa especifica
app.get('/tarefas/:id', (req, res) => {
    //acessar o parametro da URL
    const idParam = req.params.id;
    //console.log( req.params.id)

    //buscar o item na lista de acordo com seu id

    const tarefa = tarefas.find((tarefa) => tarefa.id == idParam);

    res.send(tarefa);
})
  
//configuro a porta do nosso projeto e a sua exposicao.
const port = 3000;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})