
//Transformando notas de % em conceitos A a F

var nota = 25;

if(nota < 0 || nota > 100) {
    console.log('O valor definido não é válido')
} else if(nota >=90) {
    nota = 'A';
    console.log(nota)
} else if(nota >=80) {
    nota = 'B';
    console.log(nota)
} else if(nota >=70) {
    nota = 'C';
    console.log(nota)
} else if(nota>=60) {
    nota  = 'D';
    console.log(nota)
} else if(nota>=50) {
    nota = 'E';
    console.log(nota)
} else if(nota<50) {
    nota = 'F';
    console.log(nota)
}



