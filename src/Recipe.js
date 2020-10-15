class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.name = recipe.name;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.tags = recipe.tags;
  }

  searchRecipesByTag(locationToCheck, keyword) {
    return locationToCheck.filter(recipe => {
      console.log(recipe.tags)
      return recipe.tags.includes(keyword);
    });
  }

  // searchRecipesByIngredient(locationToCheck, keyword) {
  //   locationToCheck.filter(recipe => {
  //     return recipe.ingredients.filter(ingredient => {
  //       let target = ingredient.name === keyword
  //       return ingredient.id === keyword.id;
  //     });
  //   })
  // }

  searchRecipesByIngredient(locationToCheck, keyword, ingredientsArr) {
    let ingredientID = this.nameToNum(keyword, ingredientsArr);
    const result = locationToCheck.reduce((recipeList, currentRecipe) => {
      currentRecipe.ingredients.forEach(ingredient => {
        if (ingredient.id === ingredientID) {
          recipeList.push(currentRecipe)
        };
      });
        console.log('searchRecipesByIngredient (acc) ==>', recipeList);
        return recipeList;
      }, []);
    return result;
  }

    // A user should be able to search recipes by ingredients.
    // Should search the array of ALL recipes and return ALL recipes that include the given ingredient.
    // Takes in the 'string' value name of an ingredient (and array to check),
    // Should return a new array of recipe objects.

    // Iterate over the array of all recipes (array of obj)
    // FOR EACH recipe object, iterate over the array of ingredient objects
    // IF the array of ingredients includes an object with an id number which matches the id number associated with the indicated indredient,
    // include the recipe objects which satisfy the condition in the new array of recipe objects to be returned

    // let ingredient =
    // return locationToCheck.filter(recipe => {

    // })

    nameToNum(ingredientName, ingredientsArr) {
      let ingredient = ingredientsArr.find(ingredient => ingredient.name === ingredientName)
      return ingredient.id;
    }

}

module.exports = Recipe;
