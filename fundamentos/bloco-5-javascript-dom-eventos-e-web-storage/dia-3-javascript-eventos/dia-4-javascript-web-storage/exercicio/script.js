

function pegaCorFundo() {

    var button = document.querySelector('#btn-cor-fundo')
    var color = document.querySelector('#colorFundo')
    var body = document.querySelector('body')
    

    button.addEventListener('click', function() {
        var valorCor = color.value
        var storage = localStorage
        var corSalva = storage.setItem('corFundo',valorCor)
        var corRetorna = storage.getItem('corFundo')
        body.style.backgroundColor = corRetorna
        console.log(storage)
    })
}

pegaCorFundo()

function pegaCorTexto() {

    var button = document.querySelector('#btn-cor-texto')
    var color = document.querySelector('#colorTexto')
    var texto = document.querySelector('p')
    

    button.addEventListener('click', function() {
        var valorCor = color.value
        var storage = localStorage
        var corSalva = storage.setItem('corTexto',valorCor)
        var corRetorna = storage.getItem('corTexto')
        texto.style.color = corRetorna
        console.log(corRetorna)
    })
}

pegaCorTexto()

function pegaNumber() {

    var button = document.querySelector('#btn-tam-font')
    var number = document.querySelector('#number')
    var texto = document.querySelector('p')
    

    button.addEventListener('click', function() {
        var valor = number.value
        var storage = localStorage
        var salvaNum = storage.setItem('valorNumber',valor)
        var RetornaNum = JSON.parse(storage.getItem('valorNumber'))
        texto.style.fontSize = RetornaNum + 'px'
        console.log(RetornaNum)
    })
}

pegaNumber()