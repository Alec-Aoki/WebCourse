/* Método at() */

// Pega o caractere de uma string na posição passada
const curso = 'Web Completo'
console.log(curso.at(0)) // W
console.log(curso.at(2)) // b

console.log('\n')

// Pega um valor de um array
const cursos = ['UI Design', 'Flex Box', 'Algoritmos']
console.log(cursos.at(0)) // UI Design

console.log('\n')

/* Object.hasOwn() */
// Verifica se um objeto possui um atributo específico,
// herdado ou não
class Pessoa {
    id = null
}

class PessoaFisica extends Pessoa {
    nome = 'Jorge Sant Ana'
}

class PessoaJuridica extends Pessoa {
    razaoSocial = 'Argus Academy'
}

const pessoaFisica = new PessoaFisica()
const pessoaJuridica = new PessoaJuridica()

console.log(Object.hasOwn(pessoaFisica, 'id')) // True
console.log(Object.hasOwn(pessoaJuridica, 'nome')) // False

console.log('\n')

/* Immutable Array Methos */
// Fazem cópias do array, sem alterar o original
const numeros = [5, 4, 3, 2, 1]

const arrayInvertido = numeros.toReversed()
console.log(arrayInvertido) // [1, 2, 3, 4, 5]

const arrayOrdenado = numeros.toSorted()
console.log(arrayOrdenado) // [1, 2, 3, 4, 5]

const arrayFatiado = numeros.toSpliced(1, 3)
console.log(arrayFatiado) // [5, 1]

const arraySubst = numeros.with(2, 10)
console.log(arraySubst) // [5, 4, 10, 2, 1]