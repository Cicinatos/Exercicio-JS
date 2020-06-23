const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function excec() {
    const valor = 'Local'
    minhaFuncao()
}

excec() //o excec vai imprimir 'Global' pois minhaFuncao foi gerada logo depois da const valor 'global' e com isso é a constante mais proxima neste contexto lexico