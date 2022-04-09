//arrayRPS is an array with the three options of rock paper and scissors
let arrayRPS = ['Rock', 'Paper', 'Scissors'];

//randomNum selects a random value between 1 and 3
function randomNum() {
  return Math.floor(Math.random() * 3);
}
//compSelection assigns the computers play using the random number
compSelection = arrayRPS[randomNum()];

//playerInput takes input corrects capitalization.
playerInput = 'rOck';
playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();

//plays one round round returning a win, loss, tie, or invalid
function playRound(compSelection, playerSelection) {
    switch (compSelection + playerSelection) {
        case 'RockScissors':
        case 'ScissorsPaper':
        case 'PaperRock':
            return `You lose`;
        case 'ScissorsRock':
        case 'RockPaper':
        case 'PaperScissors':
            return `You win`;
        case 'RockRock':
        case 'ScissorsScissors':
        case 'PaperPaper':
            return 'Tie';
        default:
            return `invalid` ;
    } 
    

}
let winCount = 0;
let lossCount = 0;
let tieCount = 0;

function playGame(playRound) {
    for (let i = 0; i < 5; i++) {
        compSelection = arrayRPS[randomNum()]; 
        playerInput = prompt('Type your play (Rock, Paper, or Scissors)')
        playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();
        console.log(playerSelection);
        console.log(compSelection);
        if (playRound(compSelection, playerSelection) === 'You win') {
            winCount++;
            console.log(`You won, ${playerSelection} beats ${compSelection}!`);
        }
        else if (playRound(compSelection, playerSelection) === 'You lose') {
            lossCount++;
            console.log(`You lost, ${playerSelection} loses to ${compSelection}.`)
        }
        else if (playRound(compSelection, playerSelection) === 'Tie') {
            tieCount++;
            console.log(`You both played ${compSelection}, its a tie!`);
        }
        else {
            console.log(`Enter Rock, Paper, or Scissors`);
            i--
        }
    }
    return(`You won ${winCount} games, lost ${lossCount} games, and tied ${tieCount} games.`);
}
console.log(playGame(playRound));



