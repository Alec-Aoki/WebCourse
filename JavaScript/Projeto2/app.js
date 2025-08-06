/* CLASSES */
// Despesa
class Despesa {
    constructor(ano, mes, dia, tipo, descricao, valor){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }

    validarDados(){
        for(let i in this){
            if(this[i] == null || this[i] == undefined || this[i] == ''){
                return false
            }
        }

        return true
    }
}

// Banco de Dados
class BD {
    constructor(){
        let id = localStorage.getItem('id')
        if(id == null){
            // Inicializa o valor de id no Local Storage
            // (serve pra nos dizer o próx. id disponível)
            localStorage.setItem('id', 0)
        }
    }

    getProximoId(){
        return parseInt(localStorage.getItem('id')) + 1
    }

    gravar(objDespesa){
        // Gera um novo id
        let id = this.getProximoId()
        // Atualiza o valor do id no Local Storage
        localStorage.setItem('id', id)

        // Local Storage é mantido mesmo quando a sessão do navegador
        // é encerrada. Usamos a biblioteca JSON para armazenar o
        // objeto como string/JSON
        // Salvamos esse objeto despesa no Local Storage como uma
        // string JSON cuja chave/nome é o id
        localStorage.setItem(id, JSON.stringify(objDespesa))
    }

    recuperarTodosRegistros(){
        let arrayDespesas = Array()
        let id = localStorage.getItem('id')

        for(let i = 1; i <= id; i++){
            // JSON.parse() transforma uma string JSON de volta em
            // objeto
            let despesaAtual = JSON.parse(localStorage.getItem(i))
            if(despesaAtual != null){
                despesaAtual.id = i // Inserindo um novo atributo no objeto
                arrayDespesas.push(despesaAtual) // Inserindo no array
            }
        }

        return arrayDespesas
    }

    pesquisar(despesaProcurada){
        let despesasFiltradas = Array()
        despesasFiltradas = this.recuperarTodosRegistros()

        // Ano
        if(despesaProcurada.ano != ''){
            despesasFiltradas = despesasFiltradas.filter(despesa => despesa.ano == despesaProcurada.ano)
        
        }
        // Mes
        if(despesaProcurada.mes != ''){
            despesasFiltradas = despesasFiltradas.filter(despesa => despesa.mes == despesaProcurada.mes)
        }
        // Dia
        if(despesaProcurada.dia != ''){
            despesasFiltradas = despesasFiltradas.filter(despesa => despesa.dia == despesaProcurada.dia)
        }
        // Tipo
        if(despesaProcurada.tipo != ''){
            despesasFiltradas = despesasFiltradas.filter(despesa => despesa.tipo == despesaProcurada.tipo)
        }
        // Descricao
        if(despesaProcurada.descricao != ''){
            despesasFiltradas = despesasFiltradas.filter(despesa => despesa.descricao == despesaProcurada.descricao)
        }
        // Valor
        if(despesaProcurada.valor != ''){
            despesasFiltradas = despesasFiltradas.filter(despesa => despesa.valor == despesaProcurada.valor)
        }

        return despesasFiltradas
    }

    remover(id){
        localStorage.removeItem(id)
    }
}

/* FUNÇÕES */
let bancoDeDados = new BD()

function cadastrarDespesa(){
    // Pegando os elementos dos formulários
    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')

    let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')

    // Criando novo objeto despesa com os valores dos elementos
    // ano.value <=> document.getElementById('ano').value
    let despesa = new Despesa(
        ano.value,
        mes.value,
        dia.value,
        tipo.value,
        descricao.value,
        valor.value
    )

    // Pop-up (modal)
    if(despesa.validarDados()){
        bancoDeDados.gravar(despesa)
        $('#sucessoGravacao').modal('show')
    } else {
        $('#erroGravacao').modal('show')
    }

    // Limpando formulário
    ano.value = ''
    mes.value = ''
    dia.value = ''
    tipo.value = ''
    descricao.value = ''
    valor.value = ''
}

/*
<tr>
    <td> Dia/Mes/Ano <td> <!-- 0 -->
    <td> Tipo <td> <!-- 1 -->
    <td> Descricao <td> <!-- 2 -->
    <td> Valor <td> <!-- 3 -->
<tr>
*/
function carregaListaDespesas(despesas = Array(), filtro = false){
    // Se não passarmos nenhum array, carrega todos
    if(despesas.length == 0 && filtro == false){
        despesas = bancoDeDados.recuperarTodosRegistros()
    }

    // Selecionando elemento <tbody>
    let listaDespesas = document.getElementById('listaDespesas')
    listaDespesas.innerHTML = ''

    despesas.forEach(
        function(despesa){
            // Criando as linhas (<tr>)
            let linha = listaDespesas.insertRow()

            // Criando as colunas (<td>)
            // Data
            linha.insertCell(0).innerHTML = `${despesa.dia}/${despesa.mes}/${despesa.ano}`
            // Tipo
            switch(parseInt(despesa.tipo)){
                case 1:
                    linha.insertCell(1).innerHTML = `Alimentação`
                    break;
                case 2:
                    linha.insertCell(1).innerHTML = `Educação`
                    break;
                case 3:
                    linha.insertCell(1).innerHTML = `Lazer`
                    break;
                case 4:
                    linha.insertCell(1).innerHTML = `Saúde`
                    break;
                case 5:
                    linha.insertCell(1).innerHTML = `Transporte`
                    break;
            }
            // Descrição
            linha.insertCell(2).innerHTML = `${despesa.descricao}`
            // Valor
            linha.insertCell(3).innerHTML = `${despesa.valor}`
            // Exclusão
            let btn = document.createElement('button')
            btn.className = 'btn btn-danger'
            btn.innerHTML = '<i class="fas fa-times"></i>'
            btn.id = `id_despesa_${despesa.id}`
            btn.onclick = function(){
                // Removendo a despesa
                let idPuro = this.id.replace('id_despesa_', '')
                bancoDeDados.remover(idPuro)

                // Atualizando a página
                window.location.reload()
            }
            linha.insertCell(4).append(btn)
        }
    )
}

function pesquisarDespesas(){
    // Pegando os elementos dos formulários
    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')

    let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')

    // Criando novo objeto despesa com os valores dos elementos
    // ano.value <=> document.getElementById('ano').value
    let despesaProcurada = new Despesa(
        ano.value,
        mes.value,
        dia.value,
        tipo.value,
        descricao.value,
        valor.value
    )

    let despesasEncontradas = Array()
    despesasEncontradas = bancoDeDados.pesquisar(despesaProcurada)

    this.carregaListaDespesas(despesasEncontradas, true)

    // Limpando formulário
    ano.value = ''
    mes.value = ''
    dia.value = ''
    tipo.value = ''
    descricao.value = ''
    valor.value = ''
}