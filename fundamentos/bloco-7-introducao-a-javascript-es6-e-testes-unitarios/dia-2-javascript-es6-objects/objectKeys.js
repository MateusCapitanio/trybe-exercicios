const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    author: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
};

const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };
  

const keys = Object.keys(student2)

console.log(keys[5])

//console.table(Object.keys(coolestTvShow));
  
// name
// genre
// author
// favoriteCharacter
// quote
// seasons

//console.table(coolestTvShow)