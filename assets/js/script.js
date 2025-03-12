// Cached the DOM so that all the variables are declared
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rk");
const paper_div = document.getElementById("pr");
const scissors_div = document.getElementById("sr");
const lizard_div = document.getElementById("lz");
const spock_div = document.getElementById("sp");

// This function gives a random computer choice.
function getComputerChoice(){
    const choices = ['ROCK', 'PAPER', 'SCISSORS', 'LIZARD', 'SPOCK'];
    const randomNumber = (Math.floor(Math.random() * 5));
    return choices[randomNumber];   
}
function Win(playerChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const playerWord = "player".fontsize(3);
    result_p.innerHTML = `${(playerChoice)}(player) beats ${(computerChoice)}(comp). You WON !!`;
}
function Lose(playerChoice, computerChoice){
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${(playerChoice)} loses to ${(computerChoice)}. You LOST !!`;
}

function Draw(playerChoice, computerChoice){
  result_p.innerHTML = `${(playerChoice)} and  ${(computerChoice)}. Its a DRAW!!`;

}

 



function game(playerChoice){
    const computerChoice = getComputerChoice();
switch (playerChoice + computerChoice){
    case "ROCKSCISSORS":
    case "ROCKLIZARD":
    case "PAPERROCK":
    case "PAPERSPOCK":
    case "SCISSORSPAPER":
    case "SCISSORSLIZARD":
    case "LIZARDPAPER":
    case "LIZARDSPOCK":
    case "SPOCKSCISSORS":
    case "SPOCKROCK":
        Win(playerChoice, computerChoice);
    break;
    case "SCISSORSROCK":
    case "LIZARDROCK":
    case "ROCKPAPER":
    case "SPOCKPAPER":
    case "PAPERSCISSORS":
    case "LIZARDSCISSORS":
    case "PAPERLIZARD":
    case "SPOCKLIZARD":
    case "SCISSORSSPOCK":
    case "ROCKSPOCK":
        Lose(playerChoice, computerChoice);
    break;
    case "ROCKROCK":
    case "PAPERPAPER":
    case "SCISSORSSCISSORS":
    case "LIZARDLIZARD":
    case "SPOCKSPOCK":
        Draw(playerChoice, computerChoice);
    break;                                                           

}
    
}    

function main(){
  rock_div.addEventListener('click' , function(){
    game("ROCK");
   })
  paper_div.addEventListener('click' , function(){
    game("PAPER");
   })
  scissors_div.addEventListener('click' , function(){
    game("SCISSORS");
   })
  lizard_div.addEventListener('click' , function(){
    game("LIZARD");
  })
  spock_div.addEventListener('click' , function(){
    game("SPOCK");
  })
}

main();

