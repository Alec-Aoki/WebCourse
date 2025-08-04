/* Flat */
let arr = [1, 2, 3, 4, [5, 6, 7, 8], 10, [11, 12, [13, 14]]]

console.log(arr)

let arr2 = arr.flat(1) // O parâmetro é a profundidade de achatamento

console.log(arr2)
// 1: [1, 2, ..., 10, 11, 12, [13, 14]]
// 2: [1, 2, ..., 12, 13, 14]

/* Flatmap */
let nomes = [
    'João,José,Maria', // Índices
    'Sandra,Paulo',
    'Antônia, Fernanda, Marcus'
]

// Transformando cada índice em um array, resultando em um array de arrays
let nomesMap = nomes.map(item => {
    return item.split(',')
})
console.log(nomesMap)

// Faz o flat automaticamente, resultando em um array simples
// Profundidade 1
let nomesFlatMap = nomes.flatMap(item => {
    return item.split(',')
})
console.log(nomesFlatMap)

/* fromEntries */
// Transforma um array em objeto
// Cada índice do nosso array tem que ter um par chave-valor
let dados = [
    ['nome', 'Jorge Sant Ana'],
    ['profissional', [
        ['site', 'jorgesantana.net.br'],
        ['profissao', 'programador']
    ]],
    ['hobbies', ['caminhar', 'nadar']],
    ['pais', 'Brasil']
]

let objetoDados = Object.fromEntries(dados)
console.log(objetoDados)