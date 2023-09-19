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


const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));