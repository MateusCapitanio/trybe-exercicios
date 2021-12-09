/*
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checarRespostas = (RIGHT_ANSWERS,STUDENT_ANSWERS) => {
    let nota = 0
    for (let i = 0; i < RIGHT_ANSWERS.length; i+=1) {
        if(STUDENT_ANSWERS[i] === RIGHT_ANSWERS[i]) {
            nota+=1
        } else if(STUDENT_ANSWERS[i] !== RIGHT_ANSWERS[i]) {
            nota-=0.5
        }
    }
    console.log(nota)
}

checarRespostas(RIGHT_ANSWERS,STUDENT_ANSWERS)*/


const somaValores = (arrayRight) => {
    return (arrayStudent) => {
        let nota = 0;
        for (let i = 0; i < arrayRight.length; i+=1) {
            if(arrayStudent[i] === arrayRight[i]) {
                nota+=1
            }           
        }
        return `O aluno tirou: ${nota}`
    }
}

const comparacaoDeNotaAluno1 = somaValores(['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'])
const comparacaoDeNotaAluno2 = somaValores(['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'])

console.log(comparacaoDeNotaAluno1(['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B']))
console.log(comparacaoDeNotaAluno2(['A', 'C', 'B', 'D', 'A', 'C', 'D', 'A', 'D', 'B']))