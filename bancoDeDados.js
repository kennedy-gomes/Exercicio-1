 const cadastro = {
    _id:1,
    get id(){ return this._id++ }
}

const pessoas = {}

function salvarpessoa(pessoa){
    if(!pessoa.id) pessoa.id = cadastro.id
    pessoas[pessoa.id] = pessoa
    return pessoa
}

function getpessoas(id) {
    return pessoa[id] || {}
}

function getPessoas(){
    return Object.values(pessoas)
}

function excluirPessoas(id) {
    const pessoa = pessoas[id]
    delete pessoas[id]
    return pessoa
}

module.exports ={getpessoas, salvarpessoa, getPessoas, excluirPessoas}

















