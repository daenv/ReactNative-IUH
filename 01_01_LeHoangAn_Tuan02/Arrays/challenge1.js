// Function to check if a dog is an adult or a puppy
function checkDogs(dogsJulia, dogsKate) {
     // Create a shallow copy of Julia's data and remove cat ages
     const correctedJuliaData = [...dogsJulia];
     correctedJuliaData.splice(0, 1);
     correctedJuliaData.splice(-2);
 
     // Create an array with both Julia's corrected data and Kate's data
     const allDogAges = [...correctedJuliaData, ...dogsKate];
 
     // Loop through all dog ages and log their status
     allDogAges.forEach((age, index) => {
         const status = age >= 3 ? "adult" : "puppy";
         console.log(`Dog number ${index + 1} is an ${status}, and is ${age} years old`);
     });
 }
 
 document.getElementById("runButton").addEventListener("click", function () {
     // Test data
     const dogsJulia1 = [3, 5, 2, 12, 7];
     const dogsKate1 = [4, 1, 15, 8, 3];
     const dogsJulia2 = [9, 16, 6, 8, 3];
     const dogsKate2 = [10, 5, 6, 1, 4];
 
     // Run the function for both test datasets
     console.log("Test Data 1:");
     checkDogs(dogsJulia1, dogsKate1);
 
     console.log("\nTest Data 2:");
     checkDogs(dogsJulia2, dogsKate2);
 });
 