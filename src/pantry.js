class Pantry {
  constructor(pantry) {
    this.ingredients = pantry.ingredients;
  }
//we are taking in a recipe Object,
//forEach ingredient object in that recipe's array of Ingredients
// access the value of teh amount property
// and compare that value to the quantity of the matching ingredient in the user's pantry
//we should also check of whether that ingredient exists in the pantry at all, first.
// if it doesn't exist in the pantry at all or if there is not enough, we need to add
//the ne
  }

  determineAmountNeeded(selectedRecipe) {

  }

  subtractIngredients(selectedRecipe) {
  }
}

if (typeof module !== 'undefined') {
  module.exports = Pantry;
}
