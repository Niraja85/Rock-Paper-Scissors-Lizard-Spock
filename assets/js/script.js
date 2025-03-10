// Cached the DOM so that all the variables are declared
const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rk");
const paper_div = document.getElementById("pr");
const scissor_div = document.getElementById("sr");
const lizard_div = document.getElementById("lz");
const spock_div = document.getElementById("sp");

function game(playerChoice){

}
function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissor', 'lizard', 'spock'];
    const randomNumber = (Math.floor(Math.random() * 5));
    return choices[randomNumber];   
}




function main(){
  rock_div.addEventListener('click' , function(){
    game("rock");
   })
  paper_div.addEventListener('click' , function(){
    game("paper");
   })
  scissor_div.addEventListener('click' , function(){
    game("scissor");
   })
  lizard_div.addEventListener('click' , function(){
    game("lizard");
  })
  spock_div.addEventListener('click' , function(){
    game("spock");
  })
}

main();

