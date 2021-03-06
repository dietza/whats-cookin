const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');

const sampleIngredients = [{
  "id": 20081,
  "name": "wheat flour",
  "estimatedCostInCents": 142
},
{
  "id": 18372,
  "name": "bicarbonate of soda",
  "estimatedCostInCents": 582
},
{
  "id": 1123,
  "name": "eggs",
  "estimatedCostInCents": 472
},
{
  "id": 19206,
  "name": "instant vanilla pudding",
  "estimatedCostInCents": 660
},
{
  "id": 1102047,
  "name": "s&p",
  "estimatedCostInCents": 524
},
{
  "id": 6150,
  "name": "bar b que sauce",
  "estimatedCostInCents": 966
}];

const sampleUsers = [{
"name": "Saige O'Kon",
"id": 1,
"pantry": [
  {
    "ingredient": 11477,
    "amount": 4
  },
  {
    "ingredient": 11297,
    "amount": 4
  },
  {
    "ingredient": 1082047,
    "amount": 10
  },
  {
    "ingredient": 20081,
    "amount": 5
  },
  {
    "ingredient": 11215,
    "amount": 5
  },
  {
    "ingredient": 2047,
    "amount": 6
  },
  {
    "ingredient": 1123,
    "amount": 8
  },
  {
    "ingredient": 11282,
    "amount": 4
  },
  {
    "ingredient": 6172,
    "amount": 2
  },
  {
    "ingredient": 2044,
    "amount": 2
  },
  {
    "ingredient": 2050,
    "amount": 4
  },
  {
    "ingredient": 1032009,
    "amount": 3
  },
  {
    "ingredient": 5114,
    "amount": 3
  },
  {
    "ingredient": 1017,
    "amount": 2
  },
  {
    "ingredient": 18371,
    "amount": 7
  },
  {
    "ingredient": 1001,
    "amount": 6
  },
  {
    "ingredient": 99223,
    "amount": 2
  },
  {
    "ingredient": 1230,
    "amount": 2
  },
  {
    "ingredient": 9152,
    "amount": 4
  },
  {
    "ingredient": 10611282,
    "amount": 2
  },
  {
    "ingredient": 93607,
    "amount": 2
  },
  {
    "ingredient": 14106,
    "amount": 4
  },
  {
    "ingredient": 1077,
    "amount": 4
  },
  {
    "ingredient": 6150,
    "amount": 2
  },
  {
    "ingredient": 1124,
    "amount": 2
  },
  {
    "ingredient": 10011693,
    "amount": 4
  },
  {
    "ingredient": 1102047,
    "amount": 2
  },
  {
    "ingredient": 19206,
    "amount": 2
  },
  {
    "ingredient": 1145,
    "amount": 4
  },
  {
    "ingredient": 1002030,
    "amount": 4
  },
  {
    "ingredient": 12061,
    "amount": 2
  },
  {
    "ingredient": 19335,
    "amount": 4
  },
  {
    "ingredient": 15152,
    "amount": 3
  },
  {
    "ingredient": 9003,
    "amount": 2
  },
  {
    "ingredient": 18372,
    "amount": 3
  },
  {
    "ingredient": 2027,
    "amount": 2
  }
]
},
 {
"name": "Ephraim Goyette",
"id": 2,
"pantry": [
  {
    "ingredient": 6150,
    "amount": 3
  },
  {
    "ingredient": 1032009,
    "amount": 7
  },
  {
    "ingredient": 1082047,
    "amount": 8
  },
  {
    "ingredient": 1034053,
    "amount": 6
  },
  {
    "ingredient": 2050,
    "amount": 10
  },
  {
    "ingredient": 19335,
    "amount": 13
  },
  {
    "ingredient": 1145,
    "amount": 5
  },
  {
    "ingredient": 18371,
    "amount": 8
  },
  {
    "ingredient": 19336,
    "amount": 4
  },
  {
    "ingredient": 11215,
    "amount": 12
  },
  {
    "ingredient": 9152,
    "amount": 3
  },
  {
    "ingredient": 11297,
    "amount": 4
  },
  {
    "ingredient": 1123,
    "amount": 17
  },
  {
    "ingredient": 16112,
    "amount": 2
  },
  {
    "ingredient": 4053,
    "amount": 11
  },
  {
    "ingredient": 10011693,
    "amount": 4
  },
  {
    "ingredient": 5114,
    "amount": 2
  },
  {
    "ingredient": 11529,
    "amount": 5
  },
  {
    "ingredient": 1001,
    "amount": 14
  },
  {
    "ingredient": 2027,
    "amount": 6
  },
  {
    "ingredient": 1002030,
    "amount": 9
  },
  {
    "ingredient": 20081,
    "amount": 10
  },
  {
    "ingredient": 1077,
    "amount": 5
  },
  {
    "ingredient": 14106,
    "amount": 7
  },
  {
    "ingredient": 2009,
    "amount": 5
  },
  {
    "ingredient": 16124,
    "amount": 4
  },
  {
    "ingredient": 2031,
    "amount": 3
  },
  {
    "ingredient": 2025,
    "amount": 5
  },
  {
    "ingredient": 11282,
    "amount": 8
  },
  {
    "ingredient": 20027,
    "amount": 2
  },
  {
    "ingredient": 11333,
    "amount": 3
  },
  {
    "ingredient": 19177,
    "amount": 2
  },
  {
    "ingredient": 11821,
    "amount": 3
  },
  {
    "ingredient": 18372,
    "amount": 9
  },
  {
    "ingredient": 1012047,
    "amount": 2
  },
  {
    "ingredient": 11291,
    "amount": 2
  },
  {
    "ingredient": 1102047,
    "amount": 4
  },
  {
    "ingredient": 6194,
    "amount": 5
  },
  {
    "ingredient": 19296,
    "amount": 5
  },
  {
    "ingredient": 11477,
    "amount": 3
  },
  {
    "ingredient": 2047,
    "amount": 12
  },
  {
    "ingredient": 93607,
    "amount": 6
  },
  {
    "ingredient": 12061,
    "amount": 8
  },
  {
    "ingredient": 11353,
    "amount": 3
  },
  {
    "ingredient": 6615,
    "amount": 2
  },
  {
    "ingredient": 9003,
    "amount": 2
  },
  {
    "ingredient": 19911,
    "amount": 2
  },
  {
    "ingredient": 1124,
    "amount": 3
  },
  {
    "ingredient": 11165,
    "amount": 2
  },
  {
    "ingredient": 1125,
    "amount": 3
  },
  {
    "ingredient": 1089003,
    "amount": 2
  },
  {
    "ingredient": 12120,
    "amount": 2
  },
  {
    "ingredient": 10511282,
    "amount": 2
  },
  {
    "ingredient": 1019,
    "amount": 2
  },
  {
    "ingredient": 9302,
    "amount": 2
  },
  {
    "ingredient": 1011256,
    "amount": 2
  },
  {
    "ingredient": 9019,
    "amount": 4
  },
  {
    "ingredient": 11206,
    "amount": 2
  }
]
}];

