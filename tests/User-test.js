const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');

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
}, {
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
}];

describe('User', () => {

  it('should be a function', function() {
    let user = new User(sampleUsers[0]);
    expect(User).to.be.a('function');
  });

  it('should be an instance of the User class', function() {
    let user = new User(sampleUsers[1]);
    expect(user).to.be.an.instanceof(User);
  });

  it('should have a name of our user', function() {
    let user1 = new User(sampleUsers[0]);
    let user2 = new User(sampleUsers[1]);
    expect(user1.name).to.deep.equal("Saige O'Kon");
    expect(user2.name).to.deep.equal("Ephraim Goyette");
  });

  it('should have an user ID', function() {
    let user1 = new User(sampleUsers[0]);
    let user2 = new User(sampleUsers[1]);
    expect(user1.id).to.deep.equal(1);
    expect(user2.id).to.deep.equal(2);
  });

  it('should have a user pantry which stores ingredients', function() {
    let user1 = new User(sampleUsers[0]);
    let user2 = new User(sampleUsers[1]);
    expect(user1.pantry).to.be.a('array');
    expect(user2.pantry[0].ingredient).to.deep.equal(6150);
  });

  it('should have a list of favorite recipes', function() {
    let user1 = new User(sampleUsers[0]);
    let user2 = new User(sampleUsers[1]);
    expect(user1.favorites).to.deep.equal([]);
  });

  it('should have a list of recipes to cook', function() {
    let user1 = new User(sampleUsers[0]);
    let user2 = new User(sampleUsers[1]);
    expect(user2.recipesToCook).to.deep.equal([]);
  });

  it('should have a shopping list', function() {
    let user1 = new User(sampleUsers[0]);
    let user2 = new User(sampleUsers[1]);
    expect(user1.shoppingList).to.deep.equal([]);
  });

  it('should add recipes to the list of favorites', function() {
    let user1 = new User(sampleUsers[0]);
    let user2 = new User(sampleUsers[1]);
    let recipe = sampleRecipes[0];
    user1.addToFavorites(recipe);
    expect(user1.favorites.includes(recipe)).to.deep.equal(true);
  });

  it('should be able to remove recipes from the list of favorites', function() {
    let user1 = new User(sampleUsers[0]);
    let user2 = new User(sampleUsers[1]);
    let recipe = sampleRecipes[0];
    user2.addToFavorites(recipe);
    console.log(user2.favorites);
    user2.removeFromFavorites(recipe);
    expect(user2.favorites.includes(recipe)).to.deep.equal(false);
  });

  it('should add recipes to the list of recipes to cook', function() {
    let user1 = new User(sampleUsers[0]);
    let user2 = new User(sampleUsers[1]);
    let recipe = sampleRecipes[0];
    user1.addToRecipesToCook(recipe);
    expect(user1.recipesToCook.includes(recipe)).to.deep.equal(true);
  });

  it('should be able to remove recipes from the list of recipes to cook', function() {
    let user1 = new User(sampleUsers[0]);
    let user2 = new User(sampleUsers[1]);
    let recipe = sampleRecipes[0];
    user2.addToRecipesToCook(recipe);
    console.log(user2.favorites);
    user2.removeFromRecipesToCook(recipe);
    expect(user2.recipesToCook.includes(recipe)).to.deep.equal(false);
  });
});
