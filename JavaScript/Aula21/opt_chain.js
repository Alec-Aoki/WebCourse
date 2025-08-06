/* Optional Chaining */
// Permite verificar se um atributo existe em um objeto
// antes de usá-lo, evitando uma exceção que quebra o
// fluxo do código

let obj = {
    2021: {
        janeiro: {
            pessoal: 2000,
            casa: 1500,
            investimento: 1000
        },
        fevereiro: {
            pessoal: 1800,
            casa: 1600,
            investimento: 1300
        }
    }
}

// Custo pessoal em janeiro de 2021
console.log(obj['2021'].janeiro.pessoal)

// Acessando um atributo não existente
// console.log(obj['2021'].marco.pessoal) // Erro -> pausa o fluxo
console.log(obj['2021'].marco?.pessoal) // ? é o optional chaining
// Retorna undefined se o atributo não existir