// Given data about the game
const game = {
     team1: 'Bayern Munich',
     team2: 'Borrussia Dortmund',
     players: [
         'Neuer',
         'Pavard',
         'Martinez',
         'Alaba',
         'Davies',
         'Kimmich',
         'Goretzka',
         'Coman',
         'Muller',
         'Gnarby',
         'Lewandowski',
         'Hummels',
         'Witsel',
         'Schulz',
         'Hakimi',
         'Reus',
         'Thorgan Hazard',
         'Brandt',
         'Favre',
     ],
     scored: ['Lewandowski', 'Gnarby', 'Hummels', 'Lewandowski'],
     score: '4:0',
     odds: {
         team1: 1.33,
         draw: 3.25,
         team2: 6.5,
     },
 };
 
 // 1. Loop over the game.scored array and print player names with goal numbers
 console.log("Goals scored:");
 for (const [i, player] of game.scored.entries()) {
     console.log(`Goal ${i + 1}: ${player}`);
 }
 
 // 2. Use a loop to calculate the average odd and log it to the console
 let totalOdds = 0;
 for (const odd of Object.values(game.odds)) {
     totalOdds += odd;
 }
 const averageOdd = totalOdds / Object.values(game.odds).length;
 console.log(`Average odd: ${averageOdd.toFixed(2)}`);
 
 // 3. Print the 3 odds in a nice formatted way
 console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
 console.log(`Odd of draw: ${game.odds.draw}`);
 console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);
 
 // 4. Bonus: Create an object called 'scorers' with player names and goal counts
 const scorers = {};
 for (const player of game.scored) {
     scorers[player] ? scorers[player]++ : (scorers[player] = 1);
 }
 
 console.log("\nScorers:");
 for (const [player, goals] of Object.entries(scorers)) {
     console.log(`${player}: ${goals} goal${goals === 1 ? "" : "s"}`);
 }
 
 // Determine which team is more likely to win without using if/else or ternary operator
 console.log(`\nTeam with lower odds is more likely to win:`);
 team1 < team2 && console.log(`Team 1 (${game.team1}) is more likely to win.`);
 team1 > team2 && console.log(`Team 2 (${game.team2}) is more likely to win.`);
 draw < team1 && console.log(`A draw is more likely.`);
 