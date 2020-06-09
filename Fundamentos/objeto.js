const prod1 = {} //criando um objeto(um conjunto de chave e valor) vazio
prod1.nome = 'Cecular Ultra Mega' //adicinando atributos de forma dinâmica
prod1.preco = 4998.90
prod1['Desconto legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

const prod2 = { //criando objeto e adicionando os atributos da forma padrao - notação literal de objeto
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2)