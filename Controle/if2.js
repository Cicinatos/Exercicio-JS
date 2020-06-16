function teste1(num) {
    if(num > 7) //temos que lembrar de colocar a '{' sempre abrir e fechar o bloco
        console.log(num)
        console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { //cuidado com o ';' não usar com as estruturas  de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)