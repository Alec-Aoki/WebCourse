// Extensão mjs: módulo javascript
export const saudacao = () => {
    let dataAtual = new Date().toLocaleDateString()

    return `Olá, seja muito bem-vindo. Hoje é ${dataAtual}`
}

export function getEnderecoByCEP(cep){
    return fetch(`https://viacep.com.br/ws/${cep}/json/`) // Promise
        .then(resposta => resposta.json())
}