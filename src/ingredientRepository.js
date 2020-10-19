
class IngredientRepository {
  constructor(ingredientData) {
    this.ingredients = ingredientData
  }
  //will: It would seem there is work to be done here. We're giving ingredientData--raw data--
  //ALlison: It seems like we should be passing in the instantiated ingredients...
  //Will part of the responsibility of the ingredient repository should be to take the ingredient data, and then run a function to instantiate all the objects.
  //what if we said "this.ingredients = create all instantiated ingredients"
  //allison: So the right side of the assignment on 4 would be the invocation of a helper function
  //will: and that helper function would return to you an array of ingredient objects
  //
}

if (typeof module !== 'undefined') {
  module.exports = recipeRecipository;
}
