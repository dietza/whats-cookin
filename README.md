# 🍔 What's Cookin' ? 
  
  ###### A JavaScript project by Allison Dietz and Jeff Woltjen
  
## Overview 

In this project we are building an application that allows the user to decide - What's Cookin'? Arriving on the page, the user should see recipes to choose from, and be able to search a diverse collection of recipes by name, ingredients, or category tags. They should also see their personal sidebar where they can select view the stored contents of their own pantry, their favorited recipes, the selection of recipes they intend to cook, or their previously cooked recipes. 
The application should also track an estimated cost of the ingredients, and enable the user to track the stock of their personal pantry as they indicate that they will or have cooked a selected recipe!

## Learning Goals

This project explores the concepts of choosing classes, organizing data across large arrays, array prototype iterator methods, and test-driven development implementing chai frameworks. The project spanned approximately 10 days as part of Turing Front End Module 2's paired project. 

## Functionality

 - Enable a user to access a personalized page as where they can select a recipe to view it's details, then choose to save that recipe to a collection of favorites, a collection of recipes that they plan to cook, or to cook that recipe now.
- They user could also elect to search the for recipes by entering the name of a recipe, of an ingredient, or a type of recipe/category.
- If the user selects a recipe card on the main display, they will be able to add it to one of their saved collections, and be able to select 'to cook!' the recipe.
- When a user has decided to cook a recipe, the application will track the amounts of stored contents in their pantry and remove the amounts called for by the selected recipe.
- If a user selects to view their personal pantry from the sidebar, the list of ingredients and the quatity that they have instock are displayed to the user.
- When a user does not have enough of the necessary ingredients for a recipe that they have selected to cook, the correct needed amount should be added to a unique shopping list.
- When a user selects to view their favorite recipes, they should see that collection displayed and be able to select one of the recipes to view again.
- When a user selects to view their list of recipes to cook, they should likewise see that collection displayed.
- When a user selects to view their cooked recipes, they should see the recipes that have cooked in the past.
- The user should be able to select to view the full collection of recipes again.

![D09F3A82-FA9B-4DAE-A0AA-E835F99A2A15_1_105_c](https://user-images.githubusercontent.com/64617223/96833229-4ded8f00-13fd-11eb-83ef-d5aeda9ae80b.jpeg)

![7CE35E00-8C45-487D-B9D3-18855B297E26_1_105_c](https://user-images.githubusercontent.com/64617223/96833369-8a20ef80-13fd-11eb-84f8-4ce8b1e16247.jpeg)

## Challenges 


###### Organizing data into classes
  > This was the first project at Turing where the amount of data avaialble gave programmers discretion in terms of how that data was organized and displayed. There were several available options but the challenge laid in picking an option and seeing it through.
  

###### Instantiating these classes on the DOM
  > In connection with the above, instantiating these classes as object literals with associated parameters onto the document object model in a coherent and aesthetically pleasing manner was perhaps the most challenging aspect of this project. It required the programmers to slow down to visualize what data was actually being passed through to which constructors, why, etc. 
  

###### Accessing nested data with array prototype methods
  > Only array prototype iterator methods are used to access data nested in arrays. No for loops have been used in this project. ES6 syntax use has also been encouraged and widely implemented. 
  
## Victories

###### Getting recipe cards to display on the DOM 
  > Definitely a huge victory for this project, as it requires the programmers to grab data from multiple locations and present it in newly created objects interpolated into the html. 

###### Conquering Merge Conflicts
  > Allison in particular had encountered a series of nasty merge conflicts during the construction of this project which she managed to tackle in a professional manner and put the monster back into Pandora's box.
  

###### Early inclusivity
  > We've made attempts to incorporate some basic accessibility considerations in the initial phases of this project, through use of a color palette selector to ensure adherence to WCAG Guidelines of text and background contrast ratios, as well as attribute descriptions through index.html.

###### Test-Driven Development
  > We implemented thorough test-driven development to build the foundational logic to be used in this application
  
  ![A247CA14-0C81-4235-9B79-EBB9E6E7573B](https://user-images.githubusercontent.com/64617223/96832109-75435c80-13fb-11eb-839c-76f37114a540.jpeg)
  
## Programming Languages Used
- HTML in index.html
- CSS in styles.css
- ES6 JavaScript
  - in scripts.js
  - a User Class in User.js
  - a Recipe Class in Recipe.js
  
## Set Up Instructions
- Fork this repository and clone it down to your local machine.
- Move into that directory: cd whats-cookin.
- Run open index.html to run the app!
- To see the code itself run (your text editor).
  
## Contributors

- [Allison Dietz](https://www.github.com/dietza)

- [Jeff Woltjen](https://www.github.com/JWoltjen)

Through the course of development on this project, contributors collaborate through pair-programming, utilizing Slack and the Teletype package for Atom.io.

A GitHub project board, PR template, reviews and feedback have been utilized to execute this remote workflow across two timezones.
