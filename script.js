let weapons = ["Rock", "Paper", "Scissors"]; //output choice array
let computerChoice; //computers weapon variable
let randomNumber = Math.floor(Math.random() * weapons.length); //this assigns a random weapon to the computer every game
let answer;
let myChoice;
let myScore = 0;
let computerScore = 0;

//This function is to prompt for users answer and capitalizes answer and returns myChoice variable
function getMyChoice() {
    answer = prompt("Enter your weapon of choice"); //prompt for my weapon
    console.log(answer[0].toUpperCase() + answer.slice(1).toLowerCase());
    myChoice = answer[0].toUpperCase() + answer.slice(1).toLowerCase();
}

//This is the function to call for the computers random weapon
function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * weapons.length);
    computerChoice = weapons[randomNumber];
    console.log(computerChoice);
}

//These function returns the winner and tracks score
function winnerDecision() {
    if (myChoice === "Rock" && computerChoice === "Scissors") {
        alert("You win!");
        myScore += 1;
    } else if (myChoice === "Rock" && computerChoice === "Paper") {
        alert("You lose :(");
        computerScore += 1;
    } else if (myChoice === "Paper" && computerChoice === "Rock") {
        alert("You win!");
        myScore += 1;
    } else if (myChoice === "Paper" && computerChoice === "Scissors") {
        alert("You lose :(");
        computerScore += 1;
    } else if (myChoice === "Scissors" && computerChoice === "Paper") {
        alert("You win!");
        myScore += 1;
    } else if (myChoice === "Scissors" && computerChoice === "Rock") {
        alert("You lose :(");
        computerScore += 1;
    } else if (myChoice === computerChoice) {
        alert("You tied...")
    }
}

getMyChoice(answer);
getComputerChoice(randomNumber);
winnerDecision();

//This prompt is for a new game
function playAgain() {
    let result = window.confirm("The current score is " + myScore + " for you and " + computerScore + " for the computer. Do you want to play again?");
    if (result == true) {
        getMyChoice();
        getComputerChoice();
        winnerDecision();
        playAgain();
    } else {
        alert("Guess you are too scared to play again!")
    }
}
playAgain();