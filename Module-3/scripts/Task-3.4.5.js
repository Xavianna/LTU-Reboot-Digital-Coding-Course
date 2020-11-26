var recipe = {
    title: 'Pancakes',
    servings: 6,
    ingredients: [
        'flour', 
        'eggs', 
        'milk'],
    directions: 'Mix ingredients together and let settle for half an hour.'

},

// console.log(recipe.title);
// console.log(recipe.servings);

// //Using for loops to run through the array.
// var ingredientsPancakes = recipe.ingredients;

// for (var index = 0; index < ingredientsPancakes.length; index++){
//     console.log(ingredientsPancakes[index]);
// }


letsCook: function() {
    /*I'm hungry! Let's cook...with the name of your receipe title. Call your new method*/
    console.log("I'm hungry! Let's cook " + recipe.title);
}

// recipe.letsCook();

