// Module 3 Exercise: Looping in Objects
// Start with exercise-3.md if you haven't read it!

const dominos = {
  name: "Domino's",
  cuisines: ["italian", "new york", "pizza"],
  pizzaToppings: {
    pepperoni: 2.2,
    mushrooms: 0.7,
    extraCheese: 1.4,
    onions: 0.5,
    sausage: 2.8,
    extraSauce: 0.8,
  },
  starReviews: {
    Peach: 3,
    Yoshi: 2.1,
    Bowser: 4,
    Mario: 5,
    Luigi: 5,
    Gumba564: 3.4,
    "Donkey Kong": 3.2,
  },
  favorited: true,
  address: "123 Elm Street",
  zipcode: 54321,
  acceptsReservations: true,
};

//2

function printPizzaPlace(objectName) {
  // let answer = [];
  // for (const key in objectName) {
  //   if (typeof objectName.key != Object) {
  //     answer.push(key + ":" + objectName[key]);
  //     console.log(key + typeof objectName.key);
  //   } else {
  //     answer.push(key);
  //     answer.push(printPizzaPlace(objectName.key));
  //   }
  // }
  // return answer;
  return Object.entries(objectName);
}

console.log(printPizzaPlace(dominos));

//3

function toppingsPriceRange(objectName) {
  let lowest = 90000000; //just in case they have Platinum as a topping :)
  let highest = 0;
  for (const key in objectName.pizzaToppings) {
    lowest = Math.min(lowest, objectName.pizzaToppings[key]);
    highest = Math.max(highest, objectName.pizzaToppings[key]);
  }
  return [`lowest: ${lowest}`, `highest: ${highest}`];
}
console.log(toppingsPriceRange(dominos));

//4

function calculateAverageRating(objectName) {
  let total = 0;
  let numReviews = 0;
  for (const key in objectName.starReviews) {
    total += objectName.starReviews[key];
    numReviews++;
  }
  return (total / numReviews).toFixed(1);
}

console.log(calculateAverageRating(dominos));