const sampleRecipes = [{
"id": 595736,
"image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
"ingredients": [
  {
    "id": 20081,
    "quantity": {
      "amount": 1.5,
      "unit": "c"
    }
  },
  {
    "id": 18372,
    "quantity": {
      "amount": 0.5,
      "unit": "tsp"
    }
  },
  {
    "id": 1123,
    "quantity": {
      "amount": 1,
      "unit": "large"
    }
  },
  {
    "id": 19335,
    "quantity": {
      "amount": 0.5,
      "unit": "c"
    }
  },
  {
    "id": 19206,
    "quantity": {
      "amount": 3,
      "unit": "Tbsp"
    }
  },
  {
    "id": 19334,
    "quantity": {
      "amount": 0.5,
      "unit": "c"
    }
  },
  {
    "id": 2047,
    "quantity": {
      "amount": 0.5,
      "unit": "tsp"
    }
  },
  {
    "id": 1012047,
    "quantity": {
      "amount": 24,
      "unit": "servings"
    }
  },
  {
    "id": 10019903,
    "quantity": {
      "amount": 2,
      "unit": "c"
    }
  },
  {
    "id": 1145,
    "quantity": {
      "amount": 0.5,
      "unit": "c"
    }
  },
  {
    "id": 2050,
    "quantity": {
      "amount": 0.5,
      "unit": "tsp"
    }
  }
],
"instructions": [
  {
    "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
    "number": 1
  },
  {
    "instruction": "Add egg and vanilla and mix until combined.",
    "number": 2
  },
  {
    "instruction": "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
    "number": 3
  },
  {
    "instruction": "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.",
    "number": 4
  },
  {
    "instruction": "Bake for 9 to 10 minutes, or until you see the edges start to brown.",
    "number": 5
  },
  {
    "instruction": "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.",
    "number": 6
  }
],
"name": "Loaded Chocolate Chip Pudding Cookie Cups",
"tags": [
  "antipasti",
  "starter",
  "snack",
  "appetizer",
  "antipasto",
  "hor d'oeuvre"
]
},
{
"id": 678353,
"image": "https://spoonacular.com/recipeImages/678353-556x370.jpg",
"ingredients": [
  {
    "id": 1009016,
    "quantity": {
      "amount": 1.5,
      "unit": "cups"
    }
  },
  {
    "id": 9003,
    "quantity": {
      "amount": 2,
      "unit": ""
    }
  },
  {
    "id": 20027,
    "quantity": {
      "amount": 1,
      "unit": "tablespoon"
    }
  },
  {
    "id": 1002046,
    "quantity": {
      "amount": 1,
      "unit": "tablespoon"
    }
  },
  {
    "id": 11215,
    "quantity": {
      "amount": 1,
      "unit": "clove"
    }
  },
  {
    "id": 1012046,
    "quantity": {
      "amount": 1,
      "unit": "tablespoon"
    }
  },
  {
    "id": 19911,
    "quantity": {
      "amount": 0.25,
      "unit": "cup"
    }
  },
  {
    "id": 16112,
    "quantity": {
      "amount": 1,
      "unit": "tablespoon"
    }
  },
  {
    "id": 10010062,
    "quantity": {
      "amount": 24,
      "unit": "ounce"
    }
  },
  {
    "id": 1102047,
    "quantity": {
      "amount": 4,
      "unit": "servings"
    }
  },
  {
    "id": 16124,
    "quantity": {
      "amount": 1,
      "unit": "tablespoon"
    }
  },
  {
    "id": 1016168,
    "quantity": {
      "amount": 1,
      "unit": "tablespoon"
    }
  }
],
"instructions": [
  {
    "instruction": "Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!",
    "number": 1
  }
],
"name": "Maple Dijon Apple Cider Grilled Pork Chops",
"tags": [
  "lunch",
  "main course",
  "main dish",
  "dinner"
]
},
{
"id": 412309,
"image": "https://spoonacular.com/recipeImages/412309-556x370.jpeg",
"ingredients": [
  {
    "id": 1002030,
    "quantity": {
      "amount": 4,
      "unit": "teaspoons"
    }
  },
  {
    "id": 19334,
    "quantity": {
      "amount": 8,
      "unit": "tablespoons"
    }
  },
  {
    "id": 1001,
    "quantity": {
      "amount": 2,
      "unit": "cups"
    }
  },
  {
    "id": 4582,
    "quantity": {
      "amount": 4,
      "unit": "servings"
    }
  },
  {
    "id": 2031,
    "quantity": {
      "amount": 4,
      "unit": "teaspoons"
    }
  },
  {
    "id": 5100,
    "quantity": {
      "amount": 1,
      "unit": "pound"
    }
  },
  {
    "id": 2009,
    "quantity": {
      "amount": 4,
      "unit": "teaspoons"
    }
  },
  {
    "id": 1022020,
    "quantity": {
      "amount": 4,
      "unit": "teaspoons"
    }
  },
  {
    "id": 6168,
    "quantity": {
      "amount": 8,
      "unit": "cups"
    }
  },
  {
    "id": 9176,
    "quantity": {
      "amount": 0.5,
      "unit": "cup"
    }
  },
  {
    "id": 2026,
    "quantity": {
      "amount": 4,
      "unit": "teaspoons"
    }
  },
  {
    "id": 1042047,
    "quantity": {
      "amount": 1.5,
      "unit": "tablespoons"
    }
  },
  {
    "id": 1042047,
    "quantity": {
      "amount": 4,
      "unit": "teaspoons"
    }
  }
],
"instructions": [
  {
    "instruction": "Mix the hot sauce, butter, mango habanero sauce, brown sugar, chili powder, garlic powder, onion powder, black pepper, cayenne pepper and seasoning salt in a bowl. Stir vigorously until completely combined.",
    "number": 1
  }
],
"name": "Dirty Steve's Original Wing Sauce",
"tags": [
  "sauce"
]
},
{
  "id": 226562,
  "image": "https://spoonacular.com/recipeImages/226562-556x370.jpg",
  "ingredients": [
    {
      "id": 9019,
      "quantity": {
        "amount": 2,
        "unit": "tablespoons"
      }
    },
    {
      "id": 18079,
      "quantity": {
        "amount": 1,
        "unit": "cup"
      }
    },
    {
      "id": 16069,
      "quantity": {
        "amount": 1,
        "unit": "cup"
      }
    },
    {
      "id": 19334,
      "quantity": {
        "amount": 2,
        "unit": "tablespoons"
      }
    },
    {
      "id": 11124,
      "quantity": {
        "amount": 1,
        "unit": "cup"
      }
    },
    {
      "id": 2009,
      "quantity": {
        "amount": 0.25,
        "unit": "teaspoon"
      }
    },
    {
      "id": 9079,
      "quantity": {
        "amount": 0.3333333333333333,
        "unit": "cup"
      }
    },
    {
      "id": 11165,
      "quantity": {
        "amount": 0.25,
        "unit": "cup"
      }
    },
    {
      "id": 11215,
      "quantity": {
        "amount": 3,
        "unit": ""
      }
    },
    {
      "id": 1002014,
      "quantity": {
        "amount": 0.5,
        "unit": "teaspoon"
      }
    },
    {
      "id": 2042,
      "quantity": {
        "amount": 0.5,
        "unit": "teaspoon"
      }
    },
    {
      "id": 11935,
      "quantity": {
        "amount": 2,
        "unit": "tablespoons"
      }
    },
    {
      "id": 4053,
      "quantity": {
        "amount": 2,
        "unit": "tablespoon"
      }
    },
    {
      "id": 11282,
      "quantity": {
        "amount": 1,
        "unit": "cup"
      }
    },
    {
      "id": 12151,
      "quantity": {
        "amount": 0.5,
        "unit": "cup"
      }
    },
    {
      "id": 11821,
      "quantity": {
        "amount": 1,
        "unit": "cup"
      }
    },
    {
      "id": 1102047,
      "quantity": {
        "amount": 8,
        "unit": "servings"
      }
    },
    {
      "id": 6615,
      "quantity": {
        "amount": 3,
        "unit": "cups"
      }
    }
  ],
  "instructions": [
    {
      "instruction": "Wash the lentils and place into a pot along with the vegetable broth. Bring to a boil, then reduce heat to medium-low and simmer, for about 40 minutes.",
      "number": 1
    },
    {
      "instruction": "Add more broth or water if necessary",
      "number": 2
    },
    {
      "instruction": "Meanwhile, warm the oil in a pan.",
      "number": 3
    },
    {
      "instruction": "Add the onions and cook for about 4 minutes or until soft.",
      "number": 4
    },
    {
      "instruction": "Add the carrots, bell pepper and garlic. Cook for about 3 minutes more. Set aside.When the lentils are ready mash them slightly with a potato masher or a fork.Preheat the oven to 350\u00ba F.In a large bowl, mix the onion mixture, mashed lentils, apple sauce, cranberries, pistachios, bread crumbs, cilantro, chili powder, cumin, thyme, salt and pepper.Line a loaf pan with parchment paper.",
      "number": 5
    },
    {
      "instruction": "Transfer the mixture to the loaf pan and press mixture into the pan with a spoon.",
      "number": 6
    },
    {
      "instruction": "Mix the glaze ingredients in a small bowl and spread evenly over the top.",
      "number": 7
    },
    {
      "instruction": "Bake for about 45 minutes.",
      "number": 8
    },
    {
      "instruction": "Transfer the pan to a wire rack and let the loaf cool a bit. Run a table knife around the edge of the pan and turn the loaf out onto a serving plate.",
      "number": 9
    }
  ],
  "name": "Vegan Lentil Loaf",
  "tags": [
    "side dish"
  ]
}];

