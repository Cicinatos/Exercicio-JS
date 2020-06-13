console.log(Math.ceil(6.1)) // o Math é um objeto que esta inserido do JS e o .ceil é um parâmetro dentro de Math que arredonda o valor para cima.

const obj1 = {}
obj1.nome = 'Bola' // o obj1 está recebendo o parâmetro .nome e que este recebe 'Bola'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome //o this torna um parâmetro visível fora do bloco
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()