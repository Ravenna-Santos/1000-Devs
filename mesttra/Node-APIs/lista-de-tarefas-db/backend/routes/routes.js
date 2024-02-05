const express = require ('express');

//importo a classe Sequelize
const { Sequelize, DataTypes } = require('sequelize');
const config = require('../sequelizeConfig');
const crypto = require('crypto')

//inicializo a classe do sequelize;
const sequelize = new Sequelize(config.development);

const router = express.Router();

//cria estrutura de dados
const Task = sequelize.define('Task', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    time: {
        type: DataTypes.STRING,
        allowNull: false
    }

})

router.get('/', async (req, res) =>{
    //quando a tabela ainda não existe no BD ele cria
    //await sequelize.sync({force: true});
    const tasks = await Task.findAll();
    res.send(tasks);
})

router.get('/:id', async (req, res) =>{
    const id = req.params.id;
    const task = await Task.findByPk(id);
    res.send(task);
})

router.post('/add', async (req,res) => {
    const task = req.body;
    const newTask = {
      id: crypto.randomUUID(),
      ...task
    }
    const response = await Task.create(newTask);
    res.send(response);
})

router.put('/update/:id', async (req, res) =>{
    const id = req.params.id;
    const updatedTask = req.body;

    const results = await Task.update(updatedTask, {
    where: { id },
    returning: true
    })

    res.send(results);
})

router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    const response = await Task.destroy({ where: { id } });
    res.status(200).json({data: response});
})

module.exports = router;