describe('User', () => {

  beforeEach(() => {
    user = new User(sampleUsers[0]);
    user2 = new User(sampleUsers[1]);

    // MOVE SAMPLE DATA SETS INTO THE BEFORE EACH
    // TO RESOLVE MUTATION OF DATA

  });

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should be an instance of the User class', function() {
    expect(user).to.be.an.instanceof(User);
  });

  it('should have a name of our user', function() {
    expect(user.name).to.deep.equal("Saige O'Kon");
    expect(user2.name).to.deep.equal("Ephraim Goyette");
  });

  it('should have an user ID', function() {
    expect(user.id).to.deep.equal(1);
    expect(user2.id).to.deep.equal(2);
  });

  it('should have a user pantry which stores ingredients', function() {
    expect(user.pantry).to.be.a('array');
    expect(user2.pantry[0].ingredient).to.deep.equal(6150);
  });

  it('should have a list of favorite recipes', function() {
    expect(user.favorites).to.deep.equal([]);
  });

  it('should have a list of recipes to cook', function() {
    expect(user2.recipesToCook).to.deep.equal([]);
  });

  it('should have a shopping list', function() {
    expect(user.shoppingList).to.deep.equal([]);
  });

  it('should add recipes to the list of favorites', function() {
    let recipe = sampleRecipes[0];
    user.addToFavorites(recipe);
    expect(user.favorites.includes(recipe)).to.deep.equal(true);
  });

  it('should be able to remove recipes from the list of favorites', function() {
    let recipe = sampleRecipes[0];
    user2.addToFavorites(recipe);
    user2.removeFromFavorites(recipe);
    expect(user2.favorites.includes(recipe)).to.deep.equal(false);
  });

  it('should add recipes to the list of recipes to cook', function() {
    let recipe = sampleRecipes[0];
    user.addToRecipesToCook(recipe);
    expect(user.recipesToCook.includes(recipe)).to.deep.equal(true);
  });

  it('should be able to remove recipes from the list of recipes to cook', function() {
    let recipe = sampleRecipes[0];
    user2.addToRecipesToCook(recipe);
    user2.removeFromRecipesToCook(recipe);
    expect(user2.recipesToCook.includes(recipe)).to.deep.equal(false);
  });

  it('should add ingredients to the shopping list', function() {
    let ingredient = sampleIngredients[0];
    user.addToShoppingList(ingredient);
    expect(user.shoppingList.includes(ingredient)).to.deep.equal(true);
  });

  it('should remove ingredients from the shopping list', function() {
    let ingredient = sampleIngredients[1];
    user2.addToShoppingList(ingredient);
    user2.removeFromShoppingList(ingredient);
    expect(user2.shoppingList.includes(ingredient)).to.deep.equal(false);
  });

  it('should search for and return a recipe by type from the list of favorites', function() {
    let recipe1 = sampleRecipes[0];
    let recipe2 = sampleRecipes[1];
    let recipe3 = sampleRecipes[2];
    user.addToFavorites(recipe1);
    user.addToFavorites(recipe2);
    user.addToFavorites(recipe3);
    expect(user.searchRecipes('favorites', 'snack')).to.deep.equal([recipe1]);
  });

  it('should search for and return a recipe by type from the list of recipes to cook', function() {
    let recipe1 = sampleRecipes[0];
    let recipe2 = sampleRecipes[1];
    let recipe3 = sampleRecipes[2];
    user2.addToRecipesToCook(recipe1);
    user2.addToRecipesToCook(recipe2);
    user2.addToRecipesToCook(recipe3);
    expect(user2.searchRecipes('recipesToCook', 'sauce')).to.deep.equal([recipe3]);
  });

  it('should search for saved recipes by name', function() {
    let recipe1 = sampleRecipes[0];
    let recipe2 = sampleRecipes[1];
    let recipe3 = sampleRecipes[2];
    user.addToRecipesToCook(recipe1);
    user.addToFavorites(recipe2);
    user.addToRecipesToCook(recipe3);
    expect(user.searchRecipes('recipesToCook', "Loaded Chocolate Chip Pudding Cookie Cups")).to.deep.equal([recipe1]);
  });

  it('should search recipes by ingredient', function() {
    expect(user.searchRecipesByIngredient(sampleRecipes, 'bicarbonate of soda', sampleIngredients)).to.deep.equal([sampleRecipes[0]]);
  });

  it('should filter saved recipes by ingredient', function() {
    user.addToRecipesToCook(sampleRecipes[0]);
    user.addToRecipesToCook(sampleRecipes[1]);
    user.addToRecipesToCook(sampleRecipes[2]);
    expect(user.searchSavedRecipesByIngredient(user.recipesToCook, 'wheat flour', sampleIngredients )).to.deep.equal([sampleRecipes[0]]);
  });

  it('should check if a user has ingredients for a recipe in their pantry', function() {
    let recipe = sampleRecipes[0];
    expect(user.determineAmountNeeded(recipe)).to.deep.equal([{
      "id": 19206,
      "quantity": {
        "amount": 3,
        "unit": "Tbsp"
      },
      "amountNeeded": 1
    }]);
  });

  it('should be able to check the pantry for ingredients needed for different recipe', function() {
    let recipe = sampleRecipes[2];
    expect(user.determineAmountNeeded(recipe).length).to.deep.equal(0);
  });

  it('should be able to check the pantry for ingredients needed for any recipe', function() {
    let recipe = sampleRecipes[3];
    let neededIngredients = user.determineAmountNeeded(recipe);
    expect(neededIngredients[0].amountNeeded).to.deep.equal(6);
  });

  it('should calculate the cost of ingredients by amount needed for a recipe', function() {
    let recipe = sampleRecipes[0];
    let totalCost = user.getCostOfNeededIngredients(recipe, sampleIngredients)
    expect(totalCost).to.deep.equal(660);
  });

  it('should add ingredients to the pantry as needed for a given recipe', function() {
    let recipe = sampleRecipes[0];
    let updatedPantry = user.addIngredientsToPantry(recipe);
    expect(updatedPantry[27].amount).to.deep.equal(3);
  });

  it('should remove ingredients from the pantry after a recipe is cooked', function() {
    let recipe = sampleRecipes[0];
    let updatedPantry = user.subtractIngredientsFromPantry(recipe);
    expect(updatedPantry.length).to.deep.equal(36);
    expect(updatedPantry[27].amount).to.deep.equal(0);
  });

  it('should calculate the cost of ingredients by amount needed for another recipe', function() {
    let recipe = sampleRecipes[3];
    let totalCost = user.getCostOfNeededIngredients(recipe, sampleIngredients)
    expect(totalCost).to.deep.equal(3144);
  });
});
