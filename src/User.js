class User {
  constructor(user) {
    this.name = user.name;
    this.id = user.id;
    this.favorites = [];
    this.recipesToCook = [];
    this.pantry = user.pantry;
    this.shoppingList = []
  }

  addToFavorites(recipe) {
    return this.favorites.push(recipe);
  }

  removeFromFavorites(recipe) {
    if (this.favorites.includes(recipe)) {
      let target = this.favorites.find(favRecipe => {
        return favRecipe.name === recipe.name
      });
      let targetIndex = this.favorites.indexOf(target);
      return this.favorites.splice(targetIndex, 1);
    };
  }

  addToRecipesToCook(recipe) {
    return this.recipesToCook.push(recipe);
  }

  removeFromRecipesToCook(recipe) {
    if (this.recipesToCook.includes(recipe)) {
      let target = this.recipesToCook.find(selectedRecipe => {
        return selectedRecipe.name === recipe.name
      });
      let targetIndex = this.recipesToCook.indexOf(target);
      return this.recipesToCook.splice(targetIndex, 1);
    };
  }

  addToShoppingList(ingredient) {
    return this.shoppingList.push(ingredient);
  }

  removeFromShoppingList(ingredient) {
    if (this.shoppingList.includes(ingredient)) {
      let target = this.shoppingList.find(selectedIngredient => {
        console.log(ingredient);
        return selectedIngredient.id === ingredient.id
      });
      let targetIndex = this.shoppingList.indexOf(target);
      return this.shoppingList.splice(targetIndex, 1);
    };
  }

  searchFavorites(type) {
    const result = this.favorites.filter(favRecipe => {
      return favRecipe.tags.includes(type);
    })
    return result;
  }

}


module.exports = User;
