
class RecipeRepository {
  constructor(recipeData) {
    this.recipes = recipeData
  }
}

if (typeof module !== 'undefined') {
  module.exports = recipeRecipository;
}
