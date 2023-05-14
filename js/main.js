/* --- COMPUTER CHOICE FUNCTION ---

- Math.random() - returns a random number between 0 (inclusive), and 1 (exclusive)
- Math.floor() - rounds down and returns the LARGEST integer less than or equal to a given number

*/

const getComputerChoice = () => {
  const randomInt = Math.floor(Math.random() * 3) + 1;

  if (randomInt === 1) {
    return 'Rock';
  } else if (randomInt === 2) {
    return 'Paper';
  } else if (randomInt === 3) {
    return 'Scissors';
  }
}

// console.log(getComputerChoice());

// PLAYER SELECTION FUNCTION
const getPlayerSelection = () => {
  let userInput = prompt('Type rock, paper or scissors.');
  let result = userInput.toLowerCase();
  return result;
}

// PLAY ROUND FUNCTION
function playRound(playerSelection, computerSelection) {

}
