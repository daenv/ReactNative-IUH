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
     score: '4:0',
     odds: {
         team1: 1.33,
         draw: 3.25,
         team2: 6.5,
     },
 };
 
 // 1. Create player arrays for each team
 const players1 = [...game.players.slice(0, 11)];
 const players2 = [...game.players.slice(11)];
 
 // 2. Create 'gk' and 'fieldPlayers' for team 1
 const [gk, ...fieldPlayers] = players1;
 
 // 3. Create 'allPlayers' containing all players of both teams
 const allPlayers = [...players1, ...players2];
 
 // 4. Create 'players1Final' including substitutes
 const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
 
 // 5. Create variables for odds
 const { team1, draw, team2 } = game.odds;
 
 // 6. Write a function to print goals and calculate total goals
 function printGoals(...playerNames) {
     console.log(`Goals scored by:`);
     let totalGoals = 0;
     for (const playerName of playerNames) {
         const goals = game.scored.filter((player) => player === playerName).length;
         totalGoals += goals;
         console.log(`${playerName}: ${goals} goals`);
     }
     console.log(`Total goals: ${totalGoals}`);
 }
 
 // Test data for 6
 console.log("Test data for 6:");
 printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
 printGoals(...game.scored);
 
 // 7. Determine which team is more likely to win
 console.log(`\nTeam with lower odds is more likely to win:`);
 team1 < team2 && console.log(`Team 1 (${game.team1}) is more likely to win.`);
 team1 > team2 && console.log(`Team 2 (${game.team2}) is more likely to win.`);
 draw < team1 && console.log(`A draw is more likely.`);
 