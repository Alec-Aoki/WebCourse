/* Nullish Coalecing Operator (??) */
// No operador or, caso o valor da esquerda não seja
// utilizável/comparável, ele sempre retorna o valor
// da direita
// Os 4 testes abaixo são valores inutilizáveis
let teste1 = null || 'Valor da direita' // Valor da direita
let teste2 = 0 || 'Valor da direita' // Valor da direita
let teste3 = undefined || 'Valor da direita' // Valor da direita
let teste4 = '' || 'Valor da direita' // Valor da direita

// Caso o valo da esquerda seja válido, ele dá
// prioridade para esse valor, descartando o da
// direita
let teste5= 'Valor da esquerda' || 'Valor da direita' // Valor da esquerda

// O nullish coalecing não dá prioridade para o valor
// da direita caso o valor da esquerda seja inutilizável

let teste6 = null ?? 'Valor da direita' // Valor da direita
let teste7 = 0 ?? 'Valor da direita' // 0
let teste8 = undefined ?? 'Valor da direita' // Valor da direita
let teste9 = '' ?? 'Valor da direita' // <empty string>
let teste10= 'Valor da esquerda' ?? 'Valor da direita' // Valor da esquerda