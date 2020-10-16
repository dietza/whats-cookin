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

  // searchFavorites(type) {
  //   const result = this.favorites.filter(favRecipe => {
  //
  //     // IF the searchTerm is a recipeType,
  //     // then return all recipes whose tags include the searchTerm,
  //     // IF the searchTerm is a recipeName,
  //     // then return the recipe whose name matches the searchTerm,
  //     // IF the searchTerm is an ingredient,
  //     // then return all recipes which include ingredients with a matching ID number to the searchTerm.
  //
  //     return favRecipe.tags.includes(type);
  //   })
  //   return result;
  // }

  searchRecipes(locationToCheck, keyword) {
    const result = this[locationToCheck].filter(recipe => {
      return recipe.tags.includes(keyword) || recipe.name.includes(keyword);
    });
    console.log('searchRecipes (filter result) ==>', result);
    return result;
  }

  searchSavedRecipesByIngredient(locationToCheck, keyword, ingredientsArr) {
    let ingredientID = this.nameToNum(keyword, ingredientsArr)
    console.log("INGREDIENT ID HERE", ingredientID)
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
        console.log('searchRecipesByIngredient (acc) ==>', recipeList);
        return recipeList;
      }, []);
    return result;
  }

  nameToNum(ingredientName, ingredientsArr) {
    let ingredient = ingredientsArr.find(ingredient => ingredient.name === ingredientName)
    return ingredient.id;
  }
}


module.exports = User;
