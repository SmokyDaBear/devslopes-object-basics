/* 
Module Two Exercise: Object Methods
Start with exercise-2.md if you haven't read it! 
*/

//  DO NOT EDIT THE BELOW OBJECT //

const papaJohns = {
  name: "Papa John's",
  slogan: "Better Ingredients. Better Pizza. Papa John's.",
  cuisines: ["italian", "american", "pizza"],
  pizzaToppings: {
    pepperoni: 2,
    peppers: 0.6,
    extraCheese: 1.5,
    olives: 0.5,
    bacon: 3,
    extraSauce: 1,
  },
  numberOfStars: 3.5,
  favorited: false,
  address: "555 Main Street",
  zipcode: 11234,
  acceptsReservations: false,
};

// DO NOT EDIT THE ABOVE OBJECT //

// YOUR WORK GOES HERE //

//1 & 2

const grabCategories = (objectName) => {
  return Object.keys(objectName);
};
//3
console.log(grabCategories(papaJohns));

//4 !!BONUS POINTS!!

console.log(grabCategories(papaJohns.pizzaToppings)); //grabs the keys from the object 'pizzaToppings' within the object 'papaJohns'

//5

const verifyValues = (objectName, numVals) => {
  let c = Object.values(objectName).length;
  console.log(`Actual: ${c}`, `Requested: ${numVals}`);
  return c === numVals;
};

//6

console.log(verifyValues(papaJohns, 5)); //returns false

console.log(verifyValues(papaJohns, 9)); //returns true

//7

const getToppingsInfo = (objectName) => {
  return [
    Object.keys(objectName.pizzaToppings),
    Object.values(objectName.pizzaToppings),
  ];
};

console.log("toppings info", getToppingsInfo(papaJohns));

//8
let topping = "bacon";
console.log(papaJohns.pizzaToppings[topping]);

papaJohns.printAd = function (topping) {
  return `"Welcome to ${this.name}! We are located at ${
    this.address
  }. This week, we are having a sale on ${topping} for${
    topping != "anchovies" ? " $" : ", wait. Anchovies?! "
  }${this.pizzaToppings[topping]}. ${this.slogan}"`;
}; //Spent a while figuring out why the 'this' keyword would'nt work. I originally made this as an arrow function. Changing to a normal one fixed it!

console.log(papaJohns.printAd("bacon")); //before address and slogan change

papaJohns.slogan = "It's pretty good?";

papaJohns.address = "123 Sesame St";

papaJohns.pizzaToppings.anchovies =
  "Gross! What the h*** is wrong with you! Who puts that on a Pizza!?";

console.log(papaJohns.printAd("anchovies"));
