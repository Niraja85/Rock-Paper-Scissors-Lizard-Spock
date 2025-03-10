// Cached the DOM so that all the variables are declared
const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rk");
const paper_div = document.getElementById("pr");
const scissors_div = document.getElementById("sr");
const lizard_div = document.getElementById("lz");
const spock_div = document.getElementById("sp");

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomNumber = (Math.floor(Math.random() * 5));
    return choices[randomNumber];   
}
function game(playerChoice){
    const computerChoice = getComputerChoice();
switch (playerChoice + computerChoice){
    case "rockscissors":
    case "rocklizard":
    case "paperrock":
    case "paperspock":
    case "scissorspaper":
    case "scissorslizard":
    case "lizardpaper":
    case "lizardspock":
    case "spockscissors":
    case "spockrock":
        console.log("YOU WIN.")
    break;
    case "scissorsrock":
    case "lizardrock":
    case "rockpaper":
    case "spockpaper":
    case "paperscissors":
    case "lizardscissors":
    case "paperlizard":
    case "spocklizard":
    case "scissorsspock":
    case "rockspock":
        console.log("YOU LOSE.");
    break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
    case "lizardlizard":
    case "spockspock":
        console.log("IT'S A DRAW.");
    break;                                                           

}
    
}    


function main(){
  rock_div.addEventListener('click' , function(){
    game("rock");
   })
  paper_div.addEventListener('click' , function(){
    game("paper");
   })
  scissors_div.addEventListener('click' , function(){
    game("scissors");
   })
  lizard_div.addEventListener('click' , function(){
    game("lizard");
  })
  spock_div.addEventListener('click' , function(){
    game("spock");
  })
}

main();

