// Create an arrow function to calculate the average of 3 scores
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Create a function to check the winner
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No team wins!");
    }
}

// Test data
const dolphinsScores1 = [44, 23, 71];
const koalasScores1 = [65, 54, 49];

const dolphinsScores2 = [85, 54, 41];
const koalasScores2 = [23, 34, 27];

// Calculate the averages
const avgDolphins1 = calcAverage(...dolphinsScores1);
const avgKoalas1 = calcAverage(...koalasScores1);

const avgDolphins2 = calcAverage(...dolphinsScores2);
const avgKoalas2 = calcAverage(...koalasScores2);

// Check the winners
checkWinner(avgDolphins1, avgKoalas1);
checkWinner(avgDolphins2, avgKoalas2);
