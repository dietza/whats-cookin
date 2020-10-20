
class IngredientRepository {
  constructor(ingredientData) {
    this.ingredients = instantiateIngredients(ingredientData);
  }
  //will: It would seem there is work to be done here. We're giving ingredientData--raw data--
  //ALlison: It seems like we should be passing in the instantiated ingredients...
  //Will part of the responsibility of the ingredient repository should be to take the ingredient data, and then run a function to instantiate all the objects.
  //what if we said "this.ingredients = create all instantiated ingredients"
  //allison: So the right side of the assignment on 4 would be the invocation of a helper function
  //will: and that helper function would return to you an array of ingredient objects
  //

  instantiateIngredients(ingredientData) {
    let result = ingredientData.reduce((acc, currentIngredient) => {

      let instantiatedIngredient = new Ingredient(currentIngredient);

      // We want to normalize the ingredients data array
      // For each ingredient in the array of ALL INGREDIENT data,
      // INSTANTIATE that ingredient as an object through the Ingredient class constructor
      // and RETURN an array of the instantiated / normalized dataset

      // The normailized ingredient object should look-a like disss:
      //
      // {
      //   id: 20081,
      //   name: "wheat flour",
      //   estimatedCostInCents: 142
      // }

    }, [])
    return result;
  }


}

if (typeof module !== 'undefined') {
  module.exports = recipeRecipository;
}
