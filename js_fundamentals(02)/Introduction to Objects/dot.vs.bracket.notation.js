const jonas = {
    firstName: 'Jonas', // Key/property: 'value'
    lastName: 'Chilota',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

// Dot Notation
//console.log(jonas.lastName);

// Bracket Notation
// console.log(jonas['lastName']);

const namekey = 'Name';
//console.log(jonas['first' + namekey]);
//console.log(jonas['last' + namekey]);

// console.log(jonas.'first' + namekey);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
// console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}
//console.log(jonas.friends[0]);

// Adding to an object
jonas.location = 'Portugal';
jonas['twitter'] = 'lotfacodic';
console.log(jonas);

//Challenge
// *jonas has 3 friends, and his best friend is called Michael

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]} `);
// console.log(`${jonas['firstName']} has ${jonas['friends'].length} friends, and his best friend is called ${jonas['friends'][0]} `);