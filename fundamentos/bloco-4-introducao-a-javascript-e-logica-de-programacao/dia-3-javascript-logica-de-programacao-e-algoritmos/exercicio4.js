
//verificar se um número é primo ou Não

var number = 112;
var cont = 0;

for(i=0;i<=number;i+=1) {
    if(number%i===0) {
        cont+=1
    }
}

if(cont>2) {
    console.log(`[${number}]:Este valor não é primo`)
} else {
    console.log(`[${number}]:Este valor é primo`)
}