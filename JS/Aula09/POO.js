
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