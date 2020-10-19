const chai = require('chai');
const expect = chai.expect;

const Ingredient = require('../src/ingredients')

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

describe('Ingredient', () => {

  beforeEach(() => {
    ingredient = new Ingredient(sampleIngredients[0]);
    ingredient2 = new Ingredient(sampleIngredients[5]);
  });

  it('should be a function', function() {
    expect(Ingredient).to.be.a('function');
  });

  it('should be an instance of the Ingredient class', function() {
    expect(ingredient2).to.be.an.instanceof(Ingredient);
  });

  it('should have an id number', function() {
    expect(ingredient.id).to.deep.equal(20081);
  });

  it('should have a name', function() {
    expect(ingredient.name).to.deep.equal("wheat flour");
  });

  it('should estimate the unit cost in cents for the ingredient', function() {
    expect(ingredient2.estimatedCostInCents).to.deep.equal(966);
  })
});
