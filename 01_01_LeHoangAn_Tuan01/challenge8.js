// 1. Create an array 'bills' containing all 10 test bill values
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// 2. Create empty arrays for 'tips' and 'totals'
const tips = [];
const totals = [];

// 3. Use the 'calcTip' function to calculate tips and totals for each bill using a for loop
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}

console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Totals:", totals);

// 4. Bonus: Write a function 'calcAverage' to calculate the average of an array
function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

// 4.3. Call the 'calcAverage' function with the 'totals' array
const averageTotal = calcAverage(totals);
console.log(`The average total is ${averageTotal.toFixed(2)}`);
