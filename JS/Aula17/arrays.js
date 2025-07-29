/* Find e Includes */
let arr = ['Banana', 'Maca', 'Uva']
// Find: retorna o valor pesquisado se ele estiver presente, undefined senão
let retorno = arr.find(item => item == 'Uva')
console.log(retorno)
// Includes: retorna true or false
retorno = arr.includes('Maca')
console.log(retorno)