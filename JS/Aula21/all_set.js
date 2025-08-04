/* Promise allSettled */

const promise1 = new Promise(
    (resolve, reject) => {
        return setTimeout(
            () => resolve('Promise 1 resolvida'),
            2000
        )
    }
)

const promise2 = new Promise(
    (resolve, reject) => {
        return setTimeout(
            () => reject('Promise 2 rejeitada'),
            2000
        )
    }
)

const promise3 = new Promise(
    (resolve, reject) => {
        return setTimeout(
            () => resolve('Promise 3 resolvida'),
            2000
        )
    }
)

// Coleção de promessas
const promises = [promise1, promise2, promise3]

// Ação a ser tomada após a conclusão de todas as promises
// em uma coleção de promessas
Promise.allSettled(promises)
    .then(
        (resultados) => {
            resultados.forEach(
                (resultado) => {
                    if(resultado.status == 'fulfilled'){
                        console.log(resultado.value)
                    } else {
                        console.log(resultado.reason)
                    }
                }
            )
        }
    )