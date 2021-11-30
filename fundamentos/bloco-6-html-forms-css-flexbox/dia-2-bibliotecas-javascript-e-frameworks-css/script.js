var titulo = document.querySelector('h1').innerText
var paragrafo = document.querySelector('#paragrafo')
var button = document.querySelector('#button')
var input = document.querySelector('#itens-lista')
var listaTarefas = []

//localStorage.clear()

function puxaStorage() {
    listaTarefas = JSON.parse(localStorage.getItem('itens'))
}

if(localStorage.getItem('itens') === '') {
    puxaStorage()
}

button.addEventListener('click', function() {
    var li = document.createElement('li')
    li.style.listStyleType = 'none'
    let valor = input.value
    listaTarefas.push(valor)
    li.innerText = valor
    let jsonLista = JSON.stringify(listaTarefas)
    localStorage.setItem('itens',jsonLista)
    paragrafo.appendChild(li)
    document.getElementById('itens-lista').value = ''
})

const pegaValores = () => {

    var retornaValor = JSON.parse(localStorage.getItem('itens'))

    for(let i=0;i<retornaValor.length;i+=1) {
        let li = document.createElement('li')
        li.innerText = retornaValor[i]
        paragrafo.appendChild(li)
    }
}

pegaValores()


var buttonApagar = document.querySelector('#btn-apagar')


buttonApagar.addEventListener('click',function() {
    for(let i=0;i<paragrafo.childNodes.length;i+=1) {
        console.log(paragrafo.childNodes[i])
    }
    
})
