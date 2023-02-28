const calcAverage = (score1, score2 , score3) => {
    const averageScore = (score1 + score2 + score3) / 3;
    return averageScore;
}


function checkWinner(avgDolphins, avgKoolas) {
    if(avgDolphins >= 2 * avgKoolas) {
        console.log(`Dolphins wins (${avgDolphins} vs ${avgKoolas})`);
    } else if (avgKoolas >= 2 * avgDolphins) {
        console.log(`Koolas wins (${avgKoolas} vs ${avgDolphins})`);
    } else {
        console.log(`No one won! (${avgDolphins} vs ${avgKoolas})`);
    }
}

const avgDolphins = calcAverage(85, 54, 41);
const avgKoolas = calcAverage(23, 34, 27);
console.log(checkWinner(avgDolphins, avgKoolas));