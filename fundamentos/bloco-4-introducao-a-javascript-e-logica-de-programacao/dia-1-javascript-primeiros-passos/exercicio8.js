
//Verificando se um número é par

const numbers = [99,11,37];


var cont=0;


for (var i=0; i < numbers.length; i++) {
    if((numbers[i]%2)===0) {
        cont++
    }
}

if (cont>0) {
    res = true;
    console.log(`[${res}] Existe pelo menos um valor par`)
} else {
    res = false;
    console.log(`[${res}] Não existe nenhum valor par`)
}



