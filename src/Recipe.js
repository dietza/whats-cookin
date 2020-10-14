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
      return recipe.tags.includes(keyword);
    });
  }
}




module.exports = Recipe;
