const joshua = {
    firstName: 'Joshua',
    lastName: 'Ngene',
    birthYear: 1998,
    job: 'student',
    friends: ['Michael', 'Anthony', 'Hillary'],
    hasDriverLicense: false,

    // Functions in an object are called methods
    
   // calcAge: function (birthYear) {
   //     return 2023 - birthYear;
   // }
   
   // 'this' keyword is pointing to the object 'joshua'
   // calcAge: function () {
   //  return 2025 - this.birthYear;
   //}

   // Using the 'this' keyword to create new property
   calcAge: function () {
    this.age = 2025 - this.birthYear;
    return this.age
   },

   getSummary: function () {
   console.log(`${this.firstName} is a ${this.calcAge()}-year old ${joshua.job}, and he has ${joshua.hasDriverLicense ? 'a' : 'no' } driver's license`);
   // Tenary operator: joshua.age}-year old ${joshua.job}, and he has ${joshua.hasDriverLicense ? 'a' : 'no'
   }
}

// console.log(joshua.calcAge()); // Dot
// console.log(joshua['calcAge']()); // Bracket

//console.log(joshua.calcAge());
//console.log(joshua.age);
//console.log(joshua);

console.log(joshua.getSummary());