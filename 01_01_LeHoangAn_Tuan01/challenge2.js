// Data 1
const markWeight1 = 78;  // Mark's weight in kilograms
const markHeight1 = 1.69;  // Mark's height in meters
const johnWeight1 = 92;  // John's weight in kilograms
const johnHeight1 = 1.95;  // John's height in meters

// Data 2
const markWeight2 = 95;  // Mark's weight in kilograms
const markHeight2 = 1.88;  // Mark's height in meters
const johnWeight2 = 85;  // John's weight in kilograms
const johnHeight2 = 1.76;  // John's height in meters

// Function to calculate BMI
function calculateBMI(weight, height) {
    return weight / (height * height);
}

// Calculate BMIs for Data 1
const markBMI1 = calculateBMI(markWeight1, markHeight1);
const johnBMI1 = calculateBMI(johnWeight1, johnHeight1);

// Calculate BMIs for Data 2
const markBMI2 = calculateBMI(markWeight2, markHeight2);
const johnBMI2 = calculateBMI(johnWeight2, johnHeight2);

// Compare BMIs for Data 1 and Data 2
const result1 = markBMI1 > johnBMI1 ? "Mark's BMI" : "John's BMI";
const result2 = markBMI2 > johnBMI2 ? "Mark's BMI" : "John's BMI";

// Display the results for Data 1
console.log("Data 1 Results:");
console.log(`${result1} (${markBMI1.toFixed(1)}) is higher than ${result1 === "Mark's BMI" ? "John's" : "Mark's"} (${johnBMI1.toFixed(1)})!`);

// Display the results for Data 2
console.log("\nData 2 Results:");
console.log(`${result2} (${markBMI2.toFixed(1)}) is higher than ${result2 === "Mark's BMI" ? "John's" : "Mark's"} (${johnBMI2.toFixed(1)})!`);
