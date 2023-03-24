"use strict";

//var firstName = "James";

const joshua = {
  firstName: "Joshua",
  year: 1999,
  calcAge: function () {
    console.log(2023 - this.year);

    // Solution 1
    //const self = this; // self or that
    //const isMillenial = function () {
    //console.log(self);
    //console.log(self.year >= 1981 && self.year <= 1996);
    //};

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  // Arrow function does not get its own this keyword but uses the one at its surroundings
  //As the best practice don't use an arrow function as a method
  // using a regular function will remove the undefined created as a result of using an arrow function

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },

  /*
  greet:function() {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
  */
};
joshua.greet();
//console.log(this.firstName);
joshua.calcAge();


// Arguments keyword: Not used in modem JavaScript

const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
}
addExpr(2, 5); 
addExpr(2, 4, 5, 4);

// Arguments keyword don't exist in arrow function
var addArrow = (a, b) => {
    console.log(arguments);
    a + b;
} 
addArrow(3, 4, 5)