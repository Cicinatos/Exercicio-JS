// 1) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão destes valores.

function resultado(n1, n2) {
    
    let soma = n1 + n2
    let menos = n1 - n2
    let mult = n1 * n2
    let divisao = n1 / n2

    console.log(` A soma é ${soma}, a subtração é ${menos}, a multiplicação é ${mult} e a divisão é ${divisao}.`)
}

resultado(3, 2)

// 2) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes. Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. (neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).

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

// 3) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

function potencia(base, expoente) {
    const resultado = Math.pow(base, expoente)
    console.log(`O resultado de ${base} elevado a ${expoente} é ${resultado}`)
}

potencia(4, 2)

// 4) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá iprimir o resultado e o resto da divisão destes dois valores.

function restoDiv(n1, n2) {
    let resultado = n1 % n2
    console.log(`O resto da divisão entre ${n1} e ${n2} é ${resultado}`)
}

restoDiv(3, 2)

// 5) Lidar com números em JavaScript pode dar muita dor de cabeça. Você ja viu o que acontece quando faz o seguinte comando no console: console.log(0.1 + 0.2); O resultado será 0.30000000000000004. Outra coisa importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para que receba um valor como 0.30000000000000004 e retorne R$ 0,30 (observe a virgula e o ponto).

function soma(n1, n2) {
    let resultado = n1 + n2
    console.log('R$ ' + resultado.toFixed(2).replace(".", ","))
}

soma(0.1, 0.2)

// 6) Elabore duas funções qu recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. a primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.

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

// 7) Uma das vantagens da programação é a automatização das tarefas que não gostamos de realizar. Dito isto, elabore uma função cujo objetivo e resolver a fórmula de Bhaskara. Para isso, sua função deve receber três parâmetros, "ax2", "bx", "c", de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um ara cada possível resultado, mesmo que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: "Delta é negativo".

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

//8) Pedro joga N jogos de basquete por temporada. Para saber como ele está progredindo, ele mantem o registro de todas as pontuações feitas por jogo. Após cada jogo ele anota o novo valor e cconfere se o mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0". Escreva uma função que ao recebê-la ir´comparar os valores um a um e irá retornar um vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior jogo (número do pior jogo). OBS.: O primeiro jogo não conta como novo recorde do melhor. Exemplo: String "10 20 20 8 25 3 0 30 1" Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação aconteceu no sétimo jogo.)

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

//9) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas possuem a seguinte regra de arredondamento: Se a diferênça entre a nota e o próximo multiplo de 5 for menor que 3, arredondar a nota para esse próximo múltiplo de 5. se a nota for abaixo de 38, não será feito nenhum  arredondamento pois esta nota resulta em reprovaçãodo aluno. Por exemplo, a nota 84 será arredondada para 85, mas 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 e o aluno será aprovado.

function classificaAluno(nota) {
    let notaCorrigida = arredondar(nota)
    if(notaCorrigida >= 40) {
        console.log(`Aprovado com nota ${notaCorrigida}`)
    } else {
        console.log(`Reprovado com nota ${notaCorrigida}`)
    }
}

