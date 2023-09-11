function printForecast(arr) {
     let forecastString = "";
     for (let i = 0; i < arr.length; i++) {
         forecastString += `... ${arr[i]}°C in ${i + 1} day(s) `;
     }
     console.log(forecastString);
 }
 
 // Test Data 1
 const forecast1 = [17, 21, 23];
 console.log("Forecast Data 1:");
 printForecast(forecast1);
 
 // Test Data 2
 const forecast2 = [12, 5, -5, 0, 4];
 console.log("Forecast Data 2:");
 printForecast(forecast2);
 