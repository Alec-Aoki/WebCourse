// Objeto literal
let a1 = {
    cor: 'Branco',
    modelo: 'Airbus a380',
    levantarVoo(){
        console.log('Levantar voo')
    }
}

// Função construtora
let AviaoF = function(){
    this.cor = 'Azul'
    this.modelo = 'Boeing 787'
    this.levantarVoo = function(){
        console.log('Levantar voo') 
    }
}
let a2 = new AviaoF()

// Classe
class AviaoC {
    constructor(){
        this.cor = 'Vermelho',
        this.modelo = 'Embraer E-Jets'
    }

    levantarVoo(){
        console.log('Levantar voo')
    }
}
let a3 = new AviaoC()

console.log(a1)
console.log(a2)
console.log(a3)

/* Prototype Chain */
// __proto__ é uma "herança" entre os objetos
// Todos os objetos herdam o prototype do object
Object.prototype.atrr4 = 'z' // Atributo global a todos os objetos

let animal = { atrr1:'a' }
let vertebrado = { __proto__:animal, atrr2:'b' }
let ave = { __proto__:vertebrado, atrr3:'c' }

console.log(vertebrado.atrr1, ave.atrr2, ave.atrr3, ave.atrr1) // a b c a

let papagaio = {__proto__:ave, atrr3:'d'} // Sombreamento/Sobrescrita
console.log(papagaio.atrr3) // d

console.log(papagaio.atrr4) // z