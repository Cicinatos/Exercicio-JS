{
    var sera = 'Será???' //crindo variável sera dentro de um blobo
    console.log(sera) //escreva a variável sera na tela
}
console.log(sera) //escreva a variável sera na tela
//uma variável dentro de um bloco (sem function, sem objeto...) ela será visível tanto dentro quanto fora do bloco

function teste() { //criando função teste
    var local = 123 //criando variável local
    console.log(local) //escreva a variável local
}
teste() //trazendo o parâmetro da função para fora do bloco
console.log(local) //mostre a variável local
//ua variável dentroo de uma função não pode ser vista fora do seu bloco.