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
    let jurosS = (capitalInicial * taxaJuros) * tempoAplicacao + capitalInicial
    console.log(`O montante do Juros Simples é R$ ${jurosS}.`)
}

function montante2(capitalInicial, taxaJuros, tempoAplicacao) {
    let jurosC = capitalInicial * (1 + taxaJuros) ** tempoAplicacao
    
    console.log(`O montante do Juros Composto é R$ ${jurosC}.`)
}

montante1(100, 10/100, 2)
montante2(100, 10/100, 2)

// 7)
function equacao(a, b, c) {
    let resultados = []
    let delta = (b ** 2) - (4 * a * c)
    let x1 = (- b + Math.sqrt(delta)) / 2 * a
    let x2 = (- b - Math.sqrt(delta)) / 2 * a
        
    if (delta < 0) {
        console.log('Delta é Negativo')
    } else {
        resultados.push(x1)
        resultados.push(x2)
        console.log(`O valor de X' é ${x1.toFixed(2)} e o valor de X" é ${x2.toFixed(2)}.`)
    }
     
}

equacao(1, 3, 2)
equacao(3, 1, 2)

//8)
let stringPontuacao = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

function avaliarPontuacao(stringPontuacao) {
    let pontuacoes = stringPontuacao.split(", ")
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorpontuacao = pontuacoes[0]

    for(let i = 1; i < pontuacoes.length; i++) {
        if (pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
        } else if (pontuacoes[i] < menorpontuacao) {
            menorpontuacao = pontuacoes[i]
            piorJogo = i + 1
        }
    }

    return [qtdQuebraDeRecords, piorJogo]

}

console.log(avaliarPontuacao(stringPontuacao))