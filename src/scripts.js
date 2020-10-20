
// ************GLOBAL VARIABLES***************//
let currentUser;
console.log('ingdDATA:', ingredientsData);

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


// ************EVENT LISTENERS***************//
window.addEventListener('load', function () {
 uploadData()
})

// ************EVENT HANDLERS****************//




//*****************ONLOAD******************//
function uploadData() {
  currentUser = new User(usersData[getRandomIndex(usersData)], ingredientsData);
  displayUserData();
  displayRecipeCards();
  // populatePantry();
}

//*****************MISC // INSTANTIATIONS****************//

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// function populatePantry() {
//
// };

function populateAllRecipes() {

};

//*****************DISPLAY****************//

function displayUserData() {
  let currentFirstName = currentUser.displayFirstName()
  document.querySelector('.welcome-bar').innerHTML =
  `<h1>Welcome,</h1>
  <h3> ${currentUser.displayFirstName()}! </h3>`
}

// function toggleMenu() {
//   var menuDropdown = document.querySelector(".hamburger-button-dropbtn");
//   menuOpen = !menuOpen;
//   if (menuOpen) {
//     menuDropdown.style.display = "block";
//     pantryBtn.setAttribute('aria-expanded', true);
//   } else {
//     menuDropdown.style.display = "none";
//     pantryBtn.setAttribute('aria-expanded', false);
//   }
// }

function displayUserData() {

};

function displayRecipeCards() {

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
