// 1) Understanding the problem
// - Which datatype will the user input?
//   array [17, 21, 23]
// - What will be the output? 
//   String("...17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ...");

// 2) Breaking up into sub-problems
// - How loop through an array to get each element
// - How join each element into a string
// - String contains (...each element in the array + its sequence + otherwords)


const printForeCast = function(arr) {
    for(let i = 0; i < arr.length; i++) {
        let emptyString = "... ";
        emptyString += `${arr[i]} in ${[i + 1]} days ...`;

        console.log(emptyString);
    }
}

const checkForeCast = printForeCast([5, 6, 10]);