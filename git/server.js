const express = require('express');
const router = require('./src/routes/routes');

const app = express();

app.use(express.json());

app.use(router)



const port = 3001;

app.listen(port, () => {
    console.log(`server rodando na porta ${port}`);
});