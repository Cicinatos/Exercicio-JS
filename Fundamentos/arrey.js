const valores = [7.7, 8.9, 6.3, 9.2] // as posições dos elementos no arrey são chamados de indice. neste caso temos os indices [0, 1, 2, 3]
console.log(valores[0], valores[3]) // mostre os valores dos indices 0 e 3
console.log(valores[4]) // como nao exite esse indice, o valor de retorno e indefinido (undefind)

valores[4] = 10 // coloque no indice 4 o valor 10
console.log(valores)
console.log(valores.length) // mostre quantos elementos tem na const valores

valores.push({id: 3}, false, null, 'teste') // .push insere novos valores a const valores
console.log(valores)

console.log(valores.pop()) // o .pop vai retirar o ultimo indice da const valores
//ou
delete valores[0] // o delete vai apagar o valor do indice que você iformar (neste caso o 0)
console.log(valores)

console.log(typeof valores)