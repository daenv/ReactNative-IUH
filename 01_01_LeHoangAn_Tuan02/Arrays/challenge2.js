// Function to calculate the average human age of adult dogs
function calcAverageHumanAge(ages) {
     // Calculate human ages for all dogs
     const humanAges = ages.map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4));
 
     // Exclude dogs younger than 18 human years
     const adultDogAges = humanAges.filter(humanAge => humanAge >= 18);
 
     // Calculate the average human age of adult dogs
     if (adultDogAges.length > 0) {
         const averageAge = adultDogAges.reduce((acc, age) => acc + age, 0) / adultDogAges.length;
         return averageAge;
     } else {
         return 0; // No adult dogs found
     }
 }
 
 // Test data
 const data1 = [5, 2, 4, 1, 15, 8, 3];
 const data2 = [16, 6, 10, 5, 6, 1, 4];
 
 // Calculate and log the average human age for both datasets
 console.log(`Average Human Age (Data 1): ${calcAverageHumanAge(data1)} years`);
 console.log(`Average Human Age (Data 2): ${calcAverageHumanAge(data2)} years`);
 