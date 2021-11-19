


window.onload = function() { //window.load serve pra executar algo quando a pagina esta carregada
    const button = document.querySelector('#button')
    var car1 = document.querySelector('#car1')
    var car2 = document.querySelector('#car2')

    car1.style.marginLeft = 0+'px'
    car2.style.marginLeft = 0+'px'

    //1. Qual o tipo de evento deve ser escutado?
    //2. O que deve ser executado quando o evento for disparado?
    button.addEventListener('click',function () {
        

        number = Math.random()*100
        number2 = Math.random()*100

        car1.style.marginLeft = parseInt(car1.style.marginLeft) + number + 'px'
        car2.style.marginLeft = parseInt(car2.style.marginLeft) + number2 + 'px'


        function win() {
            if(parseInt(car1.style.marginLeft) > window.innerWidth) {
                alert('Azul vencedor')
                car1.style.marginLeft = 0+'px'
                car2.style.marginLeft = 0+'px'
            } else if (parseInt(car2.style.marginLeft) > window.innerWidth) {
                alert('Vermelho vencedor')
                car1.style.marginLeft = 0+'px'
                car2.style.marginLeft = 0+'px'
            }
        }
    
        win()
    });
}

