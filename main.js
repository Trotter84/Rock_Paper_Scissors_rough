var rock = document.getElementById('rock').onclick
var paper = document.getElementById('paper').onclick
var scissor = document.getElementById('scissors').onclick



   var computerChoice = Math.random ()
       if (computerChoice < 0.34) {
   computerChoice = "rock"
       }
           else if (computerChoice <=0.67) {
               computerChoice = "paper"
           }
           else {
               computerChoice = "scissors"
           }

console.log("Computer: " + computerChoice)
console.log(compare(userChoice, computerChoice))

function compare(choice1, choice2) {
   if (choice1 === choice2) {
       return "It's a tie!!"
   }
   if (choice1 === "rock") {
       if (choice2 === "scissors") {
           return "Rock wins!"
       }
       else {
           return "Paper wins!"
       }
   }
   if (choice1 === "paper") {
       if (choice2 === "rock") {
           return "Paper wins!"
       }
       else {
           return "Scissors wins!"
       }
   }

   if (choice1 === "scissors") {
       if (choice2 === "rock"){
           return "Rock wins!"
       }
       else {
           return "Scissors wins!"
       }
   }
}

function user(){
   var userChoice = this.id;
   document.getElementById("output").innerHTML = ("User: " + userChoice + ". "
  + "Computer: "+ computerChoice + ". " + compare(userChoice, computerChoice))
  }
