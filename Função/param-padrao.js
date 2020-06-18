// estrategia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1())
console.log(soma1(3))
console.log(soma1(1, 2, 3))
console.log(soma1(0, 0, 0))// ele vai entender como falso, e será adotado 1 como valor padrão

// estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // se a for diferente de undefined, pegue a, se nao use 1
    b = 1 in arguments ? b : 1 // dentro de arguments existe o indice 1, se sim pegue b, se não use 1 
    c = isNaN(c) ? 1 : c // se c for NaN, retorne 1, se não retorne c
    return a + b + c
}

console.log(soma2())
console.log(soma2(3))
console.log(soma2(1, 2, 3))
console.log(soma2(0, 0, 0))

// valor padrão
function soma3(a = 1, b = 2, c = 1) {
    return a + b + c
}
console.log(soma3())
console.log(soma3(3))
console.log(soma3(1, 2, 3))
console.log(soma3(0, 0, 0))