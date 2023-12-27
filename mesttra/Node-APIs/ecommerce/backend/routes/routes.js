const express = require('express');
const crypto = require('crypto')

//inicializa as rotas do express
const router = express.Router();

const products = []

// [GET] - Rota que lista todos os produtos
router.get('/', (req, res) => {
    res.send(products);
})

// [GET] - Rota que retorna um produto por id
router.get("/:id", (req, res) =>{
    const id = req.params.id; // pega o parametro id da requisição
    const product = products.find(product => product.id == id); // procura o id
    
    if(!product){ // se produto vazio
        res.status(404) .send('Produto não encontrado') //retorna o status http da requisição
    }

    res.send(product) // responde com o produto
})

// CRUD (CREATE - POST)(READ - GET)(UPDATE - PUT)(DELETE - DELETE)

// [POST] - Cadastra um novo produto
router.post("/add", (req, res) =>{
    const product = req.body;

    const newProduct = {
        id: crypto.randomUUID(),
        ...product
    }

    if(!product || !product.name || !product.price || !product.category){
        res.status(400).send('Está faltando os dados do produto')
    }


    products.push(newProduct)
    res.status(201).send('Produto cadastrado com sucesso')

})

//[DELETE] - Exclui um produto
router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;

    //procuro em qual posição está o produto pelo seu id
    const index = products.findIndex(product => product.id == id);
    
    products.splice(index, 1);

    res.send('Produto excluído com sucesso!')
})

// exporto as rotas para serem usadas no index.js
module.exports = router;