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

// Adding event listener to start button
let startButton = document.getElementById("start");

startButton.addEventListener("click",function() {
  start = 1;
  document.getElementById("player-image").style.background = "";
  document.getElementById("computer-image").style.background = "";
  document.getElementById("start").style.display = "none";
  document.getElementById("result-area").innerText = "Make your move by choosing any of the icons";

  });
  let resetButton = document.getElementById("reset");

  resetButton.addEventListener("click",function(){
    location.reload();

  });
  //Adding Event listeners to the icons for player's choices
  rock_div.addEventListener("click",function(){
    if(start ===1);
    playerChoice("rock");
    getComputerChoice();
    game("rock");
  });

  paper_div.addEventListener("click",function(){
    if(start ===1);
    playerChoice("paper");
    getComputerChoice();
    game("paper");
  });

  scissors_div.addEventListener("click",function(){
    if(start ===1);
    playerChoice("scissors");
    getComputerChoice();
    game("scissors");
  });

  lizard_div.addEventListener("click",function(){
    if(start ===1);
    playerChoice("lizard");
    getComputerChoice();
    game("lizard");
  });

  spock_div.addEventListener("click",function(){
    if(start ===1);
    playerChoice("spock");
    getComputerChoice();
    game("spock");        
  });

// This function gives a random computer choice.
function getComputerChoice() {
    
  computerIcon = Math.floor(Math.random() * 5);
 
  switch (computerIcon) {
      case 0:
          document.getElementById('computer-image').innerText = "";
          document.getElementById('computer-image').style.background="url(assets/images/rock.png)";
          document.getElementById('computer-image').style.backgroundSize="cover";
          break;
      case 1:
          document.getElementById('computer-image').innerText = "";
          document.getElementById('computer-image').style.background="url(assets/images/paper.png)";
          document.getElementById('computer-image').style.backgroundSize="cover";
          break;
      case 2:
          document.getElementById('computer-image').innerText = "";
          document.getElementById('computer-image').style.background="url(assets/images/scissors.png)";
          document.getElementById('computer-image').style.backgroundSize="cover";
          break; 
      case 3:
          document.getElementById('computer-image').innerText = "";    
          document.getElementById('computer-image').style.background="url(assets/images/lizard.png)";
          document.getElementById('computer-image').style.backgroundSize="cover";
          break;
      case 4:
          document.getElementById('computer-image').innerText = "";
          document.getElementById('computer-image').style.background="url(assets/images/spock.png)";
          document.getElementById('computer-image').style.backgroundSize="cover";
          break;
  }
}
function playerChoice(playerIcon) {
    switch (playerIcon) {
        case "rock":
            document.getElementById('player-image').style.background="url(assets/images/rock.png)";
            document.getElementById('player-image').style.backgroundSize="cover";
            break;
        case "paper":
            document.getElementById('player-image').style.background="url(assets/images/paper.png)";
            document.getElementById('player-image').style.backgroundSize="cover";
            break;
        case "scissors":
            document.getElementById('player-image').style.background="url(assets/images/scissors.png)";
            document.getElementById('player-image').style.backgroundSize="cover";
            break; 
        case "lizard":
            document.getElementById('player-image').style.background="url(assets/images/lizard.png)";
            document.getElementById('player-image').style.backgroundSize="cover";
            break;
        case "spock":
            document.getElementById('player-image').style.background="url(assets/images/spock.png)";
            document.getElementById('player-image').style.backgroundSize="cover";
            break;
    }
  }


 



