const playerText = document.querySelector('#playerText');
const ComputerText = document.querySelector('#ComputerText');
const resultText = document.querySelector('#resultText');
const choiceBtns = document.querySelectorAll('.choiceBtn');
let player;
let computer;
let result;


choiceBtns.forEach(button => button.addEventListener('click', () => {
    player = button.textContent;
    computerTern();
    playerText.textContent = `player : ${player}`;
    ComputerText.textContent = `computer : ${computer}`;
    resultText.textContent = checkWinner();

}))

function computerTern() {
    let ranNum = Math.floor(Math.random() * 3) + 1;

    switch(ranNum) {
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;            
    }
}

function checkWinner() {
    if (player == computer) {
        return "Tie!"
    } 
    else if (computer == 'ROCK') {
        return (player == 'PAPER') ? "You win!" : "You Lose!"; 
    } 
    else if (computer == 'PAPER') {
        return (player == 'SCISSORS') ? "You win!" : "You Lose!"; 
    } 
    else if (computer == 'SCISSORS') {
        return (player == 'ROCK') ? "You win!" : "You Lose!"; 
    }
}

console.log("This is Vishal")