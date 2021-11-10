
var lista = [2, 3, 6, 100,1, 7, 10,200];
var maior=0;
var menor = 0;

for(i=0;i<lista.length;i+=1) {
    if(lista[i]>maior) {
        maior = lista[i]
    }
}

console.log(`Maior valor: ${maior}`)

for(i=0;i<lista.length;i+=1) {
    if(lista[i]<maior) {
        maior=lista[i]
        menor = i;
    }
}


console.log(`Menor Valor: ${maior} // Índice[${menor}]`)