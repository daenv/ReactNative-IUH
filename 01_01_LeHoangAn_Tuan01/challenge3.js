// Data 1
const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];

// Data Bonus 1
const dolphinsScores2 = [97, 112, 101];
const koalasScores2 = [109, 95, 123];

// Data Bonus 2
const dolphinsScores3 = [97, 112, 101];
const koalasScores3 = [109, 95, 106];

// Function to calculate the average score
function calculateAverage(scores) {
    const total = scores.reduce((acc, score) => acc + score, 0);
    return total / scores.length;
}

// Function to determine the winner
function determineWinner(dolphinsScores, koalasScores) {
    const dolphinsAverage = calculateAverage(dolphinsScores);
    const koalasAverage = calculateAverage(koalasScores);

    if (dolphinsAverage >= 100 && dolphinsAverage > koalasAverage) {
        return "Dolphins win!";
    } else if (koalasAverage >= 100 && koalasAverage > dolphinsAverage) {
        return "Koalas win!";
    } else if (dolphinsAverage >= 100 && koalasAverage >= 100 && dolphinsAverage === koalasAverage) {
        return "It's a draw!";
    } else {
        return "No one wins the trophy.";
    }
}

// Test with Data 1
console.log("Data 1:", determineWinner(dolphinsScores1, koalasScores1));

// Test with Data Bonus 1
console.log("Data Bonus 1:", determineWinner(dolphinsScores2, koalasScores2));

// Test with Data Bonus 2
console.log("Data Bonus 2:", determineWinner(dolphinsScores3, koalasScores3));
