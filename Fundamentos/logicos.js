function compras(trabalho1, trabalho2) { //criando função compras com dois parâmetros
    const comprarSorvete = trabalho1 || trabalho2 //criando constante comprarSorvete que recebe trabalho1 'ou' trabalho2
    const comprarTv50 = trabalho1 && trabalho2 //criando constante comprarTv50 que recebe trabalho1 'e' trabalho2
    const compratTv32 = trabalho1 != trabalho2 //criando constante comprarTv32 que recebe trabalho1 'diferente' de trabalho2 - chama 'ou exclusivo'
    const manterSaudavel = !comprarSorvete //criando constante manterSaudavel que recebe 'não'comprarSorvete

    //criando objetos abaixo
    return { comprarSorvete, comprarTv50, compratTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))