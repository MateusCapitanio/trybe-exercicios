const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  
    var alunosNotas = [];
    const aluno1 = grades[0].reduce((accumulator,element) => {
        return accumulator + element
    },0)
    var mediaAluno1 = aluno1/grades[0].length
    alunosNotas.push({name:students[0],average:mediaAluno1})
    const aluno2 = grades[1].reduce((accumulator,element) => {
        return accumulator + element
    },0)
    var mediaAluno2 = aluno2/grades[1].length
    alunosNotas.push({name:students[1],average:mediaAluno2})
    const aluno3 = grades[2].reduce((accumulator,element) => {
        return accumulator + element
    },0)
    var mediaAluno3 = aluno3/grades[2].length
    alunosNotas.push({name:students[2],average:mediaAluno3})
    
    
    console.log(alunosNotas)
}

studentAverage()





/* const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
]; */