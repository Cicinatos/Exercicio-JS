//o DESTRUCTURING serve para pegar informações de um Objeto{} por exemplo
const pessoa = { 
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa // colete a informação de nome e idade dentro de pessoa
console.log(nome, idade) //escreva nome e idade

const { nome: n, idade: i } = pessoa //podemos mudar o nome da variavel se necessário, conforme este exemplo
console.log(n, i)

const { endereco: { logradouro, numero } } = pessoa //colete a informação dentro de endereço, logradouro e numero e estes estão dentro de pessoa
console.log(logradouro, numero)