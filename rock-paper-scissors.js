const choices = ['Rock', 'Paper', 'Scissors'];

const computerPlay = () => choices[Math.floor(Math.random()*choices.length)];

const titleCase = string => string[0].toUpperCase() + string.slice(1).toLowerCase();

let computerSelection;
let playerSelection;
let score = 0;
let computerScore = 0;

function playRound(computerSelection, playerSelection) {
    playerSelection = titleCase((prompt("Choose rock, paper or scissors to start the game!")));

    computerSelection = computerPlay();
    console.log(computerSelection + ' ,' + playerSelection);
    if (
        computerSelection === 'Rock' && playerSelection === 'Scissors' || 
        computerSelection === 'Paper' && playerSelection === 'Rock' || 
        computerSelection === 'Scissors' && playerSelection === 'Paper'
    ) { 
        console.log(` "You Lose! ${computerSelection} beats ${playerSelection}"`);
        return computerScore += 1;

    } else if (
        playerSelection === 'Rock' && computerSelection === 'Scissors' || 
        playerSelection === 'Paper' && computerSelection === 'Rock' || 
        playerSelection === 'Scissors' && computerSelection === 'Paper'
    ) {
         console.log(` "You Win! ${playerSelection} beats ${computerSelection}"`);
         return score += 1;

    } else {
        console.log(`"You both played ${playerSelection}, this round is a tie"`);
    }
}

function game() {
    for (let i = 0; i < 20; i++) {
        playRound(computerSelection, playerSelection);
        console.log(`Your score is ${score}, computer score is ${computerScore}.`);
        if (score === 5) {
            console.log("You won the game!");
            return;
        } else if (computerScore === 5) {
            console.log("You lost the game, better luck next time!");
            return;
        }
    }
  }

console.log(game());
