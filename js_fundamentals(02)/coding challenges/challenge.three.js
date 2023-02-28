const mark = {
    fullName: 'Mark Miller',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

console.log(`${mark.calcBMI() > john.calcBMI() ? 
    `${this.fullName}'s BMI (${this.bmi}) is higher than ${john.fullName}'s (${john.bmi})!` : 
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`} `);
