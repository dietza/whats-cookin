
// ************GLOBAL VARIABLES***************//
let currentUser;
console.log('ingredientsDATA:', ingredientsData);

// ****************NAVIGATION*******************  //

let allRecipesBtn = document.querySelector(".all-recipes-button");
let currentViewTitle = document.querySelector(".current-view-title");


let searchBtn = document.querySelector(".fa-search");
let searchForm = document.querySelector("searchForm");
let searchInput = document.querySelector("search-input");

let myPantryBtn = document.querySelector(".my-pantry");
let myFavoritesBtn = document.querySelector(".my-favorites");
let myToCookBtn = document.querySelector(".to-cook");
let myCookedBtn = document.querySelector(".cooked-recipes");

let recipeDisplay = document.querySelector(".main-recipe-display");

// let recipeCard1 = document.querySelector(".card-1");


// ************EVENT LISTENERS***************//
window.addEventListener('load', function () {
 uploadData()
})

// ************EVENT HANDLERS****************//




//*****************ONLOAD******************//
function uploadData() {
  currentUser = new User(usersData[getRandomIndex(usersData)], ingredientsData);

  console.log('uploadData // currentUSER:', currentUser);
  console.log('displayUserData() :', displayUserData());

  getRandomIndex(ingredientsData);
  displayUserData();
  displayRecipeCards(recipeData);
}

//*****************MISC // INSTANTIATIONS****************//

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

//*****************DISPLAY****************//

function displayUserData() {

  console.log('displayUserData // currentUSER:', currentUser);

  let currentFirstName = currentUser.displayFirstName();
  document.querySelector('.welcome-bar').innerHTML =
    `<h1>Welcome,</h1>
    <h3> ${currentUser.displayFirstName()}! </h3>`
}

function displayRecipeCards(recipeData) {
  // recipeDisplay.innerHTML = "";

  let recipeListIngredients = recipeData[0].ingredients.map(ingredient => {
    return numToName(ingredient.id, ingredientsData);
  });

  console.log('displayRecipeCards // recipeListIngredients:', recipeListIngredients);

  let ingredientNames = recipeListIngredients.forEach(ingredientName => {
    return ingredientName;
  })

  document.querySelector('.card-1').innerHTML =
  `<div class="card-1 recipe-card" name="recipe 1">
    <div class='recipe-image'><img src=${recipeData[0].image}></div>
    <div class='recipe-name'><h1>${recipeData[0].name}</h1></div>
    <div class='recipe-ingredients'><p>${recipeData[0].ingredients}</p></div>
    <div class='recipe-instructions'><h3>${recipeData[0].instructions}</h3></div>
  </div>`
};

function numToName(ingredientID, ingredientsData) {
  let ingredient = ingredientsData.find(ingredient => ingredient.id === ingredientID)
  return ingredient.name;
}

function displayPantry() {

};

function displayFavorites() {

};

function displayRecipesToCook() {

};

function displayCookedRecipes() {

};

function displaySelectedRecipe() {

};
