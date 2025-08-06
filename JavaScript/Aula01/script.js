/* String */
var texto = "Alo voce!"

/* Number */
var inteiro = 10
var float = 5.2

/* Booleano */
var bool = false

//document.write(texto) // Deprecated
console.log(texto)

/*
// OBS: prompt sempre lê como string
var nome = prompt("Digite o seu nome: ")
var horario = prompt("Digite o horário: ")

console.log("Bom dia, " + nome + "! São " + horario + " horas da manhã!")
*/

var nulo = null // Ausência de valor intencional
var indefinido // undefined
var notANumber = 50 + undefined // NaN

console.log(nulo)
console.log(indefinido)

/* OPERADORES
=== (Idêntico) -> valores comparados são iguais e do mesmo tipo

!== (Não idêntico) -> valores comparados são diferentes e de tipos diferentes
*/

var num1 = prompt("Primeiro número: ") // String
var num2 = prompt("Segundo número: ") // String

console.log(num1 + num2)

num1 = parseInt(num1)
num2 = parseInt(num2)

console.log(num1 + num2)

console.log(num1.toString() + num2.toString())

/*OBS: variável declarada dentro de função só pode ser usada dentro de função,
mas variável dentro de bloco (usando var) PODE ser usada fora (promoção)*/