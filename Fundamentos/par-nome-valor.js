// par nome/valor
const saudacao = 'Opa!' //contexto léxico 1

function exec() {
    const saudacao = 'Faaala!' //contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const clientes = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereço: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao) //vai escrever o conteudo de saudacao no contexto léxico 1 
console.log(exec()) //vai escrever o conteudo de saudacao no contexto léxico 2
console.log(clientes) //vai escrever o conteudo de clientes
// a constante 'saudacao' é igual nos 2 primeiros casos, mas não houve confito tendo em vista que estão em contextos diferentes.