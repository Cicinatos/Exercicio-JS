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

//21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado  considerando que todos pagam R$ 100,00 mais um adicional conforme a seguinte tabela: 1) crianças com menos de 10 anos pagam R$ 80,00. 2) conveniados com idade entre 10 e 30 anos pagam R$ 50,00. 3) conveniados com idade acima de 30 até 60 anos pagam R$ 95,00. 4) conveniados acima de 60 anos pagam R$ 130,00

function plano(idade) {
    let valorInicial = 100.00
    if (idade > 0 && idade < 10) {
        let valorAte9 = valorInicial + 80.00
        return `Com a idade de ${idade} anos, o valor do Plano de Saúde fica por R$ ${valorAte9.toFixed(2).replace(".", ",")}.`
    } else if (idade > 9 && idade < 31) {
        let valorAte30 = valorInicial + 50.00
        return `Com a idade de ${idade} anos, o valor do Plano de Saúde fica por R$ ${valorAte30.toFixed(2).replace(".", ",")}.`
    } else if (idade > 30 && idade < 61) {
        let valorAte60 = valorInicial + 95.00
        return `Com a idade de ${idade} anos, o valor do Plano de Saúde fica por R$ ${valorAte60.toFixed(2).replace(".", ",")}.`
    } else if (idade > 60) {
        let valorMais60 = valorInicial + 130.00
        return `Com a idade de ${idade} anos, o valor do Plano de Saúde fica por R$ ${valorMais60.toFixed(2).replace(".", ",")}.`
    } else {
        return 'Idade Inválida!'
    }
}

console.log(plano(9))

//22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como parâmetro um inteiro que representa o mês (1 - Janeiro, 2 - Fevereiro...) que foi pago e o valor da anuidade. A anuidade deve ser paga no mês de Janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

function anuidade(n1) {
    let valorAnuidade = 100.00
    let taxa = (5 / 100)
    let atraso = n1 - 1
    let valorJuros = valorAnuidade * (1 + taxa) ** atraso
    if (n1 > 0 && n1 < 13) {
        return `O valor é R$ ${valorJuros.toFixed(2).replace(".", ",")}.`
    }
}

console.log(anuidade(3))

//23) Escreva um algoritimo que leia o código de um aluno e suas três notas. Calcule a média ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e "REPROVADO" se a média for menor que 5. repita a operação até o código lido seja negativo.

function notaFinal (codAluno, nota1, nota2, nota3) {
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b) => a < b ? 1 : -1)

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

notaFinal(123, 2.8, 6, 3.5)

//24) Crie um programa que imprima 11 vezes a frase "Hello World!" utilizando uma estrutura de repetição while.

function helloWorld () {
    let i = 0
    while (i < 11) {
        console.log("Hello World!")
        i++
    }
}

helloWorld()

//25) Escrever um programa ara exibir os números de 1 a 50 na tela.

function contador () {
    for (let i = 1; i <= 50; i++) {
        console.log(i)
    }
}

contador()

//26) Fazer um programa para encontrar todos os pares entre 1 e 100

function acharPares () {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}

acharPares()

//27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas crianças e calcule se existe uma criança menor, caso exista, se a criança menor ultrapassará a maior e em quantos anos isso acontecerá. Utilize centímetro para as unidades de medida.

function calcularCrescimento(altura1, taxa1, altura2, taxa2) {
    if (altura1 == altura2) {
        if (taxa1 > taxa2) {
            return 'A criança 1 ultrapassará a criança 2 em 1 ano.'
        } else if (taxa1 < taxa2) {
            return 'A criança 2 ultrapassará a criança 1 em 1 ano.'
        } else {
            return 'As crianças tem igual altura de crescimento.'
        }
    } else {
        if (altura1 > altura2) {
            if (taxa1 >= taxa2) {
                return 'A criança menor não ultrapassará a criança maior'
            } else {
                return calcularTempo(altura2, taxa2, altura1, taxa1)
            }
        } else {
            if (taxa2 >= taxa1) {
                return 'A criança menor não ultrapassará a criança maior'
            } else {
                return calcularTempo(altura1, taxa1, altura2, taxa2)
            }
        }
    }
}

function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior) {
    let qtdAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }
    console.log(qtdAnos)
    return qtdAnos
}

console.log(calcularCrescimento(150, 2, 130, 4))

//28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são impares

