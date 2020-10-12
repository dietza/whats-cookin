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
}



module.exports = User;
