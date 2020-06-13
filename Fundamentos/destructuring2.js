//o DESTRUCTURING serve para pegar informações de um Arrey[] por exemplo
const [a] = [10]
console.log(a)

const [n1, n2, n3, n4, n5 = 0] = [10, 7, 9, 8] //criado constantes n1...n5 e n5=0 caso o valor nao seja atribuido. recebe os valores 10, 7, 9, 8 respectivamete
console.log(n1, n3, n5) //mostre n1, n3, n5

const[, [, nota]] = [[, 8, 7], [9, 6, 8]] //temos um Arrey que nao tem valor na primeira posição, na segunda posiçao temos outro arrei que não tem valor na primeira posição e a segunda posição tem nota. recebe um Arrey que na primeira posição tem um Arrey que não tem valor na primeira posição, a segunda é 8 e a terceira é 7. na segunda posição do Arrey principal temos na primeira posição 9, na segunda 6, na terceira 8.
console.log(nota) //vai mostrar o valor de nota que está na segunda posição no segundo Arrey dentro do Arrey principal