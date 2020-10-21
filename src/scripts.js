


// ************GLOBAL VARIABLES***************//
var currentUser
var currentRecipeRepository
var currentIngredientRepository

// ****************NAVIGATION*******************  //

let allRecipesBtn = document.querySelector(".show-all-btn");
let filterBtn = document.querySelector(".filter-btn");
let pantryBtn = document.querySelector(".my-pantry-btn");
let savedRecipesBtn = document.querySelector(".saved-recipes-btn");

let searchBtn = document.querySelector(".fa-search");
let searchForm = document.querySelector("searchForm");
let searchInput = document.querySelector("search-input");
let showPantryRecipes = document.querySelector(".show-pantry-recipes-btn");
menuOpen = false;

// ************EVENT LISTENERS***************//
window.addEventListener('load', function () {
 uploadData()
})

// ************EVENT HANDLERS****************//




//*****************ONLOAD******************//
function uploadData() {
  currentUser = new User(usersData[getRandomIndex(usersData)])
  currentRecipeRepository = new RecipeRepository(recipeData)
  displayUserData()
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}


//*****************DISPLAY****************//

function displayUserData() {
  let currentFirstName = currentUser.displayFirstName()
  document.querySelector('.welcome-bar').innerHTML =
  `<h1>Welcome,</h1>
  <h3> ${currentUser.displayFirstName()}! </h3>`
}

function toggleMenu() {
  var menuDropdown = document.querySelector(".hamburger-button-dropbtn");
  menuOpen = !menuOpen;
  if (menuOpen) {
    menuDropdown.style.display = "block";
    pantryBtn.setAttribute('aria-expanded', true);
  } else {
    menuDropdown.style.display = "none";
    pantryBtn.setAttribute('aria-expanded', false);
  }
}
