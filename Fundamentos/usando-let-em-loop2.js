const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
//neste caso o let diferencia o que esta dentro e fora do bloco de forma que cada valor impresso será registrado em cada posição e se consultado fora do bloco, pegaremos os valores de acordo.