// ************GLOBAL VARIABLES***************//
currentUser
currentRecipeRepository

// ****************NAVIGATION*******************  //

// let allRecipesBtn = document.querySelector(".show-all-btn");
// let filterBtn = document.querySelector(".filter-btn");
// let pantryBtn = document.querySelector(".my-pantry-btn");
// let savedRecipesBtn = document.querySelector(".saved-recipes-btn");
let searchBtn = document.querySelector(".fa-search");
let searchForm = document.querySelector("searchForm");
let searchInput = document.querySelector("search-input");
let showPantryRecipes = document.querySelector(".show-pantry-recipes-btn");
menuOpen = false;

// ************EVENT HANDLERS****************//




//*****************ONLOAD******************//

function uploadData() {
  currentUser = new User(userData[getRandomIndex(userData)])
  currentRecipeRepository = new recipeRepository(recipeData)
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}


//*****************DISPLAY****************//

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
