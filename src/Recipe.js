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

    getCost(selectedRecipe, ingredientsArr){
      const result = selectedRecipe.ingredients.reduce((total, currentIngredient) => {
          ingredientsArr.find(ingredient => {
           ingredient.id === currentIngredient.id
            return total += ingredient.estimatedCostInCents
          })
        return total
      }, 0)
      return result
    }

    }

module.exports = Recipe;
