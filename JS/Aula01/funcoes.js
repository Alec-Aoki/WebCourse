/* Função Anônima
Função sem nome cujo resultado é associado a uma
variável
*/
var callbackSuccess = function(mensagem, nome){
    console.log(mensagem)
    console.log("Nome: " + nome)
}
var callbackError =  function(mensagem){
    console.log(mensagem)
}

/* Função normal usando callback */
function exibirNome(nome, callbackSuccess, callbackError){
    if(nome == 'Arthur'){
        callbackSuccess('Operação realizada com sucesso', nome)
    } else {
        callbackError('Operação falhou')
    }
}

exibirNome('Alec', callbackSuccess, callbackError) // Chamada SEM parênteses

/*W3schools -> métodos de strings, math e data*/
/* DATAS */
var data = new Date() // Baseado no SO do usuário
console.log("Dia: " + data.getDate())
console.log("Mês: " + (data.getMonth() + 1)) // Index 0, por isso + 1
console.log("Ano: " + data.getFullYear())

/* PARÂMETROS */
function soma(a, b){
    return (a + b)
}
console.log(soma(7, 7)) // 14
console.log(soma(7, 7, 100)) // 14
console.log(soma(7)) // NaN
console.log(soma()) // NaN

function soma2(){
    // console.log(arguments) // arguments é um objeto local da função, similar a um array

    var resultado = 0
    for(var i in arguments){
        // console.log(arguments[i])
        resultado += arguments[i]
    }

    return resultado
}

console.log(soma2(7, 5, 3.2, 'Texto'))
