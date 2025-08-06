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