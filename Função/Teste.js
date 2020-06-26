// 1)
function resultado(n1, n2) {
    
    let soma = n1 + n2
    let menos = n1 - n2
    let mult = n1 * n2
    let divisao = n1 / n2

    console.log(` A soma é ${soma}, a subtração é ${menos}, a multiplicação é ${mult} e a divisão é ${divisao}.`)
}

resultado(3, 2)

// 2)
function triangulo(n1, n2, n3) {
    if (n1 == n2 && n1 == n3 && n2 == n3) {
        console.log('Este triângulo é Equilátero.')
    } else if (n1 != n2 && n1 != n3 && n2 != n3) {
        console.log('Este triângulo é Escaleno.')
    } else {
        console.log('Este triângulo é Isóceles')
    }
}

triangulo(1, 1, 3)

// 3)
function potencia(base, expoente) {
    const resultado = Math.pow(base, expoente)
    console.log(`O resultado de ${base} elevado a ${expoente} é ${resultado}`)
}

potencia(4, 2)

// 4)
function restoDiv(n1, n2) {
    let resultado = n1 % n2
    console.log(`O resto da divisão entre ${n1} e ${n2} é ${resultado}`)
}

restoDiv(3, 2)

// 5)
function soma(n1, n2) {
    let resultado = n1 + n2
    console.log('R$ ' + resultado.toFixed(2).replace(".", ","))
}

soma(0.1, 0.2)

// 6)
function montante1(capitalInicial, taxaJuros, tempoAplicacao) {
    let jurosS = (capitalInicial * taxaJuros / 100) * tempoAplicacao + capitalInicial
    console.log(`O montante do Juros Simples é R$ ${jurosS}.`)
}

function montante2(capitalInicial, taxaJuros, tempoAplicacao) {
    let valorjurosC = capitalInicial * taxaJuros
    let jurosC = valorjurosC * (taxaJuros / 100) + valorjurosC 

    console.log(`O montante do Juros Composto é R$ ${jurosC}.`)
}

montante1(4000, 4, 10)
montante2(150, 1, 6)
