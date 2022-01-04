const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    const arraySeparated = names.map((element) => {
      return element.split('')
    })
    var qtd = 0;
    const lettersA = names.forEach((element) => {
      const nomesCortados = element.split('')
      nomesCortados.reduce((accumulator,element) => {
        if(element === 'a' || element === 'A') {
          qtd +=1;
        }
      },0)
    })
    console.log('Quantidade totais de letras A nos nomes é: ',qtd)
  }

  containsA()