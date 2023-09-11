// 1. Write a function to calculate the tip based on the rules
function calcTip(bill) {
     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
 }
 
 // Test the function with a bill value of 100
 const testBill = 100;
 const testTip = calcTip(testBill);
 console.log(`For a bill of $${testBill}, the tip is $${testTip}`);
 
 // 2. Create an array 'bills' containing the test data
 const bills = [125, 555, 44];
 
 // 3. Create an array 'tips' containing the tip value for each bill
 const tips = bills.map(calcTip);
 
 // 4. Bonus: Create an array 'total' containing the total values
 const totals = bills.map((bill, index) => bill + tips[index]); 
 
 // Display the tips and totals
 console.log("Tips:", tips);
 console.log("Totals:", totals);
 