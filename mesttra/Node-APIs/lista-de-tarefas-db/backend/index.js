// npm init -y (inicia o projeto)
// npm install express pg sequelize cors (instala o express pro servidor, o node-postgress para a conexão com o db e o ORM e cors Middleware para permitir solicitações de recursos de diferentes origens)
require('dotenv').config()

const express = require('express');

const tasksRouter = require('./routes/routes')

const app = express();

app.use(express.json());

app.use('/tasks/', tasksRouter);

console.log(process.env.HOST_DB)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})