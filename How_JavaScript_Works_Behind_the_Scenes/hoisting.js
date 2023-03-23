//Variables
//console.log(me);
//console.log(job);
//console.log(year);

//var me = Joshua;
//let job = developer;
const year = 1999;

// Functions
//console.log(addDecl(2,3)); // func declaration
//console.log(addExpr(3,3)); // func expression
//console.log(addArrow(4,6)); // Arrow function
function addDecl(a,b) {
    return a + b;
}

const addExpr = function(a,b) {
    return a + b;
}

const addArrow = (a,b)=>a+b;

//Example
console.log(undefined)
if(!numProducts) deleteShoppingCard();

var numProducts = 10;

function deleteShoppingCard() {
    console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

// To check if varaibles(x, y, z) are property of the window
console.log(x === window.x); // Creates a property on the window global object
console.log(y === window.y);
console.log(z === window.z);