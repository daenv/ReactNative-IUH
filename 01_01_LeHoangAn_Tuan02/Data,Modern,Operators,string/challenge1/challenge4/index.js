document.getElementById('convertButton').addEventListener('click', () => {
     const inputTextarea = document.getElementById('inputTextarea');
     const variableNames = inputTextarea.value.split('\n');
 
     variableNames.forEach((variableName) => {
         const words = variableName.trim().split('_');
         let camelCaseName = words[0];
 
         for (let i = 1; i < words.length; i++) {
             camelCaseName += words[i][0].toUpperCase() + words[i].slice(1);
         }
 
         console.log(`${camelCaseName} ✅`.repeat(words.length - 1));
     });
 });
 