/* Operador Private (#) */
class Pessoa {
    // Atributos privados
    #humor = null

    constructor(nome){
        this.#mudarHumor()
        this.nome = nome
    }

    dizerOi(){
        return `Olá, meu nome é ${this.nome}`
    }

    getHumor(){
        return this.#humor
    }

    // Método privado
    #mudarHumor(){
        this.#humor = Math.floor(Math.random() * 2)
    }
}

let pessoa = new Pessoa('José')
console.log(pessoa.dizerOi())
console.log(pessoa.getHumor())

// console.log(pessoa.nome) // José
// console.log(pesssoa.#humor) // Erro