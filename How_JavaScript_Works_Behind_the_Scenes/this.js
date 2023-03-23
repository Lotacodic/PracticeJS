'use strict'

// Different ways of calling functions

// method this = <Object that is calling the method>
const josh = {
    name: 'Joshua',
    year: 1999,
    calcAge: function() {
        return 2023 - this.year;
    }
}
josh.calcAge();
// Value of the 'this' keyword is 'josh' i.e josh.year

// Simple function: call this = undefined(in strict mode)

// Arrow functions: this = <this of surrounding function (lexical this)> i.e they don't get their own this keyword

// Event listener: this = <DOM element that the handler is attached to>

// This keyword outside amy function
console.log(this);

// Inside regular func

const calcAge = function(birthYear) {
    console.log(2037 - birthYear);
    console.log(this); // points to undefined bcos it is own this keyword
}
calcAge(1998);

// inside arrow function

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this); // this will point to the 'this' keyword in the global scope
}

calcAgeArrow(1999)

// this keyword inside of method

const joshua = {
    year: 1998,
    calcAge2: function() {
        console.log(this);
        console.log(2023 - this.year);
    }
}
joshua.calcAge2();

// Method borrowing
const matilda = {
    year: 2017,
}

matilda.calcAge2 = joshua.calcAge2;
matilda.calcAge2(); // The this keyword always points on the object that is a calling the method

// Copying the function
const f = joshua.calcAge2
f(); // (undefined) This is bcos a regular func call and is not attached to any object