
//consultei o link https://www.w3schools.com/jsref/jsref_tolowercase.asp 
//para verificar o uso do lowercase()

var peça = 'cavalo';


switch (peça.toLowerCase()) {
    case 'bispo':
        console.log('diagonais')
        break;
    
    case 'torre':
        console.log('frente todas as casas livres')
        break;

    case 'peão':
        console.log('frente uma casa livre')
        break

    case 'cavalo':
        console.log('se move em L')
        break

    default:
        break;
}



