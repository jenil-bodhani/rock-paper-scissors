const choices = ['Rock', 'Paper', 'Scissors'];

const computerPlay = () => choices[Math.floor(Math.random()*choices.length)];

const titleCase = string => string[0].toUpperCase() + string.slice(1).toLowerCase();

const playerSelection = titleCase((prompt("Choose rock, paper or scissors to start the game!")));

const computerSelection = computerPlay();

console.log(computerSelection + " ," + titleCase(playerSelection));

function playRound(computerSelection, playerSelection) {
    if (
        computerSelection === 'Rock' && playerSelection === 'Scissors' || 
        computerSelection === 'Paper' && playerSelection === 'Rock' || 
        computerSelection === 'Scissors' && playerSelection === 'Paper'
    ) { 
        console.log(` "You Lose! ${computerSelection} beats ${playerSelection}"`);
    } else if (
        playerSelection === 'Rock' && computerSelection === 'Scissors' || 
        playerSelection === 'Paper' && computerSelection === 'Rock' || 
        playerSelection === 'Scissors' && computerSelection === 'Paper'
    ) {
         console.log(` "You Win! ${playerSelection} beats ${computerSelection}"`);
    } else {
        console.log(`"You both played ${playerSelection}, this round is a tie"`);
    }
}

console.log(playRound(computerSelection, playerSelection));

