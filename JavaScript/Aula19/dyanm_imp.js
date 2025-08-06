// Importanto módulo (ver .html também)
//import {saudacao, getEnderecoByCEP} from './import/lib.mjs' // Carregamento estático de módulos

/* 
console.log(saudacao())
getEnderecoByCEP('25520171')
    .then(dados => console.log(dados))
*/

// Método 1
/*
document.querySelector('#btnSaudacao').addEventListener('click', () => {
    // Dynamic import
    import('./import/lib.mjs') // É uma promise
        .then(modulo => console.log(modulo.saudacao()))
})
*/

// Método 2
document.querySelector('#btnSaudacao').addEventListener('click', async () => {
    // Dynamic import
    const modulo = await import('./import/lib.mjs') // É uma promise
    console.log(modulo.saudacao())
})

// Método 1
/*
document.querySelector('#btnCEP').addEventListener('click', () => {
    let cep = document.querySelector('#cep').value
    
    if(cep.length == 8){
        import('./import/lib.mjs')
        .then(modulo => {
            modulo.getEnderecoByCEP(cep)
                .then(dados => console.log(dados))
        })
    }
})
*/

// Método 2
document.querySelector('#btnCEP').addEventListener('click', async () => {
    let cep = document.querySelector('#cep').value
    
    if(cep.length == 8){
        const modulo = await import('./import/lib.mjs')
        modulo.getEnderecoByCEP(cep)
            .then(dados => console.log(dados))
    }
})