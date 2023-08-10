let computerSelection;
let playerSelection;
let options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return options[Math.floor(Math.random() * 2)];
}