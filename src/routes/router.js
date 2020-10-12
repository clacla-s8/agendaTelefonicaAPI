const controller = require('../controller/agendaTelefonicaController');
const express = require('express');
const router = express.Router();

router.get('/agenda', controller.obterContatos);

router.get('/nome', controller.obterPorNome);

router.get('/telefone', controller.obterPorTelefone);

router.post('/criar', controller.criarContato);

module.exports = router;