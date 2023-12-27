// para iniciar o projeto "npm init -y" q cria o arquivo package.json
// para instalar o express "npm install express"

const express = require('express');

//importo as rotas da aplicação
const productsRouter = require('./routes/routes');

//inicializo a minha instancia do express
const app = express();

//habilito o midleware de json do express
app.use(express.json());

//inicializa a rota /products de acordo com as configurações do arquivo de rotas
app.use('/products', productsRouter);

//configuro a primeiro rota (boas vindas)
app.get('/', (req, res) => {
    setTimeout(() =>{
        res.send('Bem-vindo(a) a minha API!')
    })
})

//configuro a porta e a sua exposição
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})