// One of the most used applications of 'for loop' 
// is to loop through array

const jonasArray = [
    'Jonas',
    'Chilota',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];
const types = [];

// console.log(jonasArray[0]);
// console.log(jonasArray[1]);
// console.log(jonasArray[2]);
// console.log(jonasArray[3];
// console.log(jonasArray[4]);

// Logging every individual element in the array
for( let i = 0; i <= jonasArray.length; i++) {
    // Reading from jonasArray
    console.log(jonasArray[i]);

    // Filling types array
    // types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for(i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
console.log('=== ONLY STRINGS ===')
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue;
    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log('=== ONLY Numbers ===')
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') break;
    console.log(jonasArray[i], typeof jonasArray[i]);
}