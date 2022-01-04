const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    const lista = arrays.reduce((total,arrays) => [total+arrays])
    console.log(lista)
  }

  flatten()