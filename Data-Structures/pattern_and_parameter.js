const restaurant = {
    name: "Classico Italiano",
    location: "Visa Angelo Travanti 23, firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
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
}

// SPREAD Operator
const arr = [1, 2, ...[3, 4]];

//REST Operator
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);