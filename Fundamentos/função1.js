// Função sem retorno
function imprimirSoma(a, b) { //criando função e atribuindo as variaveis a e b 
    console.log(a + b) //mostrar na tela a + b
}
imprimirSoma(2, 3) //atribuindo valores a função

// Função com retorno
function soma(a, b = 1){ //criando função e atribuindo um valor a umas daas variáveis caso esse valor nao seja informado
    return a + b //retorne a + b
}
console.log(soma(2, 3)) //mostre (função soma (valores das variáveis))
console.log(soma(2)) //idem o de cima, porem so foi informado o valor de a (ja que b caso não seja atribuido o valor, vale 1)