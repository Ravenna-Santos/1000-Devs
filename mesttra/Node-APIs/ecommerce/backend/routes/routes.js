const express = require('express');
const crypto = require('crypto')

//importo o dbConfig
const pool = require('../dbConfig');

//inicializa as rotas do express
const router = express.Router();

const products = []

// [GET] - Rota que lista todos os produtos
router.get('/', async (req, res) => {
    const productsDB = await pool.query('SELECT * FROM products')
    res.send(productsDB.rows); // uma forma mais clara de pegar as linhas, em outras funções farei de outra forma equivalente
})

// [GET] - Rota que retorna um produto por id
router.get("/:id", async (req, res) =>{
    const id = req.params.id; // pega o parametro id da requisição

    // const product = products.find(product => product.id == id); // procura o id se fosse array em memoria
    
    const {rows} = await pool.query('SELECT * FROM products WHERE id = $1', [id])

    if(rows.length === 0){ // se produto vazio
        res.status(404) .send('Produto não encontrado') //retorna o status http da requisição
    }

    res.send(rows) // responde com o produto
})

// CRUD (CREATE - POST)(READ - GET)(UPDATE - PUT)(DELETE - DELETE)

// [POST] - Cadastra um novo produto
router.post("/add", async (req, res) =>{
    const product = req.body;

    // const newProduct = {
    //     id: crypto.randomUUID(),
    //     ...product
    // }

    if(!product || !product.name || !product.price || !product.category){
        res.status(400).send('Está faltando os dados do produto')
        return;
    }

    const { rows } = await pool.query('INSERT INTO products (id, name, category, price) VALUES ($1, $2, $3, $4) RETURNING *',
    [crypto.randomUUID(), product.name, product.category, product.price] )


    // products.push(newProduct)

    res.status(201).json({
        status: 'Produto cadastrado com sucesso',
        data: rows
    })

})

//[DELETE] - Exclui um produto
router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;



    /* utilizado para fazer crud em memoria com array
    //procuro em qual posição está o produto pelo seu id
    const index = products.findIndex(product => product.id == id);
    
    products.splice(index, 1);
    */

    const { rows } = await pool.query('DELETE FROM products WHERE id = $1 RETURNING *', [id])


    res.json({
        message: 'Produto excluído com sucesso!',
        data: rows
    })
})

//[PUT] - Atualiza um produto já cadastrado

router.put('/edit/:id', async (req, res) =>{
    // recebo o id do produto a ser atualizado, via url params
    const id = req.params.id;

    //recebo o objeto com os dados atualizados
    const editProduct = req.body;

/* usa se for em memoria dentro de um array
        // Encontro o índice do primeiro produto no array 'products' cujo 'id' é igual a 'id'
        // A função de retorno de chamada (callback) verifica essa condição para cada elemento do array
        // 'index' conterá o índice do produto desejado ou -1 se não encontrado
        const index = products.findIndex(product => product.id == id);


        // Atualiza o objeto no array 'products' no índice 'index' combinando suas propriedades
        // com as propriedades do objeto 'editProduct', utilizando o operador '...'
        // Isso garante que as propriedades existentes sejam preservadas e as novas sejam adicionadas ou sobrepostas.
        products[index] = {
            ...products[index], // Cria uma cópia do objeto original no índice 'index'
            ...editProduct // Inclui ou substitui propriedades com base no objeto 'editProduct'
        }
*/


const { rows } = await pool.query('UPDATE products SET name = $1, category = $2, price = $3 WHERE id = $4 RETURNING *', 
[editProduct.name, editProduct.category, editProduct.price, id])


res.json({
    message: 'Produto atualizado com sucesso',
    data : rows
})

})

// exporto as rotas para serem usadas no index.js
module.exports = router;