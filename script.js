let options = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        return "draw";
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        return "lose";
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        return "lose";
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        return "lose";
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        return "win";
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        return "win";
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        return "win";
    }

}

function game(){

    for (let i = 1; i <= 5; i++){
        playerSelection = prompt("Rock, Paper, or Scissors? ").toLowerCase();
        computerSelection = getComputerChoice();
        let x = playRound(playerSelection, computerSelection);

        if (x == "win"){
            playerScore += 1;
            console.log("Round "+ String(i) + ": win");
        } else if (x == "lose"){
            computerScore += 1;
            console.log("Round "+ String(i) + ": lose");
        } else{
            console.log("Round "+ String(i) + ": draw");
        }
    }

    console.log("Player: " + playerScore);
    console.log("CPU: " + computerScore);  
    if (playerScore < computerScore){
        console.log("You lose!");
    } else if (playerScore > computerScore){
        console.log("You win!");
    }
}
game()