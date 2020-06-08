const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // pedindo para escrever se a constante peso1 é inteiro. se for a resposta será true.
console.log(Number.isInteger(peso2)) // pedindo para escrever se a constante peso2 é inteiro. se for a resposta será true.

const avaliacao1 = 9.871
const avaliacao2 = 6.817

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // toFixed(quantidade) define a quantidade de casas decimais que serão mostradas.
console.log(media.toString(2)) // toString(2) mostra o valor de media em binários.
console.log(typeof media) //motrar o tipo da constante media.
