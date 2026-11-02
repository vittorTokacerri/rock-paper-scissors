


let humanScore = 0;
let computerScore = 0;


function playGame() {

    function playRound(humanSelection, computerSelection) {

        function getComputerChoice() {
            let getRandomNumber = Math.random() * 100;

            if (getRandomNumber <= 33) {
                return "ROCK";
            } else if (getRandomNumber >= 68) {
                return "PAPER";
            } else {
                return "SCISSORS"
            }
        };

        function getHumanChoice() {
            let choicePrompt = prompt("Insert rock, paper or scissors");

            return choicePrompt.toUpperCase();
        };

        computerSelection = getComputerChoice();
        humanSelection = getHumanChoice();


        if (humanSelection === "PAPER" && computerSelection === "ROCK") {
            humanScore += 1;
            return "YOU WIN";
        } else if (humanSelection === "ROCK" && computerSelection === "SCISSORS") {
            humanScore += 1;
            return "YOU WIN";
        } else if (humanSelection === "SCISSORS" && computerSelection === "PAPER") {
            humanScore += 1;
            return "YOU WIN";
        } else if (humanSelection === computerSelection) {
            return "ITS A TIE";
        } else {
            computerScore += 1;
            return "YOU LOOSE";
        }
    };


    console.log(playRound());
    console.log(humanScore);
    console.log(computerScore);

};




playGame();
playGame();
playGame();
playGame();
playGame();




