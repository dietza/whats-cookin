class User {
  constructor(user, rawIngredientsData) {
    this.name = user.name;
    this.id = user.id;
    this.favorites = [];
    this.recipesToCook = [];
    this.cookedRecipes = [];
    this.pantry = user.pantry;
    this.shoppingList = [];
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
      let neededIngredients = this.pantry.reduce((acc, currentIngredient) => {
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
      }, []);

    neededIngredients.forEach(neededIngredient => {
    this.shoppingList.push(neededIngredient);
    });
    return neededIngredients
  }

  getCostOfNeededIngredients(selectedRecipe, ingredientsArr) {
    let neededIngredients = this.determineAmountNeeded(selectedRecipe);
    let result = neededIngredients.reduce((total, currentIngredient) => {
        ingredientsArr.forEach(ingredient => {
          if (ingredient.id === currentIngredient.id) {
            return total += (ingredient.estimatedCostInCents * currentIngredient.amountNeeded);
          }

        })
      return total
    }, 0)
    return result
  }

  subtractIngredientsFromPantry(selectedRecipe) {
    let restockedPantry = this.addIngredientsToPantry(selectedRecipe);
    let depleatedPantry = restockedPantry.map(ingredient => {
      selectedRecipe.ingredients.forEach(usedIngredient => {
        if (selectedRecipe.ingredients.includes(usedIngredient)) {
          if (ingredient.ingredient === usedIngredient.id) {
            ingredient.amount -= usedIngredient.quantity.amount;
          }
        }
      })
      return ingredient;
    })
    this.pantry = depleatedPantry;
    return depleatedPantry;
  }

  addIngredientsToPantry(selectedRecipe) {
    let ingredientsToAdd = this.determineAmountNeeded(selectedRecipe);
    let restockedPantry = this.pantry.map(ingredient => {
      ingredientsToAdd.forEach(restockedIngredient => {
        if (ingredient.ingredient === restockedIngredient.id) {
          ingredient.amount += restockedIngredient.amountNeeded;
          restockedIngredient.amountNeeded = 0;
        }
      })
      return ingredient;
    })
    this.pantry = restockedPantry;
    this.shoppingList = [];
    return restockedPantry;
  }

  displayFirstName() {
    let nameArray = this.name.split(' ')
    const [firstName, lastName] = nameArray
    return firstName
  }
}


if (typeof module !== 'undefined') {
  module.exports = User;
}
