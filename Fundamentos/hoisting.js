console.log('a =', a)
var a = 2 // a variavel a , mesmo sendo declarada depois, foi mostrada por conta do hoisting (içamento) levar ao topo.
console.log('a =', a)

console.log('b =', b)
let b = 2 // a variavel b, por 'let' não tem esse efeito de hoinsting.
console.log('b =', b)