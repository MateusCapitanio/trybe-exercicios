const alex = {
    name: 'Alex',
    age: 26,
    likes: ['fly fishing'],
    nationality: 'Australian',
  };
  
  const gunnar = {
    name: 'Gunnar',
    age: 30,
    likes: ['hiking', 'scuba diving', 'taking pictures'],
    nationality: 'Icelandic',
  };

  const {name, age, likes} = alex
  

  // complete a assinatura da função abaixo
  const personLikes = () => `${name} is ${age} years old and likes ${likes.join(', ')}.`;
  
  const {name: name2, age: age2, likes: likes2} = gunnar

  const personLikes2 = () => `${name2} is ${age2} years old and likes ${likes2.join(', ')}.`;
  

  console.log(personLikes(alex))// 'Alex is 26 years old and likes fly fishing.'
  console.log(personLikes2(gunnar)) // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

  //console.log(...likes)