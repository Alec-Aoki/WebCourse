/* Pad start e pad end */
let codigo = '1000'

// Parãmetros: quant. de caracteres total da string final, e qual caractere será repetido
codigo = codigo.padStart(10, '0')
console.log(codigo)

let codigo2 = 'abc'
codigo2 = codigo2.padEnd(5, '123456')
console.log(codigo2) // abc12

let codigo3 = 'xyz'
codigo3 = codigo3.padEnd(9, 'abc')
console.log(codigo3) // xyzabcabc