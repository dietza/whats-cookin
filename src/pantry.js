class Pantry {
  constructor(pantry) {
    this.ingredients = pantry.ingredients;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Pantry;
}
