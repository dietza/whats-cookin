class Pantry {
  constructor(ingredients) {
    //will: Something is weird here. Pantry had been the parameter name but changed it to ingredients.
    //will You want to avoid having a parameter named the same thing as your class or a different class
    // it seems like the thing that's being passed in is not a pantry but in fact a list of ingredients;
    
    this.ingredients = ingredients;
  }

}

if (typeof module !== 'undefined') {
  module.exports = Pantry;
}
