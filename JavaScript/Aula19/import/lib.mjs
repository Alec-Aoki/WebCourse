// Extensão mjs: módulo javascript
/* Dynamic Import */
export const saudacao = () => {
    let dataAtual = new Date().toLocaleDateString()

    return `Olá, seja muito bem-vindo. Hoje é ${dataAtual}`
}

export function getEnderecoByCEP(cep){
    return fetch(`https://viacep.com.br/ws/${cep}/json/`) // Promise
        .then(resposta => resposta.json())
}

export async function aguardarPromessa(){
    console.log('Início do processamento')

    function fetchDados(){
        return new Promise(
            (resolve) => {
                setTimeout(
                    resolve('Executou'),
                    3000
                )
            }
        )
    }

    const dados = await fetchDados() // await DENTRO da função assíncrona
    console.log(dados)

    console.log('Fim do processamento')
}