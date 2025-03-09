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

// Added event listener to each icon to display the message.
rock_div.addEventListener('click' , function(){
    console.log("hey you clicked on rock");
})
paper_div.addEventListener('click' , function(){
    console.log("hey you clicked on paper");
})
scissor_div.addEventListener('click' , function(){
    console.log("hey you clicked on scissor");
})
lizard_div.addEventListener('click' , function(){
    console.log("hey you clicked on lizard");
})
spock_div.addEventListener('click' , function(){
    console.log("hey you clicked on spock");
})



