/* TELA DO JOGO */
var altura = 0
var largura = 0

function ajustaTamanhoTela(){
    altura = window.innerHeight
    largura = window.innerWidth
}

/* GERANDO O MOSQUITO */
var quantVidas = 3

var criaMosquitoTempo = 1500

var nivel = window.location.search // Recupera o ? e tudo dps dele
nivel = nivel.replace('?', '') // Remove o ? -> temos o nível
if(nivel === 'Facil'){
    criaMosquitoTempo = 2000
} else if(nivel === 'Normal'){
    criaMosquitoTempo = 1500
} else if(nivel === 'Dificil'){
    criaMosquitoTempo = 1000
}

function posicaoRandomica(){
    // Removendo mosquito pré-existente
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if(quantVidas > 1){
            document.getElementById('vida' + quantVidas).src = 'imagens/coracao_vazio.png'
            quantVidas--
        } else {
            window.location.href = 'fim_de_jogo.html'
        }
    }

    // Posições randômicas (-200 pra n tocar a borda)
    var posicaoX = Math.floor(Math.random() * largura) - 200
    var posicaoY = Math.floor(Math.random() * altura) - 200

    posicaoX = (posicaoX < 0) ? 200 : posicaoX
    posicaoY = (posicaoY < 0) ? 200 : posicaoY

    var mosquito = document.createElement('img') // Cria elemento

    mosquito.src = 'imagens/mosca.png' // Definindo src. da imagem
    
    // Posição do mosquito na tela
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'

    // Classes do mosquito
    mosquito.className = tamanhoRandomico() // Tamanho
    mosquito.className += ' ' + ladoAleatorio() // Lado

    // Id
    mosquito.id = 'mosquito'

    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito) // Add. elem. ao body
}

function tamanhoRandomico(){
    var classe = Math.floor(Math.random() * 3) + 1

    switch(classe){
        case 1:
            return 'mosquito1'
        case 2:
            return 'mosquito2'
        case 3:
            return 'mosquito3'
    }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0:
            return 'esquerda'
        case 1:
            return 'direita'
    }
}

/* CRONOMETRO */
var tempo = 100
var cronometro = setInterval(function(){
    tempo--

    if(tempo >= 0){
        document.getElementById('cronometro').innerHTML = tempo
    } else {
        window.location.href = 'vitoria.html'

        // Limpeza de memória!
        clearInterval(cronometro)
        clearInterval(criaMosquito)
    }
}, 1000)