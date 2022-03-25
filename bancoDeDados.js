/*function getpessoas() {
    return {
        id: 1,
        nome:"maria",
        cpf:897895874,
        dataNascimento:14/03/2000,
        cep:58046725,
        endereco:"rua abc",
        telefone:988546523
    },
    {
        id: 2,
        nome:"joao",
        cpf:897895174,
        dataNascimento:14/03/2080,
        cep:58046755,
        endereco:"rua gume",
        telefone:98858452 
    },
    {
        id: 3,
        nome:"felippe",
        cpf:89602895174,
        dataNascimento:05/11/2080,
        cep:55606755,
        endereco:"rua cabral",
        telefone:985236458
    }
}
*/
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

















