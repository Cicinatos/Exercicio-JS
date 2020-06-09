let valor //não inicializada
console.log(valor) //foi declarada mas não foi inicializada
//console.log(valor2) //variavel não declarada [ERRO]

valor = null //não aponta para nenhum endereço - ausência de valor
console.log(valor)
//console.log(valor.toString()) //[ERRO] você não pode ler uma propriedade de null

const produto = {}
console.log(produto.preco) //preço não definido, vai dar undefined
console.log(produto)

produto.preço = 3.50 //preço adicionado de forma dinâmica, ja que o produto ´um objeto
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco) //transformando em valor boleano (verdadeiro ou falso). 
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco) //testando como valor boleano
console.log(produto)