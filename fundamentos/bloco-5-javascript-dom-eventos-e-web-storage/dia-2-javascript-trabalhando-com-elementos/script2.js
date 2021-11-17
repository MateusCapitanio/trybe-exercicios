const ingredients = [
    'banana',
    'laranja',
    'maçã',
    'tangerina',
    'couve',
    'batata',
    'manteiga'
]

var ingredientList = document.querySelector('.ingredients');

for(i=0;i<ingredients.length;i+=1) {

    var ingredient = ingredients[i];
    var ingredientListItem = document.createElement('li');
    ingredientListItem.innerText = ingredient
    ingredientList.appendChild(ingredientListItem)
}
