//                       LOADING AND RENDERING                       //
window.addEventListener('load', function() {
    document.getElementById("fullScreenMenuContainer").style.display = 'grid';
    document.getElementById("body").style.overflow = 'hidden';
}, false);

window.onload=function() {
    document.getElementById("startBtn").addEventListener("click", function() {
        document.getElementById("fullScreenMenuContainer").style.display = 'none';
        document.getElementById("body").style.overflow = 'visible';
        //fades in wrapper after 2s
        setTimeout(function(){
            let wrapper = document.getElementById('wrapper');
            wrapper.classList.toggle('fadeIn');
          }, 2000);
    })
} 


//                           GAMEPLAY                                  //
const weapons = ["ROCK", "PAPER", "SCISSORS"]; //output choice array

let cpuChoice; //computers weapon variable
let randomNumber = Math.floor(Math.random() * weapons.length); //this assigns a random weapon to the computer every game
let playerChoice;
let playerScore = 0;
let computerScore = 0;

//This is the function to call for the computers random weapon
function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * weapons.length);
    cpuChoice = weapons[randomNumber];
    return cpuChoice;
}

//This function compares the two weapons and decides the winner
function checkWinner() {
    if(playerChoice === cpuChoice) {
        document.getElementById("hitScreenTitle").textContent = "You Were Evenly Matched";
        document.getElementById("hitScreenTitle").style.color= 'white';  
        document.getElementById("hitImg").src="resources/tie.gif";
    } else if (playerChoice === "ROCK" && cpuChoice === "SCISSORS") {
        document.getElementById("hitScreenTitle").textContent = "What a hit! Those Scissors Are No Match!";
        document.getElementById("hitScreenTitle").style.color= 'green';  
        document.getElementById("hitImg").src="resources/rock-win.gif";
        playerScore += 1;
    } else if (playerChoice === "ROCK" && cpuChoice === "PAPER") {
        document.getElementById("hitScreenTitle").textContent = "Oh No! You Got Trapped By Paper!";
        document.getElementById("hitScreenTitle").style.color= 'red'; 
        document.getElementById("hitImg").src="resources/paper-win.gif";
        computerScore += 1;
    } else if (playerChoice === "PAPER" && cpuChoice === "ROCK") {
        document.getElementById("hitScreenTitle").textContent = "Well Played! You Trapped The Enemy!";
        document.getElementById("hitScreenTitle").style.color= 'green'; 
        document.getElementById("hitImg").src="resources/paper-win.gif";
        playerScore += 1;
    } else if (playerChoice === "PAPER" && cpuChoice === "SCISSORS") {
        document.getElementById("hitScreenTitle").textContent = "Ouch! You Got Sliced By Scissors!";
        document.getElementById("hitScreenTitle").style.color= 'red'; 
        document.getElementById("hitImg").src="resources/scissors-win.gif";
        computerScore += 1;
    } else if (playerChoice === "SCISSORS" && cpuChoice === "PAPER") {
        document.getElementById("hitScreenTitle").textContent = "Like A Hot Knife Through Butter! What A Move!";
        document.getElementById("hitScreenTitle").style.color= 'green'; 
        document.getElementById("hitImg").src="resources/scissors-win.gif";
        playerScore += 1;
    } else if (playerChoice === "SCISSORS" && cpuChoice === "ROCK") {
        document.getElementById("hitScreenTitle").textContent = "You Brought Scissors To A Rock Fight... Bad Play!";
        document.getElementById("hitScreenTitle").style.color= 'red'; 
        document.getElementById("hitImg").src="resources/rock-win.gif";
        computerScore += 1;
    }
}

//This function updates the score on screen
function updateScore() {
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("cpuScore").textContent = computerScore;
}

//This function starts round based on weapopn clicked
let weaponBtn = document.querySelectorAll('.weapon')
weaponBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        playerChoice = (e.target.id);

        playRound();
        return playerChoice;
    });
});

//play a round
function playRound() {
    getComputerChoice();
    checkWinner(); 
    document.getElementById("playerChoice").textContent = playerChoice;
    document.getElementById("cpuChoice").textContent = cpuChoice;
    weaponAni();
}

//                                                    Different Animation Screens                                     //

//Screen changes to weapons screen
function weaponAni() {
    if (playerChoice === "ROCK") {
        document.getElementById("playerAttack").src="resources/rock-attack.gif";
    } else if (playerChoice === "PAPER") {
        document.getElementById("playerAttack").src="resources/paper-attack.gif";
    } else if (playerChoice === "SCISSORS") {
        document.getElementById("playerAttack").src="resources/scissors-attack.gif"
    }

    if (cpuChoice === "ROCK") {
        document.getElementById("cpuAttack").src="resources/rock-attack.gif";
    } else if (cpuChoice === "PAPER") {
        document.getElementById("cpuAttack").src="resources/paper-attack.gif";
    } else if (cpuChoice === "SCISSORS") {
        document.getElementById("cpuAttack").src="resources/scissors-attack.gif"
    }

    document.getElementById("fullScreenWeaponContainer").style.display = 'grid';
    document.getElementById("body").style.overflow = 'hidden';  
}

//SCreen changes to the fight scene
function fightBtn() {
    document.getElementById("fullScreenWeaponContainer").style.display = 'none';
    document.getElementById("fullScreenHitContainer").style.display = 'grid';
}

//Screen changes to the winner screen or returns to main if game not over
function nextBtn() { 
document.getElementById("hitImg").src=""; //reset gif to begining
document.getElementById("playerAttack").src=""; 
document.getElementById("cpuAttack").src="";
document.getElementById("winnerImg").src="";  

    if (playerScore >= 5) {
        document.getElementById("fullScreenHitContainer").style.display = 'none';
        document.getElementById("fullScreenWinnerContainer").style.display = 'grid';
        document.getElementById("winnerScreenTitle").textContent = "Congratulations! You have defeated the Computer!";
        document.getElementById("winnerScreenTitle").style.color= 'green'; 
        document.getElementById("winnerImg").src="resources/player-win.gif";
        playerScore = 0;
        computerScore = 0;
        updateScore();
    } else if (computerScore >= 5) {
        document.getElementById("fullScreenHitContainer").style.display = 'none';
        document.getElementById("fullScreenWinnerContainer").style.display = 'grid';
        document.getElementById("winnerScreenTitle").textContent = "Oh... You were defeated and all is lost...";
        document.getElementById("winnerScreenTitle").style.color= 'red'; 
        document.getElementById("winnerImg").src="resources/cpu-win.gif";
        playerScore = 0;
        computerScore = 0;
        updateScore();
    } else {
        updateScore();
        document.getElementById("fullScreenHitContainer").style.display = 'none';
        document.getElementById("body").style.overflow = 'visible';
    }   
}

//Returns to start after game over
function restartBtn() {
    document.getElementById("fullScreenWinnerContainer").style.display = 'none';
    document.getElementById("fullScreenMenuContainer").style.display = 'grid';
    wrapper.classList.toggle('fadeIn'); //reset opacity for fade effect
}


//                                       Audio Functions                             //

let audioFile = new Audio("resources/music.mp3");

document.getElementById("audioBtn").addEventListener("click", function() {

    if (audioBtn.classList.contains('play')) {
        audioFile.pause();
        audioBtn.classList.toggle('play');
    } else {
        audioFile.play();
        audioBtn.classList.toggle('play');
    }

});






