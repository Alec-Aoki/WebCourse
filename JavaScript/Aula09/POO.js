
class ContaBacaria{
    // Construtor
    constructor(){
        // Atributos
        this.agencia = 1234
        this.numeroConta = 123456
        this.saldo =  10
        this.limite = 1000
    }

    // Métodos
    depositar(valorDepositado){
        this.saldo += valorDepositado
    }

    sacar(valorSacado){
        this.saldo -= valorSacado
    }

    consultar_saldo(){
        return this.saldo
    }
}

let contaAlec = new ContaBacaria()
console.log(contaAlec.consultar_saldo())
contaAlec.depositar(5)
console.log(contaAlec.consultar_saldo())
contaAlec.sacar(15)
console.log(contaAlec.consultar_saldo())

console.log('\n')

/* Visibiliade */
// JS não suporta visibilidade de OO, então a convenção
// é usar um _ antes do nome do atributo caso ele for
// ser considerado como privado
class Tv{
    constructor(){
        this._canais = Array(1, 2, 3, 4, 5)
        this._canalAtivo = 5
        this._volume = 50
    }

    // Pseudovariáveis
    get canalAtivo(){
        return this._canalAtivo
    }

    set canalAtivo(canal){
        if(this._canais.indexOf(canal) != -1){
            this._canalAtivo = canal
        } else {
            console.log("Canal não encontrado!")
        }
    }
}

let tv = new Tv()
console.log(tv.canalAtivo)

tv.canalAtivo = 7
console.log(tv.canalAtivo)

tv.canalAtivo = 1
console.log(tv.canalAtivo)

/* Herança */
class Animal {
    constructor() {
        this.cor = ''
        this.tamanho = 10
    }

    dormir() {
        console.log('Dormindo')
    }
}

class Cachorro extends Animal {
    constructor() {
        super()
        this.orelhas = 'Grandes e caídas'
    }

    latir(){
        console.log("Latido")
    }
}

class Passaro extends Animal {
    constructor(bico) {
        super()
        this.bico = bico
    }

    voar(){
        console.log("Voo")
    }
}

let cachorro = new Cachorro()
let passaro = new Passaro()

console.log(cachorro)
console.log(passaro)

cachorro.dormir()
console.log('\n')
passaro.dormir()

class Papagaio extends Passaro{
    constructor(sabeFalar = false, bico){
        super(bico)
        this.sabeFalar = sabeFalar
    }

    falar(){
        if(this.sabeFalar){
            console.log("Falou")
        } else {
            console.log("Não sabe falar")
        }
    }
}

let papagaio = new Papagaio(true, 'pequeno')
papagaio.falar()

class Avestruz extends Passaro{
    constructor(bico){
        super(bico)
    }

    enterrarCabeca(){
        console.log("Enterrou a cabeca")
    }

    // Polimorfismo -> sobrescreve métodos do pai
    voar(){
        console.log("Nao sabe voar")
    }
}

let avestruz = new Avestruz('grande')
avestruz.voar()