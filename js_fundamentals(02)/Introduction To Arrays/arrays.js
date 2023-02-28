const friend1 = 'Michael';
const friend2 = 'Steven;'
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// Alternatively: using array function
const year = new Array(1992, 1820, 2006, 2023);
console.log(year);

// Getting individual element using its position
console.log(friends[0]);
console.log(friends[2]);

// No of elements in the array
console.log(friends.length);

// Getting the index of the last element in the array
console.log(friends[friends.length -1]); //3-1 = 2

// Mutating an array
// Note: only primitive values are immutable(unchangeable)
// Array is not a primitive value and it is mutable
friends[2] = 'Joshua';
console.log(friends);
// friends = ['Bob', 'Alice'] isn't possible

const firstName = 'josh';
const josh = [firstName, 'Ngene', 2023 - 1998, 'developer', friends];
console.log(josh);


// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];
// console.log(calcAge(years));


// Any varaible that produces a value is an expression
// See examples below:
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

// We can place function calls into an array
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);