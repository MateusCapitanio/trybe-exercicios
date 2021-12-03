
/*const fatorial = (number) => {
    let cont = number-1;

    do {
        number = number*cont
        cont-=1
    } while (cont>1);
    console.log(number)
}

fatorial(15)

const maiorPalavra = (frase) => {
    var fraseTotal = frase.split(' ')
    console.log(fraseTotal) 
}

maiorPalavra('inconstitucinalicimamente')
*/

var texto = ''
const substituiX = (frase) => {
    for (let i = 0; i < frase.length; i+=1) {
        if(frase[i]=== 'x' || frase[i] === 'X') {
            texto += 'Mateus'
        } else {
            texto += frase[i]
        }
    }
}

substituiX('Olá Tryber [x]!')

const skills = ['javascript','css','html','reactJS','reactNative']

var div = document.querySelector('div');

const adicionaSkills = () => {
    div.innerText = `${texto} minhas principais habilidades são:\n`
    let skillsOrdem = skills.sort()
    for (let i = 0; i < skills.length; i+=1) {
        let li = document.createElement('li')
        li.innerText = skillsOrdem[i]
        div.appendChild(li)
    }
}

adicionaSkills()
