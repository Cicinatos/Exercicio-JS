const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) // o this neste caso faz o papel da const pessoa.
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //deu um conflito, resolvendo ele abaixo

const falardepessoa = pessoa.falar.bind(pessoa)
falardepessoa()
