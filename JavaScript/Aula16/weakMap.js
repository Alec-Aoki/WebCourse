/* Weak Map */
obj1 = {
    nome: 'Alec',
    profissao: 'Estudante'
}

obj2 = {
    nome: 'Maria Silva',
    profissao: 'CEO'
}

const objetos = [obj1, obj2] // Referências para os objetos
console.log('Original: ')
objetos.map((value, index) => console.log(value, index))

obj2.nome = 'Marcos' // Alterando o objeto em si
console.log('Apos modificacao 1: ')
objetos.map((value, index) => console.log(value, index)) // Muda na coleção tmb, pois é referência


objetos[1].nome = 'Joao Batista' // Alterando na coleção
console.log('Apos modificacao 2: ')
console.log(obj2) // Muda o objeto tmb, pois é referência

obj2 = null // "Apagando" o objeto
console.log('Apos apagar: ')
objetos.map((value, index) => console.log(value, index)) // Continua na coleção!

objetos[1].nome = 'Roberto Carlos' // Altera na coleção! (Vazamento de memória)
console.log('Apos modificacao 3: ')
objetos.map((value, index) => console.log(value, index))

// Ou seja, se tivermos uma coleção de objetos e apagarmos esse objeto,
// ele NÃO será apagado da coleção, podendo gerar problemas

obj3 = {
    nome: 'Maria Silva',
    profissao: 'CEO'
}

// Weak map faz com que caso um objeto deixe de ser referenciado pela memória,
// ele seja removido da coleção (referência fraca) pelo garbage collector do JS
// No entanto, ele NÃO É ITERÁVEL
const objetos2 = new WeakMap()
objetos2.set(obj1, 'Objeto 1') // Par objeto valor
objetos2.set(obj3, 'Objeto 3') // Par objeto valor
// O garbage collector depende de configurações do browser/backend