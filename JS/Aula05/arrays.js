/* ARRAYS */
var lista_frutas = Array()
/*
var lista_frutas = [] // Mesma coisa que a linha de cima
*/

lista_frutas[0] = 'Banana'
lista_frutas[2] = 10
lista_frutas['x'] = 'Morango'
lista_frutas[4] = true

console.log(lista_frutas)
console.log(lista_frutas['x'])

var lista_frutas2 = Array('Banana', 'Maça', 'Morango', 'Uva')
/*
var lista_frutas2 = ['Banana', 'Maçã', 'Morango', 'Uva'] // Mesma coisa que a linha de cima
*/
console.log(lista_frutas2[0])

/* ARRAYS MULTIDIMENSIONAIS */
var lista_coisas = Array()
lista_coisas['frutas'] = Array('Banana', 'Maça', 'Morango', 'Uva')

lista_coisas['pessoas'] = []
lista_coisas['pessoas']['a'] = 'Jõao'
lista_coisas['pessoas']['b'] = 'Maria'
lista_coisas['pessoas']['c'] = 'José'

console.log(lista_coisas)

/* OBS: o atributo lenght conta espaços vazios e não conta índices que não são números */

lista_frutas2.push('Tomate') // Add. no fim
console.log(lista_frutas2)

lista_frutas2.unshift('Melão') // Add. no início
console.log(lista_frutas2)

lista_frutas2.pop() // Remove do fim
console.log(lista_frutas2)

lista_frutas2.shift('Melão') // Remove do início
console.log(lista_frutas2)

/* PESQUISA */
console.log(lista_frutas2.indexOf('Morango')) // 2
console.log(lista_frutas2.indexOf('Abacaxi')) // -1

/* ORDENAÇÃO */
var lista_misturada = Array('Maça', 'Uva', 'Banana', 'Morango', 4, 3, 2, 1)
console.log(lista_misturada.sort())

var lista_numeros = Array(12, 40, 3, 7, 19, 1)
console.log(lista_numeros.sort()) // O .sort() é ALFANUMÉRICO!!!

// Ordenação numérica
function ordenaNumeros(a, b){
    return (a - b)
    // < 0: a é ordenado antes de b
    // > 0: b é ordenado antes de a
    // == 0: a ordem é mantida
    // Também funciona caso os números estejam na forma de string
}

console.log(lista_numeros.sort(ordenaNumeros)) // Callback