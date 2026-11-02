
let humanScore = 0;
let computerScore = 0;
let getRandomNumber = Math.random() * 100;
let computerChoice = getComputerChoice(getRandomNumber);
let humanChoicePrompt = prompt("Insert rock, paper or scissors");
let humanChoice = getHumanChoice(humanChoicePrompt);
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function getComputerChoice (getRandomNumber) {
    if (getRandomNumber <= 33) {
        return "Rock";
    } else if (getRandomNumber >=68) {
        return "Paper";
    } else {
        return "Scissors"
    }
};

function getHumanChoice (humanChoicePrompt) {
    return humanChoicePrompt;
};

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
    return "ITS A TIE";
} else if (humanChoice == "PAPEL" && computerChoice == "PEDRA") {
    return "YOU WIN";
} else if (humanChoice == "PEDRA" && computerChoice == "TESOURA") {
    return "YOU WIN";
} else if (humanChoice == "TESOURA" && computerChoice == "PAPEL") {
    return "YOU WIN";
} else {
    return "YOU LOOSE"
}
}



playRound(humanSelection, computerSelection);



