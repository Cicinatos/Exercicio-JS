var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)
//como a variável dentro do bloco (sem função, objeto...) pode ser vista tanto dentro quanto fora, o valor da variável numero vai ser substituida por 2 que foi a ultima alteração.