/* Destructuring Assignment */
// OBS: aceita parâmetros default para índices que não existem
// Arrays: []
let frutas = ['Abacaxi', 'Uva', 'Pera', 'Mamao']
let [a, b, , c] = frutas // Destructuring Assignment, a = 'Abacaxi', b = 'Uva', c = 'Mamao'
console.log(a, b, c)

let coisas = [['Abacaxi', 'Uva', 'Pera', 'Mamao'], ['José', 'Maria']]
let [ , [x, y]] = coisas
console.log(x, y)

// Objetos: {}
let produto = {
    descricao: 'Notebook',
    preco: 1800,
    detalhes: {
        fabricante: 'ABC',
        modelo: 'XYZ'
    }
}

let {descricao, preco} = produto
console.log(descricao, preco)

let {descricao:varD, preco:varP} = produto
console.log(varD, varP)

let {detalhes:{fabricante, modelo}} = produto
console.log(fabricante, modelo)

// Funções:
let arr = [10, 20, 30, 40]
function teste([a, b, , c]){
    console.log(a, b, c)
}
teste(arr) // 10 20 40
 
let obj = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
}
function teste2({a, b, d}){
    console.log(a, b, d)
}
teste2(obj) // 10 20 40

// Com Rest:
let [comeco, ...resto] = arr
console.log(comeco)
console.log(resto)

let obj2 = {
    l: 10,
    m: 20,
    n: 30,
    o: 40
}
let {l, ...z} = obj2
console.log(l)
console.log(z)