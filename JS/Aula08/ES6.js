/* Var e Let */
// Var: sofre eleveção de nível (hoisting) qndo. em bloco (em função não)
// Let: preserva o escopo em que a variável foi criada (msm. em bloco)
// O Let é recomendado!!!

/* Const */
// Read only, tem que receber valor na criação
// Segue o padrão do Let!

/* Template String */
let nome = 'Jorge'
console.log('Olá ' + nome + ', tudo bem?')
console.log(`Olá ${nome}, tudo bem?`) // ``
console.log(`Olá ${nome},
            tudo bem?`)
console.log(`7 + 8 = ${7 + 8}`)
function soma(a, b){
    return a + b
}
console.log(`7 + 8 = ${soma(7, 8)}`)

/*Parâmetros Default*/
function contar_historia(nomeCachorro = 'Lili', coisa = 'biscoito', nomeDono = 'Alec'){
    console.log(`Era uma vez um cachorro chamado ${nomeCachorro}, ele adorava ${coisa}, seu dono era ${nomeDono}, e eles viveram felizes para sempre`)
}
contar_historia()
contar_historia(undefined, undefined, 'Eric')

/* Arrow Function */
let quadrado = function(x){
    return (x * x)
}
console.log(quadrado(2))

let quadrado2 = (x) => {
    return (x*x)
}
console.log(quadrado2(2))

/*
let quadrado2 = x => x*x // Forma mais simplificada possível
*/