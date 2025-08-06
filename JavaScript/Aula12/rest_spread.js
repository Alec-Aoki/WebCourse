/* Spread */
// Operador: ...
// String: separa os caracteres
let titutloFilme = 'Scott Pilgrim VS O Mundo'
console.log(titutloFilme)
console.log(...titutloFilme)
console.log([...titutloFilme])
// Arrays:
let listaCursos1 = ['NodeJS e MongoDB', 'ES6, Typescript e Angular 4']
let listaCursos2 = ['Multiplataforma Android/IOS', 'Introducao ao GNU/Linux']
let listaCursosCompleto = ['Web Completo', ...listaCursos1, 'Android Completo', ...listaCursos2]
console.log(listaCursosCompleto)
// Objetos:
let pessoa = {
    nome: 'Joao',
    idade: 27
}
let clone = {
    ...pessoa,
    endereco: 'Rua ABC'
}
console.log(clone)

/* Rest */
function soma(...param){ // Recebemos um único parâmetro e o transformamos em array
    let resultado = 0

    param.forEach(valor => resultado += valor)

    return resultado
}
console.log(soma(3, 8, 5, 7, -23))

function multiplicacao(m, ...p){
    let resultado = 0

    p.forEach(valor => resultado += m * valor)

    return resultado
}
console.log(multiplicacao(5, 7, 12, 3, 49))