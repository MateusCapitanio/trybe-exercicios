
//função para verificar se a string é um palíndromo
//consultei o link do stackoverflow pra resolver essa questao
//https://pt.stackoverflow.com/questions/315456/fun%C3%A7%C3%A3o-para-checar-pal%C3%ADndromo

var texto = 'arara';
var status = true;

function verificarTexto(texto,status) {
    if(texto.split('').reverse().join('') === texto) {
        status = true;
        console.log(`[${texto}]: Essa palavra é um palíndromo`)
    } else {
        status = false
        console.log(`[${texto}]: Essa palavra não é um palíndromo`)
    }
}


verificarTexto(texto);