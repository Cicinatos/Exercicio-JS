function tratarErroLançar(erro) {
    //throw new Error('Erro!')
    //throw 10
    //throw true
    //throw 'Mensagem'
    throw { //lançar erro
        nome: erro.name,
        msg: erro.menssage,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try { //tentar
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) { //capturar
        tratarErroLançar(e)
    } finally { 
        console.log('Final')
    }
    
}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)