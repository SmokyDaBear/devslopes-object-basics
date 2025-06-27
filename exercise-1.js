/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/

// YOUR WORK GOES HERE //

//1 & 2

const elPatron = {
  name: "El Patron",
  cuisines: ["Pollo Norteno", "Enchiladas", "Fajitas", "Carne Asada"],
  numberOfStars: 5,
  favorited: true,
};

//3

elPatron.address = "4039 E 41st St";
elPatron.zipcode = "74145";
elPatron.acceptsReservations = true;

//4

elPatron.numberOfStars += 1;
elPatron.favorited = false; //so sad :(
elPatron.cuisines.push("Margaritas");
console.log(elPatron.cuisines);

//5

const retrieveProperty = (objectName, key) =>
  objectName.hasOwnProperty(key)
    ? objectName[key]
    : "The information you requested does not exist.";

//6

console.log(retrieveProperty(elPatron, "cuisines"));
console.log(retrieveProperty(elPatron, "favorited"));
console.log(retrieveProperty(elPatron, "name"));
console.log(retrieveProperty(elPatron, "nickName"));
console.log(retrieveProperty(elPatron, "state"));

//More stuffs

elPatron.reviews = ["Best in Town", "Amazing"];
console.log(retrieveProperty(elPatron, "reviews"));
