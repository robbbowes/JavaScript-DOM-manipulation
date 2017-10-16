var CAT_ARRAY = [
  {catName: "Boba", catFaveFood: "Sock fluff", catPicture: "<img width='500' src='http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg'>"},
  {catName: "Barnaby", catFaveFood: "Tuna", catPicture: "<img width='500' src='https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg'>"},
  {catName: "Max", catFaveFood: "Whiskas Temptations", catPicture: "<img width='500' src='http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg'>"},
  {catName: "Pringle", catFaveFood: "Suffering", catPicture: "<img width='500' src='http://i.imgur.com/YPSjOCA.jpg'>"},

]

var createCatListItem = function() {
  var catListItem = document.createElement("ul");
  catListItem.classList.add("cat");
  return catListItem;
}

var createCatName = function(name) {
  var catName = document.createElement("li");
  catName.textContent = "Name: " + name;
  console.log(catName);
  return catName;
}

var createCatFaveFood = function(food) {
  var catFaveFood = document.createElement("li");
  catFaveFood.textContent = "Favourite food: " + food;
  return catFaveFood;
}

var createCatPicture = function(picture) {
  var catPicture = document.createElement("li");
  catPicture.innerHTML = picture;
  return catPicture;
}

var appendElements = function(cats, catName, catFaveFood, catPicture, catListItem) {
  cats.appendChild(catListItem);
  catListItem.appendChild(catName);
  catListItem.appendChild(catFaveFood);
  catListItem.appendChild(catPicture);
}

var makeNewCat = function(name, food, picture) {
  var catName = createCatName(name);
  var catFaveFood = createCatFaveFood(food);
  var catPicture = createCatPicture(picture);
  var catListItem = createCatListItem();
  var cats = document.querySelector("#cats");
  appendElements(cats, catName, catFaveFood, catPicture, catListItem);
}

var app = function() {
  console.log("This is a log.  THX.  Function called.");
  for (var cat of CAT_ARRAY) {
    makeNewCat(cat.catName, cat.catFaveFood, cat.catPicture);
  }
}

window.addEventListener('DOMContentLoaded', app)
// var makeNewCat = function() {
//   var catListItem = document.createElement("ul");
//   catListItem.classList.add("cat");
//
//   var catName = document.createElement("li");
//   catName.textContent = "Pringle";
//
//   var catFaveFood = document.createElement("li");
//   catFaveFood.textContent = "Suffering";
//
//   var catPicture = document.createElement("li");
//   catPicture.innerHTML = "<img width='500' src='http://i.imgur.com/YPSjOCA.jpg'>"
//
//   catListItem.appendChild(catName);
//   catListItem.appendChild(catFaveFood);
//   catListItem.appendChild(catPicture);
//
//   var allCats = document.querySelector("section#cats");
//   console.log(allCats);
//   allCats.appendChild(catListItem);





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
