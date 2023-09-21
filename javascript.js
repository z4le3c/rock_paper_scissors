// randomly returns 'Rock', 'Paper' or 'Scissors'
function getComputerChoice() {
    rnumber = Math.floor(Math.random() * 3)
    let choice;
    switch (rnumber) {
        case 0:
            choice = 'Rock';
            break;
        case 1:
            choice = 'Scissors';
            break;
        case 2:
            choice = 'Paper';
            break;
    }

    return choice;
}

function playRound(playerSelection, computerSelection) {
    function serialize(choice) {
        choice = choice.toLowerCase();
        switch (choice) {
            case 'rock':
                return 0;
            case 'scissors':
                return 1;
            case 'paper':
                return 2;
        }
    }

    let nPlayerChoice = serialize(playerSelection);
    let nComputerChoice = serialize(computerSelection);

    if (nPlayerChoice == nComputerChoice) {
        return 'Is a tie!'
    } else if ((nPlayerChoice + 1) % 3 == nComputerChoice) {
        return `You win!, ${playerSelection} beats ${computerSelection}`
    } else {
        return `You lose!, ${computerSelection} beats ${playerSelection}`
    }
}

let computerScore = 0;
let playerScore = 0;
let round = 1;
const buttons = document.querySelectorAll('button');
const resultP = document.querySelector('#result');
const scoreP = document.querySelector('#score');
const winnerP = document.querySelector('#winner');
buttons.forEach(b => {
    b.addEventListener('click', () => {
        let result = playRound(b.textContent, getComputerChoice());
        resultP.textContent = result;
        if (result.search('win') != -1) {
            playerScore++;
        } else if (result.search('lose') != -1) {
            computerScore++;
        }
        scoreP.textContent = `Score: Computer ${computerScore}, Player ${playerScore}`;
        if (computerScore == 5 || playerScore == 5) {
            let message;
            if (playerScore > computerScore) {
                message = 'You win';
            } else if (computerScore > playerScore) {
                message = 'The computer wins';
            } else {
                message = 'Its a draw';
            }
            winnerP.textContent = message;
        }
    });
});