const listaTarefasHtml = document.getElementById("tarefas");
console.log(listaTarefasHtml);

//Fetch API - usado para trabalhar com requisições http com javascript (get/post/put/delete)
//primeiro parametro - end point da requisição (para onde iremos enviar a nossa requisição do front)
//segundo parametro (opcional) - configurações da requisição ece: metodo (get/post/put/delete)
const Api = fetch('http://localhost:3000/tarefas');
console.log(Api);

Api.then((response) => {
    console.log(response);
    return response.json()
}).then((tarefas) => {
    //console.log(tarefas);
    tarefas.map((tarefa) => {
        listaTarefasHtml.insertAdjacentHTML("beforeend", 
        `<li>
            <p>Tarefa: ${tarefa.text}</p>
            <p>Prazo: ${tarefa.prazo}</p>
        </li>`)
    })
})