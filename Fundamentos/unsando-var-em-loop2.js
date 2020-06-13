const funcs = [] //criando arrey 
for (var i = 0; 1 < 10; i++) { // criando repetição com for
    funcs.push(function() { //os valores serão adicionados ao arrey
        console.log(i) //escrva o valor de i
    })
}

funcs[2]() // qual o valor de i na posição 2
funcs[8]() // qual o valor de 1 na posição 8
//neste caso os valores serão 10, pois a variavel var não diferencia os blocos, e será impresso o ultimo valor, o valor de qundo ele saiu da função.