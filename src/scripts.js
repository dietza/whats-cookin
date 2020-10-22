
// ************GLOBAL VARIABLES***************//
let currentUser;
console.log('ingredientsDATA:', ingredientsData);
let allRecipes = [];

// ****************NAVIGATION*******************  //

let allRecipesBtn = document.querySelector(".all-recipes-button");
let currentViewTitle = document.querySelector(".current-view-title");

let searchBtn = document.querySelector(".fa-search");
let searchForm = document.querySelector(".searchForm");
let searchInput = document.querySelector(".search-input");

let myPantryBtn = document.querySelector(".my-pantry");
let myFavoritesBtn = document.querySelector(".my-favorites");
let myToCookBtn = document.querySelector(".to-cook");
let myCookedBtn = document.querySelector(".cooked-recipes");

let recipeDisplay = document.querySelector(".main-recipe-display");

// ************EVENT LISTENERS***************//
window.addEventListener('load', function () {
 uploadData();
});

myPantryBtn.addEventListener('click', displayPantry);

myFavoritesBtn.addEventListener('click', displayFavorites);

myToCookBtn.addEventListener('click', displayRecipesToCook);

myCookedBtn.addEventListener('click', displayCookedRecipes);

allRecipesBtn.addEventListener('click', displayAllRecipes);
// ************EVENT HANDLERS****************//


//*****************ONLOAD******************//
function uploadData() {
  currentUser = new User(usersData[getRandomIndex(usersData)], ingredientsData);
  createRecipeObjects(recipeData);
  getRandomIndex(ingredientsData);
  displayUserData();
  displayRecipeDetails(allRecipes);
};

function createRecipeObjects(recipeData) {
  allRecipes = recipeData.map(recipe => {
    return new Recipe(recipe);
  })
  return allRecipes;
};

//*****************MISC****************//

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function numToName(ingredientID, ingredientsData) {
  let ingredient = ingredientsData.find(ingredient => ingredient.id === ingredientID)
  return ingredient.name;
};

//*****************DISPLAY****************//

function displayUserData() {
  let currentFirstName = currentUser.displayFirstName();
  document.querySelector('.welcome-bar').innerHTML =
    `<h1>Welcome,</h1>
    <h3> ${currentUser.displayFirstName()}! </h3>`
};

function addRecipeImage(recipe) {
  document.getElementById('#recipe-title').style.backgroundImage =
    `url(${recipe.image})`
};

function displayRecipeDetails(allRecipes) {
  allRecipes.forEach(recipe => {
    let main = document.querySelector('.main-recipe-display');
      let cardHTML = `
        <section class="recipe-card" id=${recipe.id}>
          <article class="card-photo-container">
          <img src=${recipe.image} class="recipe-image"
          alt="${recipe.name}" title="${recipe.name}">
          <article class="recipe-name">
          <p>${recipe.name}</p>
          </article>
          <article class="instructions-link">
          <label>Click For Instructions</label>
          </article>
        </section>`

      main.insertAdjacentHTML('beforeEnd', cardHTML);
  })
};

function displaySelectedRecipe(event) {
  let fullRecipeInfo = document.querySelector(".recipe-instructions");
  fullRecipeInfo.style.display = "inline";
  let recipeId = event.target.closest(".recipe-card").id;
  let recipe = recipeData.find(recipe => {
    recipe.id === recipeId;
  })
  addRecipeImage(recipe)
  generateRecipeTitle(recipe);
  generateIngredients(recipe);
  fullRecipeInfo.insertAdjacentHTML("beforeBegin", '<section id="overlay"></section>')
};

function generateIngredients(recipe) {
  let selectedRecipe =
    recipe.ingredients.map(recipeIngredient => {
      ingredientsData.forEach(ingredient => {
        if(ingredient.id === recipeIngredient.id) {
          recipeIngredient.name = ingredient.name;
        }
      })
      return recipeIngredient;
    })
};

function generateInstructions(recipe) {
  let fullRecipeInfo = document.querySelector(".recipe-instructions");
  let instructionsList = "";
  let instructions = recipe.instructions.map(instruction => {
    return instruction.instruction;
  })
  instructions.forEach(instruction => {
    instructionList += `<li> ${instruction} </li>`
  })
  fullRecipeInfo.insertAdjacentHTML('beforeEnd', `<p>${instructions}</p>`);
  fullRecipeInfo.insertAdjacentHTML('beforeEnd', `<ol>${instructionsList}</ol>`);
};

function displayPantry() {
  document.querySelector('.main-recipe-display').innerHTML = "";
  let ingredientNames = currentUser.pantry.forEach(ingredient => {
    let ingredientName = numToName(ingredient.ingredient, ingredientsData);
    let main = document.querySelector('.main-recipe-display');
    let pantryHTML = `
    <li><input type="checkbox" class="pantry-checkbox" id="${ingredient.id}">
      <label for="${ingredientName}">${ingredientName},
      ${ingredient.amount}</label></li>`
    main.insertAdjacentHTML('beforeEnd', pantryHTML);
  })
  displayCurrentTitle();
};

function displayCurrentTitle() {
  let currentTitle = document.querySelector('.current-view-title');
  currentTitle.innerHTML =
    `<p>Viewing :</p>
    <h1>My Pantry</h1>`;
}

function displayFavorites() {

};

function displayRecipesToCook() {

};

function displayCookedRecipes() {

};

function displaySelectedRecipe() {

};
