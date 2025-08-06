class Pessoa {
    /* Atributos privados */
    #humor = null // # é o operador privado

    /* Atributos públicos */
    nome = ''

    /* Métodos públicos */
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

    /* Método privado */
    #mudarHumor(){
        this.#humor = Math.floor(Math.random() * 2)
    }
}

let pessoa = new Pessoa('José')
console.log(pessoa.dizerOi())
console.log(pessoa.getHumor())

console.log('\n')

// console.log(pessoa.nome) // José
// console.log(pesssoa.#humor) // Erro

/* Métodos Estáticos */
// Não precisam de uma instância (objeto) da classe
// para serem acessados
// São compartilhados entre todos os objetos
class Filme {
    static proximoIdFilme = 1; // 2, 3

    constructor(titulo) {
        this.titulo = titulo;

        this.id = Filme.proximoIdFilme;
        Filme.proximoIdFilme++; // Incremento
    }

    static getProximoIdFilme() {
        return Filme.proximoIdFilme;
    }
}

console.log(Filme.getProximoIdFilme()) // 1

const filme1 = new Filme('O Pior Vizinho do Mundo'); // 1
const filme2 = new Filme('Luta Pela Fé'); // 2
const filme3 = new Filme('xyz'); // 3
console.log(filme1);
console.log(filme2);
console.log(filme3);

console.log(Filme.getProximoIdFilme()); // 4

console.log('\n')

/* Blocos Estáticos */
// Executados durante a inicialização da classe,
// antes mesmo do construtor
class Agenda {
    #titulo = ''
    eventos = []

    static config = {}
    static #eventosRecorrentes = []

    // Executados imediatamente, com ou sem instância
    static {
        console.log('Executando bloco de execuçãoe estático')
    }

    static {
        this.config = {
            tema: 'Dark',
            visualizacao: 'Mensal'
        }
    }

    static {
        this.#eventosRecorrentes.push('Feriado 1')
        this.#eventosRecorrentes.push('Feriado 2')
    }

    constructor(titulo, eventos) {
        console.log('Executando construtor')
        this.#titulo = titulo
        this.eventos = eventos
    }

    static getEventosRecorrentes()  {
        return this.#eventosRecorrentes
    }
}

const agenda = new Agenda('Cliente 1', ['Reunião 1', 'Reunião 2'])
console.log(agenda)
console.log(Agenda.config)
console.log(Agenda.getEventosRecorrentes())