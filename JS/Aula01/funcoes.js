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
/* Datas */
var data = new Date() // Baseado no SO do usuário
console.log("Dia: " + data.getDate())
console.log("Mês: " + (data.getMonth() + 1)) // Index 0, por isso + 1
console.log("Ano: " + data.getFullYear())