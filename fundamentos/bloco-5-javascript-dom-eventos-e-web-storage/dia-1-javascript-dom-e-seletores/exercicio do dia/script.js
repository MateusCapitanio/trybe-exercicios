var segundoParagrafo = document.querySelectorAll('p')[1]
segundoParagrafo.innerHTML = 'Eu me vejo como um profissional bem capacitado trabalhando com desenvolvimento de Softwares web e mobile';

var caixaLateral = document.getElementsByClassName('main-content')[0];
caixaLateral.style.backgroundColor = 'blue'

var caixaCentral = document.getElementsByClassName('center-content')[0];
caixaCentral.style.backgroundColor = 'white'

var h1Tag = document.getElementsByTagName('h1')[0];
h1Tag.innerHTML = 'Exercício 5.1 - Javascript';

document.querySelectorAll('p')[0].innerHTML = document.querySelectorAll('p')[0].innerText.toUpperCase()

function valoresParagrafo() {
    let paragrafos = document.querySelectorAll('p')
    for(i=0;i<paragrafos.length;i+=1) {
        console.log(paragrafos[i].innerText)
    }
}

valoresParagrafo()

