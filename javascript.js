let playerPoints = 0;
let computerPoints = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) =>{
        game(button.id)
        if (playerPoints == 5 || computerPoints == 5){
            let score = "The final score is: " + playerPoints + " - " + computerPoints;
            gameResult.textContent = score;
            container.appendChild(gameResult);
        }
    });
});

const container = document.querySelector("#results")

const roundResult = document.createElement('h2')
roundResult.classList.add('roundResult')
    
const gameResult = document.createElement("h2");
gameResult.classList.add('gameResult');



function computerPlay(){
    let computerInput;
    let randomNumber = Math.random();
    if (randomNumber < 0.33) {
        computerInput = "rock";
    }
    else if (randomNumber >= 0.33 && randomNumber < 0.66) {
        computerInput = "paper";
    }
    else {
        computerInput = "scissors";
    }
    return computerInput;
}
function playGame(playerChoice, computerChoice){
    if (playerChoice == "rock"){
        if (computerChoice == "rock") {
            return ["It's a tie, since you both chose " + playerChoice, "tie"];
        }
        else if (computerChoice == "paper") {
            return ["You lose, since " + computerChoice + " beats " + playerChoice, "loss"];
        }

        else if (computerChoice == "scissors"){
            return ["You win, since " + playerChoice + " beats " + computerChoice, "win"];
        }
    }
    else if (playerChoice == "paper") {
        if (computerChoice == "rock") {
            return ["You win, since " + playerChoice + " beats " + computerChoice, "win"];
        }
        else if (computerChoice == "paper") {
            return ["It's a tie, since you both chose " + playerChoice, "tie"];
        }

        else if (computerChoice == "scissors"){
            return ["You lose, since " + computerChoice + " beats " + playerChoice, "loss"];
        }
    }
    else if (playerChoice == "scissors"){
        if (computerChoice == "rock") {
            return ["You lose, since " + computerChoice + " beats " + playerChoice, "loss"];
        }
        else if (computerChoice == "paper") {
            return ["You win, since " + playerChoice + " beats " + computerChoice, "win"];
        }

        else if (computerChoice == "scissors"){
            return ["It's a tie, since you both chose " + playerChoice, "tie"];
        }
    }
}

function game(playerButton){
    
    let playerSelection = playerButton;
    let computerSelection = computerPlay();
    playerSelection = playerSelection.toLowerCase();
    let gameResult = playGame(playerSelection, computerSelection);
    let gameMessage = gameResult[0];
    let result = gameResult[1];
    roundResult.textContent = gameMessage;
    container.appendChild(roundResult);
    if (result == "win") {
        playerPoints++;
    }
    else if (result == "loss"){
        computerPoints++;
    }
}


