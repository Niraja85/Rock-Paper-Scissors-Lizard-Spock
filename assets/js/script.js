// Cached the DOM so that all the variables are declared
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
const rock_div = document.getElementById("rk");
const paper_div = document.getElementById("pr");
const scissors_div = document.getElementById("sr");
const lizard_div = document.getElementById("lz");
const spock_div = document.getElementById("sp");
let start = 0;
let computerIcon = 0;

// Adding event listener to start button
let startButton = document.getElementById("start");

startButton.addEventListener ("click", function() {
    start = 1;
    document.getElementById("player-image").style.background = "";
    document.getElementById("computer-image").style.background = "";
    document.getElementById("start").style.display = "none";
    document.getElementById("result-area").innerText = "Make your move by choosing any of the icons";
});
// Adding event listener to reset button
let resetButton = document.getElementById("reset");

  resetButton.addEventListener("click",function(){
    location.reload();

  });

  /* Adding Event listeners to the player choices
  * and adding run game functions
  */

  rock_div.addEventListener("click",function(){
    if (start ===1){
    playerChoice("rock");
    getComputerChoice();
    game("rock");
    }
  });

  paper_div.addEventListener("click",function(){
    if (start === 1){
    playerChoice("paper");
    getComputerChoice();
    game("paper");
    }
  });

  scissors_div.addEventListener("click",function(){
    if (start === 1){
    playerChoice("scissors");
    getComputerChoice();
    game("scissors");
    }
  });

  lizard_div.addEventListener("click",function(){
    if (start === 1){
    playerChoice("lizard");
    getComputerChoice();
    game("lizard");
    }
  });

  spock_div.addEventListener("click",function(){
    if (start === 1){
    playerChoice("spock");
    getComputerChoice();  
    game("spock");  
    }   
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
  
// This function shows the choices the player makes in the game area.
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
// Main game function.
function game(playerIcon){
  switch (computerIcon) {
    case 0:
    if (playerIcon == "rock"){
      resultMessage ("draw");
    } else if (playerIcon == "paper") {
      resultMessage ("rockpaper");
      userScore(); 
    } else if (playerIcon == "scissors"){
      resultMessage ("rockscissors");
      computerScore();
    } else if (playerIcon == "lizard"){
      resultMessage("rocklizard");
      computerScore();
    } else {
      resultMessage("rockspock");
      userScore();
    }
    break;
    case 1:
    if (playerIcon == "rock"){
      resultMessage("paperrock");
      computerScore();
    } else if (playerIcon == "paper"){
      resultMessage("draw");
    } else if (playerIcon == "scissors"){
      resultMessage("paperscissors");
      userScore();
    } else if (playerIcon == "lizard"){
      resultMessage("paperlizard");
      userScore();
    } else {
      resultMessage("paperspock");
      computerScore();
    }
    break;
    case 2:
    if (playerIcon == "rock"){
      resultMessage("scissorsrock");
      userScore();
    } else if (playerIcon == "paper"){
      resultMessage("scissorspaper");
      computerScore();
    } else if (playerIcon == "scissors"){
      resultMessage("draw");
    } else if (playerIcon == "lizard"){
      resultMessage("scissorslizard");
      computerScore();
    } else {
      resultMessage("scissorsspock");
      userScore();
    }
    break;
    case 3:
      if (playerIcon == "rock"){
        resultMessage("lizardrock");
        userScore();
      } else if (playerIcon == "paper"){
        resultMessage("lizardpaper");
        computerScore();
      } else if (playerIcon == "scissors"){
        resultMessage("lizardscissors");
        userScore();
      } else if (playerIcon == "lizard"){
        resultMessage("draw");
      } else {
        resultMessage("lizardspock");
        computerScore();
      }  
      break;
      case 4:
        if (playerIcon == "rock"){
          resultMessage("spockrock");
          computerScore();
        } else if (playerIcon == "paper"){
          resultMessage("spockpaper");
          userScore();
        } else if (playerIcon == "scissors"){
          resultMessage("spockscissors");
          computerScore();
        } else if (playerIcon == "lizard"){
          resultMessage("spocklizard");
          userScore();
        } else {
          resultMessage("draw");
        }  
        break; 
  }
}
/** This Function takes the outcome from the game function
 * and displays the result based on the 
 * resultMessage function.
 */

function resultMessage(resultType){
  switch(resultType){
  case "draw":
    document.getElementById("result-area").style.backgroundColor = "#77B1D4";
    document.getElementById("result-area").innerText = "Its a DRAW!!";
  break;
  case "rockpaper":
    document.getElementById("result-area").style.backgroundColor = "#80EF80";  
    document.getElementById("result-area").innerText = "Paper covers Rock. You WIN!!";  
  break;
  case "rockscissors":
    document.getElementById("result-area").style.backgroundColor = "#CD5C5C";
    document.getElementById("result-area").innerText = "Rock crushes Scissors. Computer Wins!!";
  break;  
  case "rocklizard":
    document.getElementById("result-area").style.backgroundColor = "#CD5C5C";
    document.getElementById("result-area").innerText = "Rock crushes Lizard. Computer Wins!!";
  break;  
  case "rockspock":   
    document.getElementById("result-area").style.backgroundColor = "#80EF80";  
    document.getElementById("result-area").innerText = "Spock vaporizes Rock. You WIN!!";  
  break;
  case "paperrock":
    document.getElementById("result-area").style.backgroundColor = "#CD5C5C";  
    document.getElementById("result-area").innerText = "Paper covers Rock. Computer Wins!!";    
  break;
  case "paperscissors":
    document.getElementById("result-area").style.backgroundColor = "#80EF80";  
    document.getElementById("result-area").innerText = "Scissors cut Paper. You WIN!!";  
  break;
  case "paperlizard":
    document.getElementById("result-area").style.backgroundColor = "#80EF80";  
    document.getElementById("result-area").innerText = "Lizard eats Paper. You WIN!!";  
  break;
  case "paperspock":
    document.getElementById("result-area").style.backgroundColor = "#CD5C5C";  
    document.getElementById("result-area").innerText = "Paper disproves Spock. Computer Wins!!";  
  break;
  case "scissorsrock":
    document.getElementById("result-area").style.backgroundColor = "#80EF80";
    document.getElementById("result-area").innerText = "Rock crushes Scissors. You WIN!!";
  break;  
  case "scissorspaper":
    document.getElementById("result-area").style.backgroundColor = "#CD5C5C";  
    document.getElementById("result-area").innerText = "Scissors cuts Paper. Computer Wins!!";  
  break;
  case "scissorslizard":
    document.getElementById("result-area").style.backgroundColor = "#CD5C5C";  
    document.getElementById("result-area").innerText = "Scissors decapitates Lizard. Computer Wins!!";  
  break;
  case "scissorsspock":
    document.getElementById("result-area").style.backgroundColor = "#80EF80";
    document.getElementById("result-area").innerText = "Spock smashes Scissors. You WIN!!";
  break;
  case "lizardrock":
    document.getElementById("result-area").style.backgroundColor = "#80EF80";
    document.getElementById("result-area").innerText = "Rock crushes Lizard. You WIN!!";
  break;
  case "lizardpaper":
    document.getElementById("result-area").style.backgroundColor = "#CD5C5C";
    document.getElementById("result-area").innerText = "Lizard eats Paper. Computer Wins!!";
  break;
  case "lizardscissors":
    document.getElementById("result-area").style.backgroundColor = "#80EF80";
    document.getElementById("result-area").innerText ="Scissors decapitates Lizard. You WIN!!";
  break;
  case "lizardspock":
    document.getElementById("result-area").style.backgroundColor = "#CD5C5C";
    document.getElementById("result-area").innerText = "Lizard poisons Spock. Computer Wins!!";
  break;
  case "spockrock":
    document.getElementById("result-area").style.backgroundColor = "#CD5C5C";
    document.getElementById("result-area").innerText = "Spock vaporises Rock. Computer Wins!!";
  break;
  case "spockpaper":
    document.getElementById("result-area").style.backgroundColor = "#80EF80";
    document.getElementById("result-area").innerText ="Paper disproves Spock. You WIN!!";
  break;
  case "spockscissors":
    document.getElementById("result-area").style.backgroundColor = "#CD5C5C";
    document.getElementById("result-area").innerText = "Spock smashes Scissors. Computer Wins!!";
  break;
  case "spocklizard":
    document.getElementById("result-area").style.backgroundColor = "#80EF80";
    document.getElementById("result-area").innerText ="Lizard poisons Spock. You WIN!!";
  break;

  }
}
/**
 * This function sets the score for user and computer.
 * Also when the 12 rounds are over it resets to begin game again.
 */
function userScore(){
  let yourScore = userScore_span.innerText;

  if (yourScore <=11){
    userScore_span.innerText = ++yourScore;
  } else {
    document.getElementById("result-area").innerText = "You Won! Click Reset to play again.";
        document.getElementById("result-area").style.backgroundColor = "green";
        document.getElementById("result-area").style.color = "white";
        document.getElementById("reset").style.display = "";
        document.getElementById("start").style.display = "none";
        start = 0;
  }
}
function computerScore(){
  let cScore = computerScore_span.innerText;

  if (cScore <=11) {
    computerScore_span.innerText = ++cScore; 
  } else {
    document.getElementById("result-area").innerText = "Oh You Lost. Computer wins! Click Reset to play again.";
        document.getElementById("result-area").style.backgroundColor = "red";
        document.getElementById("result-area").style.color = "white";
        document.getElementById("reset").style.display = "";
        document.getElementById("start").style.display = "none";
        start = 0;
    }
}

 



