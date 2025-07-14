/* For in
Percorre todos os elementos do array, independente de seus índices
*/
var listaConvidados = Array('Jorge', 'Jamilton', 'José', 'Ana', 'Maria')

for (var x in listaConvidados){
    console.log(x + " " + listaConvidados[x])
}

console.log("\n")

var listaConvidados2 = Array()
listaConvidados2['a'] = 'Jorge'
listaConvidados2[10] = 'Jamilton'
listaConvidados2['zebra'] = 'José'
listaConvidados2[-1] = 'Ana'
listaConvidados2[true] = 'Maria'

for (var x in listaConvidados2){
    console.log(x + " " + listaConvidados2[x])
}

console.log('\n')

/* For each
Aplia uma função a cada elemento do array
Tem como parâmetro uma função callback com os parâmetros valor, indice e array,
nessa ordem
Só funciona em índices numéricos > 0 */
var listaFuncionarios = Array('Viviane', 'Rosangela', 'Miguel', 'Lucas', 'Fernanda')

listaFuncionarios.forEach(function (valor, indice, array){
    console.log("Indice: " + indice)
    console.log("Valor: " + valor)
    console.log("Array: " + array)

    if(valor == 'Miguel'){
        array[indice] = 'Roberto'
    }
})

// Dá pra usar um parâmetro só
console.log('\n')
listaFuncionarios.forEach(function (valor){
    console.log("Valor: " + valor)
})