function getInteiroAleatorioEntre(min, max) { //criando função com parametros minimo e maximo
    const valor = Math.random() * (max - min) + min //criando constante que recebe um numero aleatório com um intervalo
    return Math.floor(valor) //retorne o valor arredondado para baixo
}

let opcao = 0 // criando variável que recebe = 0

do { //usando 'do while' onde a expressao fica depois do bloco
    opcao = getInteiroAleatorioEntre(-1, 10) //variável recebe a função com parâmetro "min -1" e "max 10"
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1) //usando a condição de repetição while e dando o parâmetro de diferente de -1
//a repetição só vai parar quando atingir o valor de -1 (sem quantidade pré definida de testes ate chegar no valor)
console.log('Até a próxima!')