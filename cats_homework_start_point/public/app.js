var app = function() {
  console.log("DOMContentLoaded event - JS running");

  makeNewCat();
}

var CAT_ARRAY = [
  {catName: "Pringle", catFaveFood: "Suffering", catPicture: "img width='500' src='http://i.imgur.com/YPSjOCA.jpg'>"}
]

var createCatListItem = function() {
  var catListItem = document.createElement("ul");
  catListItem.classList.add("cat");
  return catListItem;
}

var createCatName = function(name) {
  var catName = document.createElement("li");
  catName.textContent = name;
  return catName;
}

var createCatFaveFood = function(food) {
  var catFaveFood = document.createElement("li");
  catFaveFood.textContent = food;
  return catFaveFood;
}

var createCatPicture = function(picture) {
  var catPicture = document.createElement("li");
  catPicture.innerHTML = picture;
  return catPicture;
}

var appendElements = function(cats, catName, catFaveFood, catPicture) {
  catName.appendChild(catName);
  catFaveFood.appendChild(catFaveFood);
  catPicture.appendChild(catPicture);
}

var makeNewCat = function(name, food, picture) {
  var catName = createCatName();
  var catFaveFood = createCatFaveFood();
  var catPicture = createCatPicture();
}

var makeNewCat = function() {
  var catListItem = document.createElement("ul");
  catListItem.classList.add("cat");

  var catName = document.createElement("li");
  catName.textContent = "Pringle";

  var catFaveFood = document.createElement("li");
  catFaveFood.textContent = "Suffering";

  var catPicture = document.createElement("li");
  catPicture.innerHTML = "<img width='500' src='http://i.imgur.com/YPSjOCA.jpg'>"

  catListItem.appendChild(catName);
  catListItem.appendChild(catFaveFood);
  catListItem.appendChild(catPicture);

  var allCats = document.querySelector("section#cats");
  console.log(allCats);
  allCats.appendChild(catListItem);


}

window.addEventListener('DOMContentLoaded', app)
// Use the provided start_point and complete the following tasks:
//
// Add JS code to allow a new cat to be added programmatically. Do it rough and
// ready at first!
//
// Refactor the code to make it easy to add a new cat, just like we did
// with the quotes.
//
// EXTENSION: Remove the cat data in the HTML and add them via your javascript.
// If you want to be fancy, put the cat data into an array.
//
// EXTENSION: Style the site!
// Hint: Be careful with the order you append your
// elements to each other!
// Also be careful with what you need to pass when
// setting an image's width via the DOM.
