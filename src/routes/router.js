const controller = require('../controller/agendaTelefonicaController');
const express = require('express');
const router = express.Router();

/* 
@router GET agenda
@desc retorna todos os contatos da agenda
@acess Public
@endpoint http://localhost:porta/agenda/agenda
*/
router.get('/agenda', controller.obterContatos);

/* 
@router GET contato por nome
@desc retorna o contato associado ao nome
@acess Public
@endpointhttp://localhost:porta/agenda/nome?nome=
*/
router.get('/nome', controller.obterPorNome);

/* 
@router GET contato por telefone
@desc retorna o contato associado ao telefone
@acess Public
@endpointhttp://localhost:porta/agenda/telefone?telefone=
*/
router.get('/telefone', controller.obterPorTelefone);

/* 
@router POST criar
@desc cria um novo contato e insere na agenda
@acess Public
@endpointhttp://localhost:porta/agenda/criar
*/
router.post('/criar', controller.criarContato);

/* 
@router PUT atualizar 
@desc atualiza todas as informações do contato
@acess Public
@endpointhttp://localhost:porta/agenda/:id
*/
router.put('/:id', controller.atualizarContato);

/* 
@router PATCH atualizar 
@desc atualiza o telefone do contato
@acess Public
@endpointhttp://localhost:porta/agenda/:id
*/
router.patch('/:id', controller.atualizarTelefone);

/* 
@router DELETE remover 
@desc remove o contato pelo id
@acess Public
@endpointhttp://localhost:porta/agenda/:id
*/
router.delete('/:id', controller.deletarContato);

module.exports = router;