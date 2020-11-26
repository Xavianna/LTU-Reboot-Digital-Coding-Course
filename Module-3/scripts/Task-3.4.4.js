var recipe = {
    title: 'Pancakes',
    servings: 6,
    ingredients: [
        'flour', 
        'eggs', 
        'milk'],
    directions: 'Mix ingredients together and let settle for half an hour.'

}

console.log(recipe.title);
console.log(recipe.servings);

//Using for loops to run through the array.
var ingredientsPancakes = recipe.ingredients;

for (var index = 0; index < ingredientsPancakes.length; index++){
    console.log(ingredientsPancakes[index]);
}


// console.log(recipe.ingredients);
console.log(recipe.directions);

//Luke's example

var favouriteRecipe = {
    recipeTitle: 'Spaghetti Bolognese',
    servingsNo: 6,
    ingredientsNo: [
        '1 tbsp olive oil',
        '500g mince beef',
        'tomato sauce'
    ],
    directionsStyle: [
        'Step 1: ',
        'Step 2: '
    ]
}

console.log( favouriteRecipe.recipeTitle );
console.log( favouriteRecipe.servingsNo );
// console.log( favouriteRecipe.ingredientsNo );
// console.log( favouriteRecipe.directionsStyle );

var mainIngredients = favouriteRecipe.ingredientsNo;

for (var ing = 0; ing < mainIngredients.length; ing++ ){

    console.log( mainIngredients[ing] );
}