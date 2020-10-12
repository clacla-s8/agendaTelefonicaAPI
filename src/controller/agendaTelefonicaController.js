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
    const { id } = req.params;
    const { nome, telefone, email, outrosTelefone } = req.body;

    localizarContato = agenda.findIndex(contato => contato.id == id);

    if (localizarContato == -1) {
        res.status(404).send({ mensagem: `Contato não encontrado` })
    } else {
        let contatoAtualizado = {
            id: parseInt(id), // convertendo o id para int pois ele chega como string
            nome: nome,
            telefone: telefone,
            email: email,
            outrosTelefone: outrosTelefone
        }

        telefoneExiste = agenda.findIndex(contato => contato.telefone == telefone);


        if (telefoneExiste == -1) {
            agenda[localizarContato] = contatoAtualizado;
            res.status(200).send({ mensagem: `Contato atualizado` })
        } else {
            res.status(400).send({ mensagem: `O telefone ${telefone} já existe` });
        }
    };

}

const atualizarTelefone = (req, res) => {
    const { id } = req.params;
    const { telefone } = req.body;

    localizarContato = agenda.find(contato => contato.id == id);

    if (localizarContato == null) {
        res.status(404).send({ mensagem: `Contato não encontrado` })
    } else {

        telefoneExiste = agenda.findIndex(contato => contato.telefone == telefone);

        if (telefoneExiste == -1) {
            localizarContato.telefone = telefone;
            res.status(200).send({ mensagem: `Contato atualizado` })
        } else {
            res.status(400).send({ mensagem: `O telefone ${telefone} já existe` });
        }

    }
}

const deletarContato = (req, res) => {
    const { id } = req.params;

    localizarContato = agenda.findIndex(contato => contato.id == id);

    if (localizarContato == -1) {
        res.status(404).send({ mensagem: `Contato não encontrado` })
    } else {
        agenda.splice(localizarContato, 1)
        res.status(200).send({ mensagem: `Contado deletado com sucesso` })
    }

}



module.exports = {
    obterContatos,
    obterPorNome,
    obterPorTelefone,
    criarContato,
    atualizarContato,
    atualizarTelefone,
    deletarContato
}