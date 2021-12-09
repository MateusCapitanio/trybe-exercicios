const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

const allLessons = {
    lesson1: {
        materia: 'Matemática',
        numeroEstudantes: 20,
        professor: 'Maria Clara',
        turno: 'manhã',
    },
      
    lesson2: {
        materia: 'História',
        numeroEstudantes: 20,
        professor: 'Carlos',
    },
      
    lesson3: {
        materia: 'Matemática',
        numeroEstudantes: 10,
        professor: 'Maria Clara',
        turno: 'noite',
    }
}


const adicionaTurno = (lesson2,turno,valorTurno) => {

}

adicionaTurno()

const mostraKeys = () => {

}

mostraKeys()

const tamanhoObj = () => {

}

tamanhoObj()

const mostraValores = (lesson,position) => {
    if(lesson === lesson1) {
        lesson = Object.values(allLessons)[0]
        let valoresLesson = Object.values(lesson)[position]
        console.log(valoresLesson)
    } else if (lesson === lesson2) {
        lesson = Object.values(allLessons)[1]
        let valoresLesson = Object.values(lesson)[position]
        console.log(valoresLesson)
    } else if(lesson === lesson3) {
        lesson = Object.values(allLessons)[2]
        let valoresLesson = Object.values(lesson)[position]
        console.log(valoresLesson)
    } else {
        console.log('Insira um valor válido por favor')
    }
}

//mostraValores(lesson1,2)


const contaEstudantes = () => {
    let numEstudantes = 0
    for (let i = 0; i < Object.values(allLessons).length; i+=1) {
        numEstudantes += Object.values(allLessons)[i].numeroEstudantes       
    }
    console.log(`O total de estudantes na turma é de: ${numEstudantes} Alunos`) 
}

//contaEstudantes()

const verifyPair = (lesson) => {
    let keysValor = Object.entries(allLessons)
    let valores;
    let valida;

    if(lesson === 'lesson1') {
        valores = Object.entries(keysValor[0][1])
        for (let i = 0; i < valores.length; i++) {
            if(valores[i] == `[ 'materia', 'Matemática' ]`) {
                console.log(1)
            }
        }
        console.log(valores[0])
    }
    
}

verifyPair('lesson1')