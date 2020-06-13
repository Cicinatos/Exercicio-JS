function rand({ min = 0, max = 1000}) { //criando uma funçao rand que vai retornar um valor entre 0 e 1000 sendo que este parâmetro esta em {} que é um operador destructuring.
    const valor = Math.random() * (max - min) + min // criando constante valor que recebe Math.random() que vai perar um valor aleatório, vezes o maximo - o minimo + minimo para criar um intervalo
    return Math.floor(valor) //o floor arredonda para baixo
}

const obj = { max: 50, min: 40 } //crindo constante obj que recebe entre 40 e 50
console.log(rand(obj)) //escreva a função rand usando obj como parâmetro
console.log(rand({ min: 995 })) //escreva  função rand usando o valor {min: 995} como parâmetro. o max fica como 1000 pois foi declarado acima
console.log(rand({})) //escreva a função rand com o parâmetro {}Objeto vazio, de 0 a 1000
//console.log(rand()) //vai dar erro