function arredondar(nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

classificaAluno(100)
classificaAluno(30)
classificaAluno(38)
classificaAluno(88)
classificaAluno(61)

//10) Crie uma função que verifica se um número inteiro passado como parâmetro é divisivel por 3 e retorne true ou false.

function inteiro(n1) {
    if(n1 % 3 == 0) {
        return true
    } else {
        return false
    }
}

console.log(inteiro(6)) 
console.log(inteiro(5))

//11) As regras para cálculo dos anos bissextos são as seguintes: De 4 em 4 anos é ano bissexto; De 100 em 100 anos não é ano bissexto; De 400 em 400 anos é ano bissexto; prevalecem as últimas regras sobre as primeiras. Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a menssagem e retornando true ou false.

function bissextos(n1) {
    if(n1 % 4 == 0) {
        return `O ano de ${n1} É BISSEXTO.`
    } else {
        return `O ano de ${n1} NÃO É BISSEXTO`
    }
}

console.log(bissextos(2016))
console.log(bissextos(2018))

//12) Faça um algoritimo que calcule o fatorial de um número.

function fatorial(numero) {
    if(numero == 0) {
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}
console.log(fatorial(5))

//13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inváldodado o número referênte ao dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

function diaUtil(dia) {
    switch(dia) {
        case 1:
        case 7:
        case 8:
        case 14:
        case 15:
        case 21:
        case 22:
        case 28:
        case 29:
            console.log(`O dia ${dia} não é Útil - Final de Semana!`)
            break
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 23:
        case 24:
        case 25:
        case 26:
        case 27:
        case 30:
        case 31:
            console.log(`O dia ${dia} é Útil.`)
            break
            default:
                console.log('Dia Inválido!')
    }
}

diaUtil(29)

//14) Crie uma estrutura condicional Switch que receba uma string com o nome de uma fruta e que possua três casos: Caso maça, retorne no console: "Não vendemos esta fruta aqui". Caso kiwi, retorne: "Estamos com escassez de kiwis". Caso melancia, retorne: "Aqui está, são 3 reais o quilo". Teste com estas três opções. Crie também um default, que retornará uma mensagem de erro no console. 

function frutas(fruta) {
    switch(fruta) {
        case 'Maça':
            console.log('Não vendemos esta fruta aqui.')
            break
        case 'Kiwi':
            console.log('Estamos com escassez de kiwis')
            break
        case 'Melancia':
            console.log('Aqui está, são 3 reais o quilo')
            break
            default:
                console.log('[ERRO] Fruta Inválida!')
    }
}

frutas('Melancia')

//15) Um homem decidiu  ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch e a revenda possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o comprador queira o hatch, retorne: "Compra efetuada com sucesso". Nas outras opções, retorne: "Tem certeza que não prefere este modelo?". Caso seja especificado um modelo que não está disponível, retorne no console: "Não trabalhamos com este tipo de automóvel aqui".

function revenda(veiculo) {
    switch(veiculo) {
        case 'Hatch':
            console.log('Compra efetuada com sucesso!')
            break
        case 'Sedan':
        case 'Motocicleta':
        case 'Caminhonete':
            console.log('Tem certeza que não prefere este modelo?')
            break
            default:
                console.log('Não trabalhamos com este tipo de automóvel aqui!')
    }
}

revenda('Hatch')

//16) Utilizando a estrutura Switch faça um programa que simule uma calculadora básica. O programa recebe como parâmetros dois valores numéricos e uma string referente à operção e a realize com os valores numéricos na ordem que foram inseridos. por exemplo: calculadora (2, '+', 3). A função efetuará a soma de 2 e 3. Dica: Os sinais das operações são: '+', '-', '*', e '/'. Crie um caso default para operações inválidas.

function calculadora(n1, s, n2) {
    switch(s) {
        case s = '+':
            let res1 = n1 + n2
            console.log(`A Soma de ${n1} + ${n2} é = ${res1}`)
            break
        case s = '-':
            let res2 = n1 - n2
            console.log(`A Subitração de ${n1} - ${n2} é = ${res2}`)
            break
        case s = 'x':
            let res3 = n1 * n2
            console.log(`A Multiplicação de ${n1} x ${n2} é = ${res3}`)
            break
        case s = '/':
            let res4 = n1 / n2
            console.log(`A Divisão de ${n1} / ${n2} é = ${res4}`)
            break
            default:
                console.log('Operação Inválida!')

    }
}
calculadora(3, '+', 3)

/*17) Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:

Plano | Aumento
A     | 10%
B     | 15%
C     | 20%

Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário. Use a Estrutura Switch e faça um caso default que indique que o plano é inválido*/

function aumento(plano) {
    let salario = 1000.00
   
    switch(plano) {
        case plano = 'A':
                        let a = salario * (10 / 100) + salario
            console.log(`No Plano A, o seu sálario passa de R$${salario.toFixed(2).replace(".", ",")} para R$${a.toFixed(2).replace(".", ",")}.`)
            break
        case plano = 'B':
            let b = salario * (15 / 100) + salario
            console.log(`No Plano B, o seu sálario passa de R$${salario.toFixed(2).replace(".", ",")} para R$${b.toFixed(2).replace(".", ",")}.`)
            break
        case plano = 'C':
            let c = salario * (20 / 100) + salario
            console.log(`No Plano C, o seu sálario passa de R$${salario.toFixed(2).replace(".", ",")} para R$${c.toFixed(2).replace(".", ",")}.`)
            break
            default:
                console.log('Plano Inválido!')
    }
}

aumento('A')

//18) Faça um programa que leia um númeoro emtre 0 e 10 e escreva este número por extenso. Use o comando switch. Crie um case default que escreva 'Número fora do intervalo.'

function intervalo(numero) {
    switch(numero) {
        case numero = 0:
            console.log('Zero')
            break
        case numero = 1:
            console.log('Um')
            break
        case numero = 2:
            console.log('Dois')
            break
        case numero = 3:
            console.log('Três')
            break
        case numero = 4:
            console.log('Quatro')
            break
        case numero = 5:
            console.log('Cinco')
            break
        case numero = 6:
            console.log('Seis')
            break
        case numero = 7:
            console.log('Sete')
            break
        case numero = 8:
            console.log('Oito')
            break
        case numero = 9:
            console.log('Nove')
            break
        case numero = 10:
            console.log('Dez')
            break
            default:
                console.log('Número Inválido!')
    }
}

intervalo(11)

/*19) o cardáio de uma lanchonete é o seguinte:

Código | Descrição do Produto | Preço
100    | Cachorro Quente      | R$ 3,00
200    | Hambúrguer Simples   | R$ 4,00
300    | Cheeseburguer        | R$ 5,50
400    | Bauru                | R$ 7,50
500    | Refrigerante         | R$ 3,50
600    | Suco                 | R$ 2,80

Implemente uma função que receba como parâmetro o código do item pedido, a quantidade e calcule o valor a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o comando switch. Crie um caso default para produto não existente*/

function pedido(codigo, quant) {
    switch(codigo) {
        case codigo = 100:
            let valor1 = 3.00
            let total1 = quant * valor1
            console.log(`${quant}x - Cachorro Quente - Total R$ ${total1.toFixed(2).replace(".", ",")}`)
            break
        case codigo = 200:
            let valor2 = 4.00
            let total2 = quant * valor2
            console.log(`${quant}x - Hambúrguer Simples - Total R$ ${total2.toFixed(2).replace(".", ",")}`)
            break
        case codigo = 300:
            let valor3 = 5.50
            let total3 = quant * valor3
            console.log(`${quant}x - Cheeseburguer - Total R$ ${total3.toFixed(2).replace(".", ",")}`)
            break
        case codigo = 400:
            let valor4 = 7.50
            let total4 = quant * valor4
            console.log(`${quant}x - Bauru - Total R$ ${total4.toFixed(2).replace(".", ",")}`)
            break
        case codigo = 500:
            let valor5 = 3.50
            let total5 = quant * valor5
            console.log(`${quant}x - Refrigerante - Total R$ ${total5.toFixed(2).replace(".", ",")}`)
            break
        case codigo = 600:
            let valor6 = 2.80
            let total6 = quant * valor6
            console.log(`${quant}x - Suco - Total R$ ${total6.toFixed(2).replace(".", ",")}`)
            break
            default:
                console.log('Código Inválido!')
    }
}

pedido(600, 4)

//20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10, R$ 5 e R$ 1. Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$ 18, o programa deve informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.

function sacarDinheiro(valorSaque) {
    let contador100 = 0
    let contador50 = 0
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0
    let valorNota = calcularValorNota(valorSaque)
    while (valorSaque >= valorNota) {
        switch (valorNota) {
            case 100:
                valorSaque -= 100
                contador100++
                break
            case 50:
                valorSaque -= 50
                contador50++
                break
            case 10:
                valorSaque -= 10
                contador10++
                break
            case 5:
                valorSaque -= 5
                contador5++
                break
            case 1:
                contador1++
                valorSaque -= 1
                break
        }

        valorNota = calcularValorNota(valorSaque)

    }
    return elaborarResultado(contador100, contador50, contador10, contador5, contador1)
}

function calcularValorNota(valorSaque) {
    if (valorSaque >= 100) {
        return 100
    } else if (valorSaque >= 50) {
        return 50
    } else if (valorSaque >= 10) {
        return 10
    } else if (valorSaque >= 5) {
        return 5
    } else if (valorSaque >= 1) {
        return 1
    }
}

function elaborarResultado(contador100, contador50, contador10, contador5, contador1) {
    let resultado = ''

    if (contador100 > 0) {
        resultado += `${contador100} nota(s) de R$ 100. `
    }

    if (contador50 > 0) {
        resultado += `${contador50} nota(s) de R$ 50. `
    }

    if (contador10 > 0) {
        resultado += `${contador10} nota(s) de R$ 10. `
    }

    if (contador5 > 0) {
        resultado += `${contador5} nota(s) de R$ 5. `
    }

    if (contador1 > 0) {
        resultado += `${contador1} nota(s) de R$ 1. `
    }

    return resultado
}

console.log(sacarDinheiro(168));
