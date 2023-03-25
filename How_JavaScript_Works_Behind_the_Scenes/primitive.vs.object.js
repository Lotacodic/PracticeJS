'use strict';

let age = 24;
let oldAge = age;
age = 25;
console.log(age);
console.log(oldAge);

const me = {
    name: 'Joshua',
    age: 24,
};

const friend = me;
// All variables delcared with const are immutable for primitive values not for reference values
friend.age = 27;
console.log('Friend', friend);
console.log('Me', me);

// Primitive types
let lastName = 'Joshua';
let oldLastName = lastName;
lastName = 'Ngene';

console.log(`${lastName}\n ${oldLastName}`);

// Reference types
const gifty = {
    firstname: 'Gifty',
    lastName: 'Ben',
    age: 25,
}

const giftyMarried = gifty;
giftyMarried.lastName = 'Chima';

console.log('Before Marriage:', gifty);
console.log('After Marriage', giftyMarried);

// Copying objects
const gifty2 = {
    firstname: 'Gifty',
    lastName: 'Ben',
    age: 25,
    family: ['alice', 'Bob'],
}

const giftyCopy= Object.assign({}, gifty2);
giftyCopy.lastName = 'Chikammadu';

// Deeply nested object
giftyCopy.family.push('Ziki');
giftyCopy.family.push('Bobby');

console.log('Before:', gifty2);
console.log('After', giftyCopy);