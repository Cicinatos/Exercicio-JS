const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log(`Parabéns, você foi Aprovado!`)
    } else {
        console.log('Que pena, você foi Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') //cuidado , neste caso ele vai tentar ler a string e vai entender como falso.