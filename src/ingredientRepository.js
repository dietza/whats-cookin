
class IngredientRepository {
  constructor(ingredientData) {
    this.ingredients = ingredientData
  }
}

if (typeof module !== 'undefined') {
  module.exports = recipeRecipository;
}
