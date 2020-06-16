const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) { //arredonda a nota para baixo
        case 10:
        case 9:
            console.log('Quadro de Honra!')
            break //não pode esquecer de colocar, caso contrário, será lido todo o código mesmo que o valor já tenha sido encontrado
        case 8: case 7: //pode ser usado assim ou um abaixo do outro
            console.log('Aprovado.')
            break
        case 6: case 5: case 4:
            console.log('Recuperação.')
            break
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('Reprovado.')
            break
        default:
            console.log('Nota Inválida!')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)