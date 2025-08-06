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

/* Trim start e trim end */
// trimLeft() e trimRight() fazem as mesmas coisas (apelidos)
let texto = '            teste               '
console.log('.' + texto + '.')
console.log('.' + (texto.trimStart()).trimEnd() + '.') // Retorna a string modificada

/* toString */
// Método existente em todo objeto
// Caso não seja sobrescrito, sempre retorna [object Tipo]
// Nesse caso, [object Object]
class Carro{
    constructor(marca, modelo, ano){
        this.marca = marca,
        this.modelo = modelo,
        this.ano = ano
    }
    
    toString(){
        return `Carro da marca ${this.marca}, modelo ${this.modelo}, ano ${this.ano}`
    }
}

let carro = new Carro('Jeep', 'Renegade', 2021)
console.log(carro.toString())

/* replaceAll */
// Permite substituir todas as ocorrências de uma palavra numa string por outra palavra
let textoAntes = 'O João está trabalho no código fonte'
console.log(textoAntes)

let textoDepois = textoAntes.replaceAll('João', 'Marcos') // Retorna o texto novo
console.log(textoDepois)