function inteiros(numeros) {
    let qtdPares = 0
    let qtdImpar = 0
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 0) {
            qtdPares++
        } else {
            qtdImpar++
        }
    }
    return `${qtdPares} números Pares e ${qtdImpar} números Inpares`
}

numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log(inteiros(numeros))

//29)  Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números deste vetor estão no intervalo [10, 20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos deles estão fora do intervalo, escrevendo estas informações.

function intervalo(numeros) {
    let qtdNumerosIntervalo = 0
    let qtdNumerosForaIntervalo = 0
    numeros = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] >= 10 && numeros[i] <= 20) {
            qtdNumerosIntervalo++
        } else {
            numeros[i] < 10 && numeros[i] > 20
            qtdNumerosForaIntervalo++
        }
    }

    console.log(`${qtdNumerosIntervalo} números dentro do intervalo e ${qtdNumerosForaIntervalo} números fora do intervalo.`)
}

intervalo(numeros)

//30) escreva um algoritimo que percorre um vetor de inteiros e defina o maior e o menor valor dentro do vetor

function algoritimo(numeros) {
        numeros = [10, 20, 30, 40, 50]
        let maior
        let menor
        for (i = 0; i < numeros.length; i++) {
            if (maior === undefined && menor === undefined) {
                maior = numeros[i]
                menor = numeros[i]
            } else {
                if (numeros[i] > maior) {
                    maior = numeros[i]
                }
                if (numeros[i] < menor) {
                    menor = numeros[i]
                }
            }
        }

        console.log(`O maior número é ${maior} e o menor número é ${menor}.`)
}

algoritimo(numeros)

//31) Escrever um algaritimo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor e imprime a quantidade no console.

function inteiros(numeros) {
    numeros = [-1, -2, 3, 5, -3, 6, 8, -9, 10]
    let negativos = 0
    for (i = 0; i < numeros.length; i++) {
        if ( numeros[i] < 0) {
            negativos++
        }
    }

    console.log(`Existem ${negativos} números negativos!`)
}

inteiros(numeros)

//32) Construir um algoritimo que calcule média aritimética dos valores de um vetor de inteiros.

function calcularMedia(vetor) {

let soma = 0
for (i = 0; i < vetor.length; i++) {
    soma = soma + vetor[i]
}
let media = soma / vetor.length
console.log(`A sua média é ${media}.`)
}
vetor = [1, 2, 3, 4, 5]
calcularMedia(vetor)

//33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais. Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.

let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['Cicinatos', 'Patricia', 'Dinarte', 'Tarciana']
let vetorDouble = [1.1, 2.2, 3.3, 4.4]

function concatenar() {
    resultado = []
    for (i = 0; i < arguments.length; i++) {
        resultado = resultado.concat(arguments[i])
    }
    return resultado
}
console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))

//34) Construa uma função que receba duas Strings de tamanhos variados e que retornará True ou Falsecaso todos os caracteres (independentemente de ser maiúsculo ou minusculo) estejam contidos em ambas palavras.

function verificarString(string1, string2) {
    let estaContido = true
    for (i = 0; i < string1.length; i++) {
        let caractereString1 = string1.charAt(i).toLowerCase()
        for (j = 0; j < string2.length; j++) {
            let caractereString2 = string2.charAt(j).toLowerCase()
            if (caractereString1 == caractereString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if (!estaContido) {
            return estaContido
        }
    }
    return estaContido
}

console.log(verificarString('abc', 'cba'))

//35) Crie dois vetores chamados vetorPilha e vetorAdiciona, o vetorPilha conterá cinco elementos inteiros [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao final das  operações imprima os vetores no console.

let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

function adicionaVetor(vetorInicial, vetorAdiciona) {
    for(i = 0; i < vetorAdiciona.length; i++) {
        vetorInicial.push(vetorAdiciona[i])
    }
    console.log(`Vetor adicionado: ${vetorAdiciona}`)
    console.log(`Vetor resultado: ${vetorInicial}`)
}
adicionaVetor(vetorPilha, vetorAdiciona)

//36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número inteiro. Faça com que a primeira funão retorne outro vetor que será resultado da multilicação de cada elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se o valor do elemento for maior que 5.


let vetorN = [1, 2, 3, 4, 5]

function multiplicaVetor(vetorN, multiplicador){
    let vetorResultado = []
    vetorN.forEach(elemento => {
        vetorResultado.push(elemento * multiplicador) 
    });

    return vetorResultado
}

console.log(multiplicaVetor(vetorN, 3))