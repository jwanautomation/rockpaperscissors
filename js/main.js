/* --- COMPUTER CHOICE FUNCTION ---

- Math.random() - returns a random number between 0 (inclusive), and 1 (exclusive)
- Math.floor() - rounds down and returns the LARGEST integer less than or equal to a given number

*/

const getComputerChoice = () => {
  const randomInt = Math.floor(Math.random() * 3) + 1;

  if (randomInt === 1) {
    return 'rock';
  } else if (randomInt === 2) {
    return 'paper';
  } else if (randomInt === 3) {
    return 'scissors';
  }
}

// console.log(getComputerChoice());

// PLAYER SELECTION FUNCTION
const getPlayerSelection = () => {
  let userInput = prompt('Type rock, paper or scissors.');
  let result = userInput.toLowerCase();

  return result;
}

// console.log(getPlayerSelection());

// PLAY ROUND FUNCTION
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!"
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return "Player wins! Rock beats Scissors."
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return "Player wins! Scissors beats Paper."
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return "Player wins! Paper beats Rock."
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return "Computer wins! Rock beats Scissors."
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return "Computer wins! Scissors beats Paper."
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    return "Computer wins! Paper beats Rock."
  }
}

const playerSelection = getPlayerSelection();
const computerSelection = getComputerChoice();

// console.log(playRound(playerSelection, computerSelection));

function game() {
  let playerScore = 0;
  let computerScore = 0;

  // FOR LOOP
  for (let i = 0; i < 5; i++) {
    const result = playRound(playerSelection, computerSelection);

    if (result.includes("Player wins!")) {
      playerScore++;
      console.log(`Player: ${playerScore} | Computer: ${computerScore}`);
    } else if (result.includes("Computer wins!")) {
      computerScore++;
      console.log(`Player: ${playerScore} | Computer: ${computerScore}`);
    }
  };

  if (playerScore > computerScore) {
    console.log("Player wins the game!");
  } else if (playRound < computerScore) {
    console.log("Computers wins the game!");
  } else {
    console.log("The game is a tie!");
  } 
}

console.log(game());