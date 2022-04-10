//arrayRPS is an array with the three options of rock paper and scissors
let arrayRPS = ['Rock', 'Paper', 'Scissors'];

//randomNum selects a random value between 1 and 3
function randomNum() {
  return Math.floor(Math.random() * 3);
}
//compSelection assigns the computers play using the random number
compSelection = arrayRPS[randomNum()];

button = document.querySelectorAll('button');
let playerSelection = ''
button.forEach(button => button.addEventListener('click',function(e) {
  playerSelection = button.dataset.play;
  compSelection = arrayRPS[randomNum()];
  resultsText.textContent = playRound(compSelection, playerSelection);
  wins();
  checkWins();
}
))

const container = document.querySelector('.results');
const resultsText = document.createElement('div');
resultsText.classList.add('res');
container.appendChild(resultsText);
const compDisplay = document.createElement('div');
const playerDisplay = document.createElement('div');
const winnerResult = document.createElement('div');
container.appendChild(compDisplay);
container.appendChild(playerDisplay);
container.appendChild(winnerResult);
compDisplay.textContent = 'Computer: 0';
playerDisplay.textContent = 'Player: 0';


let compWins = 0
let playerWins = 0
function wins() {
compDisplay.textContent = `Computer: ${compWins}`;
playerDisplay.textContent = `Player: ${playerWins}`;
}

function checkWins() {
    if (!winnerResult.textContent) {
        if (compWins == 5) {
            return winnerResult.textContent = "Computer Wins!";
        }
        else if (playerWins == 5) {
            return winnerResult.textContent = "Player Wins";
        }
    }
      
}
//plays one round round returning a win, loss, tie, or invalid
function playRound(compSelection, playerSelection) {   
    switch (compSelection + playerSelection) {
        case 'RockScissors':
        case 'ScissorsPaper':
        case 'PaperRock':
            compWins += 1;
            return `You lose! ${compSelection} beats ${playerSelection}.`;
            
        case 'ScissorsRock':
        case 'RockPaper':
        case 'PaperScissors':
            playerWins += 1;
            return `You win! ${playerSelection} beats ${compSelection}.`;
        case 'RockRock':
        case 'ScissorsScissors':
        case 'PaperPaper':
            return `It's a tie, try again!`;
        default:
            return `invalid` ; 
    } 
    

}









