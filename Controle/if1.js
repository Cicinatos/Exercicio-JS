function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log(`Aprovado com ${nota}`)
    }
}

soBoaNoticia(8.1) //só vai mostrar essa nota, pois na condição só foi soliciado mostrar a nota >= a 7
soBoaNoticia(6.4)

function seForVerdadeEuFalo(valor) {
    if(valor) { //não informou a condição, porem se o 'valor' for verdadeiro ele vai mostrar
        console.log(`É verdade... ${valor}`)
    }
}

seForVerdadeEuFalo() //falso
seForVerdadeEuFalo(null) //falso
seForVerdadeEuFalo(undefined) //falso
seForVerdadeEuFalo(NaN) //falso
seForVerdadeEuFalo('') //falso
seForVerdadeEuFalo(0) //falso
seForVerdadeEuFalo(-1) //verdade
seForVerdadeEuFalo(' ') //verdade
seForVerdadeEuFalo('?') //verdade
seForVerdadeEuFalo([]) //verdade
seForVerdadeEuFalo([1, 2]) //verdade
seForVerdadeEuFalo({}) //verdade