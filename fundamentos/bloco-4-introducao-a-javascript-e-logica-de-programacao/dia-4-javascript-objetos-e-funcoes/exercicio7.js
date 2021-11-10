
var maior = 0;
var lista = [2, 3, 6, 7, 10, 1];

for(i=0;i<lista.length;i+=1) {
    if(lista[i]>maior) {
        maior = i
    }
}

console.log(`O índice do maior valor desse array é: [${maior}]`)