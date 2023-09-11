// Given data about the game events
const gameEvents = new Map([
     [17, '⚽ GOAL'],
     [36, '🔁 Substitution'],
     [47, '⚽ GOAL'],
     [62, '🔶 Yellow card'],
     [64, '🔴 Red card'],
     [69, '🔁 Substitution'],
     [70, '🔁 Substitution'],
     [72, '⚽ GOAL'],
     [76, '🔁 Substitution'],
     [80, '⚽ GOAL'],
     [92, '🔴 Second yellow card'],
 ]);
 
 // 1. Create an array 'events' of the different game events (no duplicates)
 const events = [...new Set(gameEvents.values())];
 
 // 2. Remove the unfair yellow card event from the game events log
 gameEvents.delete(64);
 
 // 3. Compute and log the average event frequency
 const totalMinutes = 90;
 const averageEventFrequency = totalMinutes / gameEvents.size;
 console.log(`An event happened, on average, every ${averageEventFrequency} minutes`);
 
 // 4. Loop over 'gameEvents' and log each element with half information
 for (const [minute, event] of gameEvents.entries()) {
     const half = minute <= 45 ? 'FIRST HALF' : 'SECOND HALF';
     console.log(`[${half}] ${minute}: ${event}`);
 }
 