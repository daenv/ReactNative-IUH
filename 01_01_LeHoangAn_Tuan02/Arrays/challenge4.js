// Dog data
const dogs = [
     { weight: 22, owner: 'Sarah' },
     { weight: 8, owner: 'Bob' },
     { weight: 13, owner: 'Matilda' },
     { weight: 32, owner: 'Alice' },
     { weight: 17, owner: 'Michael' },
   ];
   
   // 1. Calculate recommended food portion and add it to each dog object
   dogs.forEach(dog => {
     dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
   });
   
   // 2. Find Sarah's dog and log if it's eating too much or too little
   const sarahDog = dogs.find(dog => dog.owner === 'Sarah');
   if (sarahDog) {
     if (sarahDog.recommendedFood < sarahDog.weight) {
       console.log("Sarah's dog is eating too much!");
     } else if (sarahDog.recommendedFood > sarahDog.weight) {
       console.log("Sarah's dog is eating too little!");
     } else {
       console.log("Sarah's dog is eating the recommended amount.");
     }
   }
   
   // 3. Create arrays for owners with dogs eating too much or too little
   const ownersEatTooMuch = dogs
     .filter(dog => dog.weight > dog.recommendedFood)
     .map(dog => dog.owner);
   const ownersEatTooLittle = dogs
     .filter(dog => dog.weight < dog.recommendedFood)
     .map(dog => dog.owner);
   
   // 4. Log owners of dogs eating too much or too little
   console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
   console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);
   
   // 5. Check if any dog eats the recommended amount
   const anyDogEatsRecommended = dogs.some(dog => dog.weight === dog.recommendedFood);
   console.log(`Any dog eats the recommended amount: ${anyDogEatsRecommended}`);
   
   // 6. Check if any dog eats an okay amount
   const anyDogEatsOkayAmount = dogs.some(dog => 
     dog.weight >= dog.recommendedFood * 0.9 && dog.weight <= dog.recommendedFood * 1.1
   );
   console.log(`Any dog eats an okay amount: ${anyDogEatsOkayAmount}`);
   
   // 7. Create an array of dogs eating an okay amount
   const dogsEatingOkayAmount = dogs.filter(dog => 
     dog.weight >= dog.recommendedFood * 0.9 && dog.weight <= dog.recommendedFood * 1.1
   );
   
   // 8. Create a shallow copy of the 'dogs' array and sort it by recommended food portion
   const dogsSortedByRecommendedFood = [...dogs].sort((a, b) => a.recommendedFood - b.recommendedFood);
   
   console.log(dogsSortedByRecommendedFood);
   