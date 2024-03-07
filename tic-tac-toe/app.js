let boxes = document.querySelectorAll(`.box`);
let resetButton = document.querySelector(`#reset`);
let message = document.querySelector(`.message`);
let paragraph = document.querySelector(`#messageWinner`);
let newGamebutton = document.querySelector(`#newGame`);
let drawGame = document.querySelector(".drawGame");

let playerO = true; 
let winningPatterns = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],
];

let counter = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (playerO) {
            box.innerHTML = 'O';
            box.style.color = '#ff4d6d';
            playerO = false;
        } else {
            box.innerHTML = 'X';
            box.style.color = '#5a189a';
            playerO = true;
        }
        box.disabled = true;
        counter++;

        let isWinner = checkWinner();
        if (counter === 9 && !isWinner){
            gameDrawFun();
        }

    })
});

const gameDrawFun = () => {
    drawGame.classList.remove("hide");
    disableBoxes();
};

const resetGame = () =>{
    playerO = true;
    counter = 0;
    enableboxes();
    message.classList.add("hide");
    drawGame.classList.add("hide");
}

const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
};

const enableboxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
};

const showWinner = (winner) => {
    paragraph.innerHTML = `Congrats !! Winner is ${winner}`;
    message.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for ( let pattern of winningPatterns ){
        let poss1Value = boxes[pattern[0]].innerHTML;
        let poss2Value = boxes[pattern[1]].innerHTML;
        let poss3Value = boxes[pattern[2]].innerHTML;

        if ( poss1Value != '' && poss2Value != '' && poss3Value != '' ){
            if ( poss1Value == poss2Value && poss2Value == poss3Value ){
                // console.log("Winner", poss1Value);
                showWinner(poss1Value);
            }
        }
    }
};

resetButton.addEventListener("click" , resetGame);
newGamebutton.addEventListener("click" , resetGame);