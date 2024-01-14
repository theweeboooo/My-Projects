let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");

const msg = document.getElementById("msg");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const i = Math.floor(Math.random() * 3);
    return options[i];
}

const drawGame = () => {
    msg.textContent = "Game was draw";
}

const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin){
        userScore++;
        msg.textContent = `You Win! ${userChoice} beats ${compChoice}`;
        userScorePara.textContent = userScore;
    }
    else{
        compScore++;
        msg.textContent = `You lose. ${compChoice} beats ${userChoice}`;
        compScorePara.textContent = compScore;
        
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice , compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});
