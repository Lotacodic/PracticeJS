// Push Method: Add element at the end of an array 
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Josh')
console.log(newLength);

// unshift: Add elements
friends.unshift('James');
console.log(friends);

// pop: Remove Elements
friends.pop; // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

// Index of an Element
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Ken'));

console.log(friends.includes('Michael'));
console.log(friends.includes('Ken'));

// Strict equality - No type coercion
friends.push(22)
console.log(friends.includes('22')) // False
//But
friends.push(25)
console.log(friends.includes(25)) // True


// We can use the include method to write conditions
if (friends.includes('Peter')) {
    console.log('You have a friend called Peter');
}