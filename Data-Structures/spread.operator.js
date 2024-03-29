"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Visa Angelo Travanti 23, firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  startMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 12,
    },
    fri: {
      open: 11,
      close: 22,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time, address }) {
    console.log(
      `Order received! ${this.startMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPaster: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious paste with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

const arr = [7, 3, 45];
const badNewArr = [3, 4, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// Using spread operator
const goodNewArr = [90, 21, ...arr];
console.log(goodNewArr);
console.log(...goodNewArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Usecases of spread operator: Copy array
const mainMainCopy = [...restaurant.mainMenu];
console.log(mainMainCopy);

// Usecases of spread operator: Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.startMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets, Not objects
const str = "Joshua";
const letters = [...str, "", "S."];
console.log(letters);
console.log(...str);

// Real-world example
/*
const ingredients = [
  prompt("Let's make a pasta! Ingredient 1?"),
  prompt("Ingredient 2?"),
  prompt("Ingredient 3?"),
];
*/
//console.log(ingredients);
//restaurant.orderPaster(...ingredients);

// Objects
const newRestaurant = { foundIn: 2023, ...restaurant, founder: "Joshua" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Restorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);
