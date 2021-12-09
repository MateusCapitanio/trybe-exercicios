function encode(texto) {
    let novoTexto='';
    for(i of texto) {
      if(i==='a') {
        i=1;
        novoTexto+=i
      } else if(i==='e') {
        i=2;
        novoTexto+=i
      } else if(i==='i') {
        i=3;
        novoTexto+=i
      } else if(i==='o') {
        i=4;
        novoTexto+=i
      } else if(i==='u') {
        i=5;
        novoTexto+=i
      } else {
        novoTexto+=i
      }
    }
    return novoTexto
  }


function decode(texto) {
let novoTexto='';
for(i of texto) {
    if(i==1) {
        i='a';
        novoTexto+=i
        } else if(i==2) {
        i='e';
        novoTexto+=i
        } else if(i==3) {
        i='i';
        novoTexto+=i
        } else if(i==4) {
        i='o';
        novoTexto+=i
        } else if(i==5) {
        i='u';
        novoTexto+=i
        } else {
        novoTexto+=i
    }
    }
    //if(typeof decode === 'function') return 'function' 
    return novoTexto
}

  module.exports = {
      encode,
      decode
  }