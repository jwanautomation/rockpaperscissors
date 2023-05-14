/* --- COMPUTER CHOICE FUNCTION ---

- Math.random() - returns a random number between 0 (inclusive), and 1 (exclusive)
- Math.floor() - rounds down and returns the LARGEST integer less than or equal to a given number

*/

const getComputerChoice = () => Math.floor(Math.random() * 3) + 1;

 console.log(getComputerChoice());