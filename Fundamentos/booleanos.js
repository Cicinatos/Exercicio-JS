let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // a '!' é uma negação, um Não. Quando se coloca '!!' é como se tivesse Não Não (negando a negação, que voltaria ao valor original) desta forma eu forço o numero 1 a ser um valor booleano.

console.log('Os Verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ') //com um espaço ou qualquer caractere
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os Falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para Finalizar...')
console.log(!!('' || null || 0 || 'Oi')) // neste caso será retornado o valor verdadero ou o primeiro verdadeiro. (||) serve como 'ou'

let nome = ''
console.log(nome || 'Desconhecido') // se a variavel 'nome' estiver vazia, ele vai retornar 'Desconhecido', caso contrario vai retornar o nome que foi informado.