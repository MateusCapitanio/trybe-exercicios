function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  
  

  
function adicionaDias() {
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
var listaDias = document.querySelector('#days')


for(i=0;i<dezDaysList.length;i+=1) {
    var itemDia = document.createElement('li');
    var adicionaItem = itemDia.innerHTML = dezDaysList[i]

    

    switch (dezDaysList[i]) {
        case 24:
            itemDia.className = 'day-holiday'
            break
        case 31:
            itemDia.className = 'day-holiday'
            break
        case 4:
            itemDia.className = 'day-friday'
            break
        case 11:
            itemDia.className = 'day-friday'
            break
        case 18: 
            itemDia.className = 'day-friday'
            break
        default:
            break;
    }

    if(dezDaysList[i] === 25) {
        itemDia.className = 'day-friday day-holiday'
    }

    listaDias.appendChild(itemDia)
}
}

adicionaDias()


function criaBotaoFeriado() {
    let botaoLista = document.querySelector('.buttons-container')
    let botao = document.createElement('button')
    let botaoTexto = botao.innerText = 'Feriados'

    botao.id = 'btn-holiday'
    
    botaoLista.appendChild(botao)
}

criaBotaoFeriado()

const button = document.querySelector('#btn-holiday')

button.addEventListener('click', function(){
    var feriados = document.querySelectorAll('.day-holiday')

    for(i=0;i<feriados.length;i+=1) {
        feriados[i].style.backgroundColor = 'rgb(133, 31, 31)'
    }
})

function criaBotaoSexta() {
    let botaoLista = document.querySelector('.buttons-container')
    let botao = document.createElement('button')
    let botaoTexto = botao.innerText = 'Friday'

    botao.id = 'btn-friday'
    
    botaoLista.appendChild(botao)
}

criaBotaoSexta()

function zoom() {

    var listaDias = document.querySelector('#days')

    var dia = listaDias.children 

    /*for(i=0;i<dia.length;i+=1) {
        dia[i].addEventListener('mouseover',function() {
            dia[i].style.fontSize = '30px'
        })
    
        dia[i].addEventListener('mouseout',function() {
            dia[i].style.fontSize = '20px'
        })
    }*/
}

function adicionaTarefa(string) {
    var tarefas = document.querySelector('.my-tasks')
    var tarefaItem = document.createElement('span')

    tarefaItem.innerText = string

    tarefas.appendChild(tarefaItem)
}

adicionaTarefa('Ir para academia')


function adicionaCorTarefa(color) {
    var tarefas = document.querySelector('.my-tasks')
    var tarefaCor = document.createElement('div')

    tarefaCor.className = 'task'

    tarefaCor.style.backgroundColor = color

    tarefas.appendChild(tarefaCor)

    return color
}

adicionaCorTarefa('aquamarine')

function selectTask() {
    const task = document.querySelector('.task')

    task.addEventListener('click',function() {
        task.className += ' task-selected'
        console.log(task)
    })    
}

selectTask()

function marcaDias() {
    var listaDias = document.querySelector('#days')

    var dia = listaDias.children 

    for(i=0;i<dia.length;i+=1) {
        if(dia[i].addEventListener('click', function() {
            dia[i].style.backgroundColor = 'blue'
        })) {

        }
        console.log(dia[i])
    }
}

marcaDias()