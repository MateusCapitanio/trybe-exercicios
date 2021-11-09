
var n = 5;

var estrelas = '';
var espaco = '';


for(let i = 0;i<n;i+=1) {
    estrelas+='*';
    if(i===0) {
        espaco = '    '
    } else if(i===1) {
        espaco = '   '
    } else if(i===2) {
        espaco= '  '
    } else if(i===3) {
        espaco= ' '
    } else if(i===4) {
        espaco= ''
    }
    console.log(espaco,estrelas)
}

