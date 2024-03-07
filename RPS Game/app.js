let userScore = 0;
let compScore = 0;
let messages = document.querySelector(`#message`);
let userScorepara = document.querySelector(`#userScore`);
let compScorepara = document.querySelector(`#compScore`);

let choices = document.querySelectorAll(".choice");

const getcompChoice = () => {
    let options = ["rock", "paper", "scissor"];
    let randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin){
        userScore++;
        userScorepara.innerHTML = userScore;
        messages.innerHTML = `Your ${userChoice} beats computer's ${compChoice} 🎉🎉`;
        messages.style.backgroundColor = '#70d6ff';
    } else {
        compScore++;
        compScorepara.innerHTML = compScore;
        messages.innerHTML = `Computer's ${compChoice} beats your ${userChoice} 😨😨`;
        messages.style.backgroundColor = '#c9ada7';
    }
};

const playGame = (userChoice) => {
    // console.log(`User Choice ${userChoice}`);
    const compChoice = getcompChoice();
    // console.log(`Compter Choice is ${compChoice}`);

    if ( userChoice === compChoice ){
        messages.innerHTML = `It's a Draw`;
        messages.style.backgroundColor = `#ffba08`;
    } else{
        let userWin = true;
        if ( userChoice === `rock` ){
            //now computer choice can be = scissors, paper
            userWin = compChoice === `scissor` ? true : false;

        } else if ( userChoice === `paper` ){
            //now computer choice can be scissors, rock
            userWin = compChoice === `rock` ? true : false;

        } else {
            //now computer can have choice rock and paper
            userWin = compChoice === `paper` ? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});