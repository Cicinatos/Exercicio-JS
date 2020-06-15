let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1 //o -- ou ++ vindo antes da variável, é como uma forma apressada de "fazer a conta"
console.log(num1)

console.log(++num1 === num2--)
console.log(++num1 === --num2)