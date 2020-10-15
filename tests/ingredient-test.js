const chai = require('chai');
const expect = chai.expect;

const Ingredient = require('../src/Ingredients')
const User = require('../src/User');
const Recipe = require('../src/Recipe');

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
  }];

describe('Ingredient', () => {

  it('should be a function', function() {
    let ingredient = new Ingredient(sampleIngredients[0]);
    expect(Ingredient).to.be.a('function');
  });

  it('should be an instance of the Ingredient class', function() {
    let ingredient = new Ingredient(sampleIngredients[0]);
    expect(ingredient).to.be.an.instanceof(Ingredient);
  });

  it('should have an id number', function() {
    let ingredient = new Ingredient(sampleIngredients[0]);
    expect(ingredient.id).to.deep.equal(20081);
  });

  it('should have a name', function() {
    let ingredient = new Ingredient(sampleIngredients[0]);
    expect(ingredient.name).to.deep.equal("wheat flour");
  });
});
