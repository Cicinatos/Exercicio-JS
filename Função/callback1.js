const  fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`) //indice + 1 porque começa com 0 e ele quer mostrar 1. nome do fabricante
}

fabricantes.forEach(imprimir) //forEach com o param 'imprimir' esta dentro de fabricantes 