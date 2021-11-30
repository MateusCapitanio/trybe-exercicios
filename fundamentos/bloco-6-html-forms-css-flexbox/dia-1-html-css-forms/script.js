
var button = document.querySelector('#button-envia');
var inputs = document.querySelectorAll('input');
var textareas = document.querySelectorAll('textarea')

button.addEventListener('click',function(event) {
    event.preventDefault()
    for(let i=0;i<inputs.length;i+=1) {
        inputs[i].value = ''
    }

    for(let i=0;i<textareas.length;i+=1) {
        textareas[i].value = ''
    }
    
})