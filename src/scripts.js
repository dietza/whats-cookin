
// ************GLOBAL VARIABLES***************//
let currentUser;
console.log('ingredientsDATA:', ingredientsData);
let allRecipes = [];

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
let allRecipeCards = document.querySelectorAll(".recipe-card")
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

  createRecipeObjects(recipeData);
  getRandomIndex(ingredientsData);
  displayUserData();
  displayRecipeDetails(allRecipes);
}

function createRecipeObjects(recipeData) {
  allRecipes = recipeData.map(recipe => {
    return new Recipe(recipe);
  })
  return allRecipes;
}

//*****************MISC // INSTANTIATIONS****************//

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function numToName(ingredientID, ingredientsData) {
  let ingredient = ingredientsData.find(ingredient => ingredient.id === ingredientID)
  return ingredient.name;
}

//*****************DISPLAY****************//

function displayUserData() {

  console.log('displayUserData // currentUSER:', currentUser);

  let currentFirstName = currentUser.displayFirstName();
  document.querySelector('.welcome-bar').innerHTML =
    `<h1>Welcome,</h1>
    <h3> ${currentUser.displayFirstName()}! </h3>`
}

// function displayRecipeCards(allRecipes) {
//   // recipeDisplay.innerHTML = "";
//
//
//
//   let recipeListIngredients = recipeData[0].ingredients.map(ingredient => {
//     return ` ${numToName(ingredient.id, ingredientsData)}`;
//   });
//
//   let recipeListInstructions = recipeData[0].instructions.map(instruction => {
//     return `<br>${instruction.number}. ${instruction.instruction}`;
//   })
//
//   console.log('displayRecipeCards // recipeListIngredients:', recipeListIngredients);
//
//   document.querySelector('.card-1').innerHTML =
//   `<div class="card-1 recipe-card default-recipe" name="recipe 1">
//     <div class='recipe-image'><img src=${recipeData[0].image}></div>
//     <div class='recipe-name'><h1>${recipeData[0].name}</h1></div>
//     <!-- <div class='recipe-ingredients'><p>${recipeListIngredients}</p></div> -->
//     <!-- <div class='recipe-instructions'><h3>${recipeListInstructions}</h3></div> -->
//   </div>`
//
// };

  // let recipeListIngredients = recipeData[0].ingredients.map(ingredient => {
  //   return ` ${numToName(ingredient.id, ingredientsData)}`;
  // });
  //
  // let recipeListInstructions = recipeData[0].instructions.map(instruction => {
  //   return `<br>${instruction.number}. ${instruction.instruction}`;
  // })
  //
  // console.log('displayRecipeCards // recipeListIngredients:', recipeListIngredients);
  //
  // document.querySelector('.card-1').innerHTML =
  // `<div class="card-1 recipe-card default-recipe" name="recipe 1">
  //   <div class='recipe-image'><img src=${recipeData[0].image}></div>
  //   <div class='recipe-name'><h1>${recipeData[0].name}</h1></div>
  //   <!--<div class='recipe-ingredients'><p>${recipeListIngredients}</p></div> -->
  //   <!--<div class='recipe-instructions'><h3>${recipeListInstructions}</h3></div> -->
  // </div>`


function addRecipeImage(recipe) {
  document.getElementById('#recipe-title').style.backgroundImage =
    `url(${recipe.image})`
}

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

    // let main = document.querySelector('.main-recipe-display');
    //   let cardHTML = `
    //     <section class="recipe-card" id=${recipe.id}>
    //       <article class="card-photo-container">
    //       <img src=${recipe.image} class="card-photo-preview"
    //       alt="${recipe.name}" title="${recipe.name}">
    //       <article class="text">
    //       <label>Click For Instructions</label>
    //       </article>
    //     </section>`
    //
    //   main.insertAdjacentHTML('beforeEnd', cardHTML);

};

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
