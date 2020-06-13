console.log(typeof Object) //é uma função
console.log(typeof new Object) //é um objeto

const Cliente = function() {}
console.log(typeof Cliente) //é uma função
console.log(typeof new Cliente) //é um objeto

class Produto {}
console.log(typeof Produto) //é uma função
console.log(typeof new Produto()) //pode ser com ou sem os () //é um objeto 
