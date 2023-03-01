// Backward looping
const joshua = [
    'Joshua',
    'Ngene',
    2023 - 1999,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for(let i = joshua.length - 1; i >= 0; i--) {
    console.log(i, joshua[i]);
}

// Creating a loop inside of a loop

for(let exercise = 1; exercise < 4; exercise++){
    console.log(`========= Starting excercise ${exercise}`);

    for(let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}