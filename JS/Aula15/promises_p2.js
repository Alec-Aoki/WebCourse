/* Async e Await */
// Como as promises são assíncronas, podemos usar esses métodos para executá-las
// na ordem certa, definindo a função como async e usando o await

let processoAssincrono = new Promise(
    (resolve, reject) => {
        setTimeout(() => resolve('Sucesso no processo assíncrono'), 3000)
    }
)

async function recuperarDados(){
    // O await espera a promise retornar e aí segue normalmente
    await processoAssincrono.then(param => console.log(param))

    console.log('Processamento assíncrono 1')

    // API (req. http), retorna uma Promise
    await fetch('https://jsonplaceholder.typicode.com/comments')
        .then(resposta => resposta.json())
        .then(dados => console.log('Comentarios: ', dados))

    await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(resposta => resposta.json())
        .then(dados => console.log('Posts: ', dados))

    console.log('Processamento assíncrono 3')

    return 'Fim'
}

// OBS: Ao usar async, a função se torna uma Promise!
recuperarDados().then(p => console.log(p))

// Desse modo, a ordem dos métodos assíncronos sempre vai ser
// processoAssincrono -> comments -> posts