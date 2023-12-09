const { Router } = require('express');
const { exercicioAcademia } = require('../controllers/academia');

const router = Router();

router.get('/academia', exercicioAcademia);

module.exports = router;
