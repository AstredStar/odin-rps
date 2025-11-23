// Not allowed to use arrays, loops or anything fancy
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

function resetScore(){
    humanScore = 0;
    computerScore = 0;
}


const textOutput = document.querySelector("#textOutput");

function playRound(humanChoice){ //0=rock, 1=paper, 2=scissors
    let compChoice = getCompChoice();

    let humanRPS = numToRPS(humanChoice);
    let compRPS = numToRPS(2-compChoice);

    let winner = (humanChoice+compChoice)%3;

    let message

    switch (winner){
        case 0:
            humanScore++;
            message = `You won!<br><br>
            You threw ${humanRPS} and the computer threw ${compRPS}<br>
            Score: ${humanScore} (you), ${computerScore} (computer)`;
            break;
        case 1:
            computerScore++;
            message = `You lost..<br><br>
            You threw ${humanRPS} and the computer threw ${compRPS}<br>
            Score: ${humanScore} (you), ${computerScore} (computer)`;
            break;
        default:
            message = `You drew.<br><br>
            You threw ${humanRPS} and the computer threw ${compRPS}<br>
            Score: ${humanScore} (you), ${computerScore} (computer)`;
    }
    textOutput.innerHTML=message;

    if (humanScore==5||computerScore==5){
        if (humanScore>computerScore){
            textOutput.innerHTML+=`<br><br>You beat the computer<br>Play again?`;
        }
        else{
            textOutput.innerHTML+=`<br><br>You lost to the the computer<br>Play again?`;
        }
        resetScore()
    }
}

const btnContainer = document.querySelector("#btnContainer")
btnContainer.onclick=(event)=>{

    switch (event.target.id){
        case 'playRock': playRound(0); break;
        case 'playPaper': playRound(1); break;
        case 'playScissors': playRound(2); break;
    }
};

/*
if (humanScore>computerScore){alert(`You beat the computer ${humanScore}:${computerScore}\n${endmsg}`);}
else if (humanScore<computerScore){alert(`You lost to the the computer ${humanScore}:${computerScore}\n${endmsg}`);}
else {alert(`You drew the computer ${humanScore}:${computerScore}\n${endmsg}`);}
*/