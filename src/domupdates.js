const domUpdates = {
  ingredientsData: null,
  user: null,
  pantryInfo: [],
  recipeData: null,

  generateUser() {
    let firstName = this.user.name.split(" ")[0];
    let welcomeMsg = `
      <section class="welcome-msg">
        <h1>Welcome ${firstName}!</h1>
      </section>`;
    document.querySelector(".banner-image").insertAdjacentHTML("afterbegin",
      welcomeMsg);
    this.findPantryInfo();
  },

  findPantryInfo() {
    this.user.pantry.forEach(item => {
      let itemInfo = this.ingredientsData.find(ingredient => {
        return ingredient.id === item.ingredient;
      });
      let originalIngredient = this.pantryInfo.find(ingredient => {
        if (itemInfo) {
          return ingredient.name === itemInfo.name;
        }
      });
      if (itemInfo && originalIngredient) {
        originalIngredient.count += item.amount;
      } else if (itemInfo) {
        this.pantryInfo.push({name: itemInfo.name, count: item.amount, id: itemInfo.id});
      }
    });
  },

  displayPantryInfo(pantry) {
    //*** pantry = DOM pantry with just name and #
    pantry.forEach(ingredient => {
      let ingredientHtml = `<li><input type="checkbox" class="pantry-checkbox" id="${ingredient.id}">
        <label for="${ingredient.name}">${ingredient.name}, ${ingredient.count}</label></li>`;
      document.querySelector(".pantry-list").insertAdjacentHTML("beforeend",
        ingredientHtml);
    });
  },

  createCards() {
    this.recipeData.forEach(recipe => {
      let shortRecipeName = recipe.name;
      if (recipe.name.length > 40) {
        shortRecipeName = recipe.name.substring(0, 40) + "...";
      }
      this.displayRecipeDetails(recipe, shortRecipeName)
    });
  }
