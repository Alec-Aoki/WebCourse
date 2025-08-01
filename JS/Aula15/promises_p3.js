/* Asynchronous Iteration */
let processos = [1, 2, 3, 4, 5]

// Se tivessemos só o for, os disparos seriam basicamente ao mesmo tempo
// Colocando dentro de uma async function, o loop espera a promise terminar
let iteracaoAssincrona = async function(){
    for (let processo in processos){
        // Processamento assíncrono
        await new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    console.log('Processamento assíncrono')
                    resolve()
                }, 2000)
            }
        )
    }
}

iteracaoAssincrona()

/* Finally */
let promessa = new Promise(
    (resolve, reject) => {
        if(false){
            reject('Rejeitada')
        }

        resolve('Resolvida')
    }
)
.then(
    (resultado) => {
        console.log(resultado)
    }
)
.catch(
    (rejeitado) => {
        console.log(rejeitado)
    }
)
.finally(
    // Executado em ambos os casos (resolve ou reject), portanto,
    // não recebe nenhum parâmetro
    () => {
        console.log('Fluxo continua')
    }
)