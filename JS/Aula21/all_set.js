const promise1 = new Promise(
    (resolve, reject) => {
        return setTimeout(
            () => resolve('Promise 1 resolvida'),
            3000
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
            4000
        )
    }
)

// Coleção de promessas
const promises = [promise1, promise2, promise3]

/* Promise allSettled */
// Ação a ser tomada após a conclusão de todas as promises
// em uma coleção de promessas
Promise.allSettled(promises)
    .then(
        (resultados) => {
            console.log('\nAll settled')

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

/* Any */
// Recebe uma coleção de promises e dispara uma ação
// quando qualquer promise da coleção for RESOLVIDA
// Caso uma promise seja rejeitada, ela é desconsiderada e
// espera pela próxima que é resolvida
// Se todas as promises forem rejeitadas, dispara um erro
Promise.any(promises)
    .then(
        (resolvida) => {
            console.log('\nAny')
            console.log(resolvida)
        }
    )