// Improving my tip calculator with arrays and loops

const bills = [22, 295, 176, 440, 36, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (billValue) => {
    return billValue >= 50 && billValue <= 300 ? billValue * 0.15 :
    billValue * 0.2
};

for(let i = 0; i < bills.length; i++) {
   tips.push(calcTip(bills[i]));
   totals.push(tips[i] + bills[i]);
}

console.log(tips, totals);


// BONUS CHALLENGE!
//arr = [3, 4, 5, 4]
//sum = arr[0] + arr[1] + arr[2] + arr[3]
//average = sum / arr.length

//console.log(average)

const calcAverage = (arr) => {
let sum = 0
for(i = 0 ; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
}
return sum / arr.length;
}
console.log(calcAverage([3, 4, 5, 4]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
