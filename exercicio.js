//quero que faça uma api do zero que tenha o seguinte
//3.1 cadastro de cliente que tenha os seguintes dados, id, nome, CPF, data de nascimento, cep, endereço, número e telefone
const porta = 4000

const express = require('express')
const appz = express()
const bodyParser = require('body-parser')
const bancodeDados = require('./bancoDeDados')

appz.use(bodyParser.urlencoded({ extended: true }))


appz.get('/pessoas', (req, res, next) => {
     res.send(bancodeDados.getPessoas())
})

appz.get('/pessoas/:id', (req, res, next) => {
    res.send(bancodeDados.getPessoas(req.params.id))
})

appz.post('/pessoas', (req, res, next) => {
    const pessoa = bancodeDados.salvarpessoa({
        nome: req.body.nome,
        CPF: req.body.CPF,
        cep: req.body.cep,
        dataNascimento: req.body.dataNascimento,
        endereco: req.body.endereco,
        telefone: req.body.telefone
    })
    res.send(pessoa)
})


appz.put('/pessoas/:id', (req, res, next) => {
    const pessoa = bancodeDados.salvarpessoa({
        id: req.params.id,
        nome: req.body.nome,
        CPF: req.body.CPF,
        cep: req.body.cep,
        dataNascimento: req.body.dataNascimento,
        endereco: req.body.endereco,
        telefone: req.body.telefone
    })
    res.send(pessoa)
})

appz.delete('/pessoas/:id', (req, res, next) => {
    const pessoa = bancodeDados.excluirPessoas(req.params.id)
    res.send(pessoa)
})


appz.listen(porta, () => {
    console.log(`servidor está funcionando na porta ${porta}...`)
})






















