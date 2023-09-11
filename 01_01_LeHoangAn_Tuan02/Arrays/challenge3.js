// Arrow function to calculate the average human age of adult dogs using chaining
const calcAverageHumanAge = ages =>
  ages
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(humanAge => humanAge >= 18)
    .reduce((acc, age, _, arr) => acc + age / arr.length, 0);

// Test data
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

// Calculate and log the average human age for both datasets
console.log(`Average Human Age (Data 1): ${calcAverageHumanAge(data1)} years`);
console.log(`Average Human Age (Data 2): ${calcAverageHumanAge(data2)} years`);
