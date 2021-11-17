
function pegarValor() {
    let listaAfazeres = document.querySelector('.listaAfazeres');
    let input = document.querySelector('#inputValues');
    let texto = input.value;

    let listItem = document.createElement('li');
    listItem.className = 'listaItem'
    listItem.innerText = texto;

    listaAfazeres.appendChild(listItem);
}


function deletar() {
    let item = document.querySelector('.listaItem')

    item.parentNode.removeChild(item)
}

