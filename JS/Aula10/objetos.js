/* Objetos Literais/Estáticos */
// São objetos únicos, ou seja, não podem ser copiados
// Se atribuirmos um objeto a uma variável, a variável
// irá apontar para esse objeto, não copiá-lo

let objetoLiteral = {
    // Conjuntos/pares de nome/chave/atributo e valor
    descricao: 'Notebook',
    preco: 1500,
    verDescricao: function(){
        console.log(`${this.descricao} por apenas ${this.preco}`)
    }
}

objetoLiteral.verDescricao()

/* Outras notações */
let nome = 'Jorge'
let idade = 29
let sexo = 'Masculino'
let profissao = 'Programador'

let objeto = {
    nome: nome,
    idade: idade,
    sexo: sexo,
    profissao: profissao,
    exibirResumo: function(){
        console.log(`${this.nome} tem ${this.idade} anos, é do sexo ${this.sexo} e é ${this.profissao}`)
    }
}

objeto.exibirResumo()

let objeto2 = {
    // nome = nome da variável, valor = valor da variável
    nome,
    idade,
    sexo,
    profissao,
    exibirResumo(){
        console.log(`${this.nome} tem ${this.idade} anos, é do sexo ${this.sexo} e é ${this.profissao}`)
    }
}

objeto2.nome = 'Roberto' // Alterando valor
objeto2.exibirResumo()

/* Inclusão dinâmica de atributos */
objeto2.gostos = 'Café'
objeto2.revelarGostos = () => console.log(`${objeto2.nome} gosta de ${objeto2.gostos}`)

objeto2.revelarGostos()

let objeto3 = objeto2
objeto3.nome = 'Alec'
objeto2.exibirResumo()

/* Funções Construtoras */
// Permite criar várias instâncias de um objeto,
// além de permitir variáveis privadas

let Carro = function(){
    var velocidadeAtual = 0
    var velocidadeMaxima = 180

    this.cor = 'Amarelo'
    this.modelo = 'Monza'

    this.acelerar = function(){
        let velocidadeFinal = velocidadeAtual + 10
        if(velocidadeFinal < velocidadeMaxima){
            velocidadeAtual += 10
        }
    }

    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }

    this.setVelocidadeAtual = function(novaVelocidade){
        if(novaVelocidade < velocidadeMaxima && novaVelocidade >= 0){
            velocidadeAtual = novaVelocidade
        }
    }
}

let carro = new Carro()
carro.acelerar()
console.log(`A velocidade atual do carro (${carro.modelo} ${carro.cor}) é: ${carro.getVelocidadeAtual()} km/h`)
console.log(carro.velocidadeAtual) // undefined
console.log(carro.getVelocidadeAtual()) // 10

/* Funções Factory */
// Função que permite a criação de objetos

let Bicicleta1 = {
    cor: 'Branca',
    marcha: 'única',
    aro: 12,
    pedalar(){
        console.log('Método pedalar() executado')
    }
}

console.log(Bicicleta1)

let BicicletaFactory = function(cor, marcha, aro){
    // Função que cria e retorna o objeto
    return {
        cor,
        marcha,
        aro,
        pedalar(){
            console.log('Método pedalar() executado')
        }
    }
}

let Bicicleta2 = BicicletaFactory('Vermelho', 21, 29)
console.log(Bicicleta2)