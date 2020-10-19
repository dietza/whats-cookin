class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.name = recipe.name;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.tags = recipe.tags;
  }

  getCost(selectedRecipe, ingredientsArr) {
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

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
