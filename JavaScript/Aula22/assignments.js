/* Logical Nullish Assignment (??=) */
// Testa a variável durante a atribuição de valores
// Só atribui se for o valor prévio dela for null ou undefined
let v1 = 10
let v2 = null

// Se o valor de v1 for nulo, atribui o valor 50
// Senão, não atribui nada
v1 ??= 50
console.log(v1) // 10

v2 ??= 100
console.log(v2) // 100

// Com objetos:
let carro = {
    marca: 'Volkswagen'
}

// Como esses atributos não existem, eles são considerados
// undefined, então cria automaticamente e atribui
carro.modelo ??= 'T Cross'
carro.ano ??= '2021'
console.log(carro)

// Com arrays:
// OBS: um array vazio NÃO é considerado como null ou undefined
let arr = ['uva', 'joao', null, undefined, 5, []]
arr.forEach(
    (item, indice) => {
        arr[indice] ??= 'Não informado' 
    }
)
console.log(arr)

console.log('\n')

/* Logical OR Assignment (||=) */
// Mesma coisa que o Nullish, mas só atribui quando o valor
// prévio for FALSE
// False -> null, undefined, 0, ''
let v3 = null
v3 ||= 'Alo voce'
console.log(v3)

/* Logical AND Assignment (&&=) */
// Só atribui quando o valor prévio for TRUE
let v5 = 'Alo voce'
v5 &&= 'Poggers'
console.log(v5)