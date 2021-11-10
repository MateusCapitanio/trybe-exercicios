
var nomes = ['José', 'Lucas', 'Nádia','Fernanda', 'Cairo', 'Joana'];
var valorNome= 0;
var maiorNome = '';


for(i=0;i<nomes.length;i+=1) {

    if(nomes[i].length>valorNome) {
        valorNome = nomes[i].length
        maiorNome = nomes[i]
    }
}

console.log(`Maior nome: ${maiorNome} // Caracteres: {${valorNome}}`)
