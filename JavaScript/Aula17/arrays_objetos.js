/* Find e Includes */
let arr = ['Banana', 'Maca', 'Uva']
// Find: retorna o valor pesquisado se ele estiver presente, undefined senão
let retorno = arr.find(item => item == 'Uva')
console.log(retorno)

// Includes: retorna true or false
retorno = arr.includes('Maca')
console.log(retorno)
console.log('\n')

/* Object Values */
// Converte um objeto em um array
// Substitui o nome do atributo pelo índice do array
let objeto = {
    nome: 'Jorge Sant Ana',
    profissional: {
        site: 'jorgesantana.net.br',
        profissao: 'Programador'
    },
    hobbies: [
        {id: 1, hobby: 'Fazer trilhas'},
        {id: 2, hobby: 'Dormir'}
    ],
    pais: 'Brasil'
}

console.log(Object.values(objeto))

/* Object Entries */
// Converte um objeto em array
// Contém o par (como array) chave-valor do objeto
console.log(Object.entries(objeto))
console.log('\n')

/* Property Descriptors */
// Descritores de propriedades (configurable, enumerable, writable)
console.log(Object.getOwnPropertyDescriptors(objeto))

// Writable
// false: o valor da propriedade não pode ser modificado
// true: " pode ser modificado
Object.defineProperty(objeto, 'nome', {
    value: 'Jorge Sant Ana',
    writable: false
})
objeto.nome = 'Joao Batista' // Não altera o valor!!!
console.log(Object.getOwnPropertyDescriptors(objeto)) // O nome continua Jorge Sant Ana e writable virou false
console.log('\n')

// Enumerable
// false: a propriedade não é exibida em laços de repetição
for(let propriedade in objeto){
    console.log(propriedade, objeto[propriedade])
}

Object.defineProperty(objeto, 'profissional', {
    enumerable: false
})

console.log('\n')

for(let propriedade in objeto){
    console.log(propriedade, objeto[propriedade])
}
console.log('\n')

// Configurable
// false: a propriedade não pode ser deletada ou ter seus descritores modificados (exceto writable)
Object.defineProperty(objeto, 'pais', {
    configurable: false
})
console.log(Object.getOwnPropertyDescriptors(objeto))
console.log(delete objeto.hobbies) // true
console.log(delete objeto.pais) // false
console.log(Object.getOwnPropertyDescriptors(objeto)) // Hobbies foi deletado