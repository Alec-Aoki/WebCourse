/* Generators */
// Transforma a variável a que a função é atribuída
// em um iterador que só executa o conteúdo da função
// quando for usado o método next()
// yield define pausas na execução do conteúdo
function* testeGenerator(){
    yield console.log('Teste 1')
    yield console.log('Teste 2')
    yield console.log('Teste 3')
    yield 'Teste 4'

    return 'Teste 5'
}

let meuGenerator = testeGenerator() // Objeto iterator
meuGenerator.next()
meuGenerator.next()
meuGenerator.next()
// Nos retornos, retorna dois valores:
// value (o valor sendo retornado) e done (o status da execução da função)
console.log(meuGenerator.next()) // value:'Teste 4' done:false
console.log(meuGenerator.next()) // value:'Teste 5' done:true

/* Promises */
// Processamento assíncrono, ou seja, um valor que pode estar disponível
// no momento, no futuro ou nunca
// Pode estar pending (estado inicial), fulfilled ou rejected
let promessa = new Promise(
    (resolve, reject) => { // Função com 2 parâmetros: resolve e reject
        try{
            // throw new Error('Houve um erro') // state:"rejected" reason:Error@
            setTimeout(() => {
                resposta = 'Dados recuperados com sucesso',
                resolve('Promessa concluída com sucesso')},
                3000)
        } catch(e) {
            setTimeout(() => {reject(e)}, 3000)

        }
    }
)

console.log(promessa) // state:"pending"

setTimeout(() => {
    console.log(promessa),
    console.log(resposta)
    },
    5000) // state:"fulfilled" value:"Promessa concluída com sucesso"