// Poll object
const poll = {
     question: "What is your favorite programming language?",
     options: ["JavaScript", "Python", "Rust", "C++"],
     answers: [0, 0, 0, 0],
 
     // Method to register a new answer
     registerNewAnswer: function () {
         const input = prompt(
             `${this.question}\n${this.options.join("\n")}\n(Write option number)`
         );
 
         const choice = Number(input);
 
         if (choice >= 0 && choice < this.options.length && !isNaN(choice)) {
             this.answers[choice]++;
         }
         this.displayResults();
     },
 
     // Method to display poll results
     displayResults: function (type = "array") {
         if (type === "string") {
             console.log(`Poll results are ${this.answers.join(", ")}`);
         } else {
             console.log(this.answers);
         }
     },
 };
 
 document.getElementById("answer-poll").addEventListener("click", function () {
     poll.registerNewAnswer();
 });
 
 document.getElementById("display-results").addEventListener("click", function () {
     poll.displayResults("array");
 });
 