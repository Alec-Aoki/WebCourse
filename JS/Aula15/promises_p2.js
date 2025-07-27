/* Promises pt. 2 */
// Simulando uma requisição http
let promessa = new Promise(
    (resolve, reject) => {
        try{
            throw new Error('Erro')

            setTimeout(
            () => {
                // Requisição foi realizada de algum modo
                let resposta_requisicao = {
                    0: {id: 1, nome : 'Joao'},
                    1: {id: 2, nome : 'Jose'},
                    2: {id: 3, nome : 'Maria'},
                }

                // Encaminha resposta_requisicao como o parâmetro
                // dados do .then()
                resolve(resposta_requisicao)
            },    
            4000)
        } catch(e){
            // Erro na requisição
            setTimeout(
            () => {
                resposta_requisicao = {
                    codigo: 1050,
                    erro: 'Falha na requisicao'
                }

                // Encaminha resposta_requisicao como o parâmetro
                // errp do .catch()
                reject(resposta_requisicao)
            },    
            4000)
        }
    }
).then((dados) => { // Executado quando resolve()
    console.log('Operacao sequencial: ', dados)

    return 2 // Encaminha 2 como o pâmetro número do próximmo .then()
}).then((numero) => { // É possível encadear múltiplos thens!
    console.log('Número ', numero)
}).catch((erro) => { // Executado quando reject()
    console.log('Operação sequencial: ', erro)
}).then(() => { // Os .then() depois do catch são executados
    // mesmo se o catch não for
    console.log('Then 1')
})