let dobro = function (a) {
    return 2 * a
}

//reduzindo o codigo acima
dobro = (a) => {
    return 2 * a
}

//reduzindo ainda mais
dobro = a => 2 * a //como dobro só tem um param ele pode ficar sem parenteses e a função arrow sem {} ja tem o return implicito
console.log(dobro(5))

let ola = function () {
    return 'Ola!'
}

//reduzindo...
ola = () => 'Ola!'
console.log(ola())