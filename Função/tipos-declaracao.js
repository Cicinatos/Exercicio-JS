console.log(somaa(3, 4)) // No caso da function declaration, nós podemos chama-la antes da função pois nesta forma o interpretador vai verificar a função antes

//function declaration
function soma(x, y) {
    return x + y
}

//function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4)) //neste caso não podemos chamar o console antes da função, daria erro

//named function expression
const mult = function mult(x, y) { //não é muito usada
    return x * y
}
console.log(mult(3, 4)) //neste caso não podemos chamar o console antes da função, daria erro