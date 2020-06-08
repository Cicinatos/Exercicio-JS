const escola = 'Cod3r'

console.log(escola.charAt(4)) // mostrar o caracter na posição 4.
console.log(escola.charCodeAt(3)) // codigo relacionado a tabela unicode.

console.log(escola.substring(1)) // retira a quantidade de caracter dentro da string.
console.log(escola.substring(0, 3)) // mostra os caracteres nas ordens do intervalo.

console.log('Escola '.concat(escola).concat('!')) //concatenando string ('Escola') com a constante (escola = 'Cod3r') com a string ('!').
console.log('Escola ' + escola + '!') // mesmo resultado de concatenar mostrado acima.

console.log(escola.replace(3, 'e')) // substitue o caracter na posição 3 (lembrando que começa  contar do 0) pela letra 'e'.

console.log('Ana,Maria,Pedro'.split(',')) // transformou em arrey ou vetor, que é uma variável que pode armazenar vários resultados.