// 1. Create objects for Mark and John with their properties
const mark = {
     fullName: "Mark Miller",
     mass: 78,
     height: 1.69,
 };
 
 const john = {
     fullName: "John Smith",
     mass: 92,
     height: 1.95,
 };
 
 // 2. Create a 'calcBMI' method on each object to calculate and store the BMI
 mark.calcBMI = function () {
     this.bmi = this.mass / (this.height ** 2);
     return this.bmi;
 };
 
 john.calcBMI = function () {
     this.bmi = this.mass / (this.height ** 2);
     return this.bmi;
 };
 
 // 3. Calculate and compare the BMIs and log the result
 mark.calcBMI();
 john.calcBMI();
 
 if (mark.bmi > john.bmi) {
     console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(1)})!`);
 } else if (john.bmi > mark.bmi) {
     console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(1)})!`);
 } else {
     console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi.toFixed(1)})!`);
 }
 