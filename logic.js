// Not allowed to use arrays, loops or anything fancy

function getHumanChoice(){
    let inp = prompt("Rock, Paper, or Scisors?")
    inp = inp.toLowerCase()
    switch(inp){
        case "rock":
        case "r":
        case "1":
            inp = 0;
            break;
        case "paper":
        case "p":
        case "2":
            inp = 1;
            break;
        case "scissors":
        case "scissor":
        case "scisors":
        case "scisor":
        case "sissors":
        case "sissor":
        case "sisors":
        case "sisor":
        case "cissors":
        case "cissor":
        case "cisors":
        case "cisor":
        case "s":
        case "3":
            inp = 2;
            break;

        default:
            inp = 3;
            break;
    }
    return inp
}

let humanScore = 0;
let computerScore = 0;

function getCompChoice(){
    return Math.floor(Math.random()*3);
}

function numToRPS(num){
    let out = '';
    switch (num){
        case 0:
            out = "rock";
            break;
        case 1:
            out = "paper";
            break;
        case 2:
            out = "scissors";
            break;
        default:
            throw new Error("Unexpected value in numToRPS");
    }
    return out;
}

function playRound(){
    let humanChoice = getHumanChoice();
    let compChoice = getCompChoice();

    let humanRPS = numToRPS(humanChoice);
    let compRPS = numToRPS(2-compChoice);

    let winner = (humanChoice+compChoice)%3;

    let message

    switch (winner){
        case 0:
            humanScore++;
            message = `You won!\n
            You threw ${humanRPS} and the computer threw ${compRPS}
            Score: ${humanScore} (you), ${computerScore} (computer)`;
            break;
        case 1:
            computerScore++;
            message = `You lost..\n
            You threw ${humanRPS} and the computer threw ${compRPS}
            Score: ${humanScore} (you), ${computerScore} (computer)`;
            break;
        default:
            message = `You drew.\n
            You threw ${humanRPS} and the computer threw ${compRPS}
            Score: ${humanScore} (you), ${computerScore} (computer)`;
    }
    alert(message);
}

function playGame(){
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    let endmsg = "To play again, please refresh."

    if (humanScore>computerScore){alert(`You beat the computer ${humanScore}:${computerScore}\n${endmsg}`);}
    else if (humanScore<computerScore){alert(`You lost to the the computer ${humanScore}:${computerScore}\n${endmsg}`);}
    else {alert(`You drew the computer ${humanScore}:${computerScore}\n${endmsg}`);}
}

playGame()