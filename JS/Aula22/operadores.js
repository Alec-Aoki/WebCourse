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

/* Numeric Separator */
// Facilita a leitura de números
// Restrições:
// Não pode ser usado mais de um _ em seguida
// O número não pode começar com 0_
// Não podemos terminar o número com _

let umTrilhao = 1_000_000_000_000
console.log(umTrilhao) // 1000000000000

let decimal = 1_575_720.25
console.log(decimal) // 1575720.25

let binario = 0b1010_1010_1010
console.log(binario) // 2730

let hexadecimal = 0xA_B_C_D_E_F
console.log(hexadecimal) // 11259375