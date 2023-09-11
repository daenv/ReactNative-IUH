function whereAmI(lat, lng) {
     // PART 1: Reverse Geocoding using Geocode API
     const geocodeUrl = `https://geocode.xyz/${lat},${lng}?geoit=json`;
   
     fetch(geocodeUrl)
       .then((response) => {
         if (!response.ok) throw new Error(`Problem with geocoding: (${response.status})`);
         return response.json();
       })
       .then((data) => {
         console.log(`You are in ${data.city}, ${data.country}`);
   
         // PART 2: Rendering the country using Countries API
         const country = data.country;
         const countryApiUrl = `https://restcountries.com/v3.1/name/${country}`;
   
         return fetch(countryApiUrl);
       })
       .then((response) => {
         if (!response.ok) throw new Error(`Problem with fetching country data: (${response.status})`);
         return response.json();
       })
       .then((countryData) => {
         const countryName = countryData[0].name.common;
         console.log(`You are in ${countryName}`);
       })
       .catch((error) => console.error(error.message));
   }
   
   // Test with provided coordinates
   whereAmI(52.508, 13.381); // Berlin, Germany
   whereAmI(19.037, 72.873); // Mumbai, India
   whereAmI(-33.933, 18.474); // Cape Town, South Africa
   