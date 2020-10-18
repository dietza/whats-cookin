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

  searchRecipes(locationToCheck, keyword) {
    const result = this[locationToCheck].filter(recipe => {
      return recipe.tags.includes(keyword) || recipe.name.includes(keyword);
    });
    return result;
  }

  searchSavedRecipesByIngredient(locationToCheck, keyword, ingredientsArr) {
    let ingredientID = this.nameToNum(keyword, ingredientsArr)
    const result = locationToCheck.reduce((recipeList, currentRecipe) => {
      currentRecipe.ingredients.forEach(ingredient => {
          if (ingredient.id === ingredientID){
            recipeList.push(currentRecipe)
          };
      });
      return recipeList;
    }, []);
    return result
  }

  searchRecipesByIngredient(locationToCheck, keyword, ingredientsArr) {
    let ingredientID = this.nameToNum(keyword, ingredientsArr);
    const result = locationToCheck.reduce((recipeList, currentRecipe) => {
      currentRecipe.ingredients.forEach(ingredient => {
        if (ingredient.id === ingredientID) {
          recipeList.push(currentRecipe)
        };
      });
        return recipeList;
      }, []);
    return result;
  }

  nameToNum(ingredientName, ingredientsArr) {
    let ingredient = ingredientsArr.find(ingredient => ingredient.name === ingredientName)
    return ingredient.id;
  }

  determineAmountNeeded(selectedRecipe) {
      const result = this.pantry.reduce((acc, currentIngredient) => {
        selectedRecipe.ingredients.find(ingredient => {
          if (ingredient.id === currentIngredient.ingredient) {
            if (ingredient.quantity.amount > currentIngredient.amount) {
            let amountNeeded = ingredient.quantity.amount - currentIngredient.amount;
            ingredient.amountNeeded = amountNeeded;
            return acc.push(ingredient);
            }
          }
        })
        return acc
      }, [])
    return result
  }

  subtractIngredients(selectedRecipe) {
  
  }

}

if (typeof module !== 'undefined') {
  module.exports = User;
}
