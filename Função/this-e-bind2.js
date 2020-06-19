function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() { //setInterval é um temporizador
        self.idade++ //vai adicionar a idade +1
        console.log(self.idade)
    }, 1000) //vai repetir a cada segundo
}

new Pessoa