const agenda = require('../model/agendaTelefonica');
const helper = require('../helpers/helper');

const obterContatos = (req, res) => {
    res.status(200).send(agenda);
}

const obterPorNome = (req, res) => {
    const { nome } = req.query;
    const localizarNome = agenda.find(contato => contato.nome == nome);
    res.status(200).send(localizarNome)
}

const obterPorTelefone = (req, res) => {
    const { telefone } = req.query;
    const localizarTelefone = agenda.find(contato => contato.telefone == telefone);
    res.status(200).send(localizarTelefone);
}

const criarContato = (req, res) => {
    const { nome, telefone, email, outrosTelefone } = req.body;

    let novoContato = {
        id: helper.incrementarId(agenda),
        nome: nome,
        telefone: telefone,
        email: email,
        outrosTelefone: outrosTelefone
    }

    telefoneExiste = agenda.findIndex(contato => contato.telefone == telefone); // se retornar -1 é pq não existe

    if (telefoneExiste == -1) {
        agenda.push(novoContato);
        res.status(201).send(novoContato);
    } else {
        res.status(400).send({ mensagem: `O telefone ${telefone} já existe` });
    }
}

const atualizarContato = (req, res) => {

}


module.exports = {
    obterContatos,
    obterPorNome,
    obterPorTelefone,
    criarContato,
    atualizarContato
}