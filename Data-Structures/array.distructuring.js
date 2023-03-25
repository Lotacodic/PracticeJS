"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Visa Angelo Travanti 23, firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  startMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [mains, , secondary] = restaurant.categories;
console.log(mains, secondary);

// Switching 'main' and 'secondary' normally

//const temp = main;
//main = secondary;
//secondary = temp;
//console.log(main, secondary);

// Switching 'main' and 'secondary' by destructuring
[mains, secondary] = [secondary, mains];
console.log(mains, secondary);

// Receive 2 return values from a function
let [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

// Switching variable
[starter, main] = [main, starter];
console.log(starter, main);

// Nested Destructuring
const nested = [2, 4, [5, 6]];
//const [i, , j] = nested;
//console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
