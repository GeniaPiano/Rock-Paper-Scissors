function createComputerMove() {
   const randomNumber = Math.floor(Math.random() * 3) + 1;
   if(randomNumber === 1) {
    return "rock"
     }
   else if (randomNumber === 2) {
    return "paper"
     }  
   else if (randomNumber === 3) {
    return "scissors"
}
}

function displayMoves(playersMove, computersMove){
const playersMoveDiv = document.querySelector("#players-move");
const computersMoveDiv = document.querySelector("#computers-move");
playersMoveDiv.innerHTML = `<i class="fa-solid fa-hand-${playersMove}"></i>`;
computersMoveDiv.innerHTML = `<i class="fa-solid fa-hand-${computersMove}"></i>`;
}

function displayResult (playersMove, computersMove){
    const resultDiv = document.querySelector("#result");

    if (playersMove === "paper"
        && computersMove === "paper") {
        resultDiv.innerHTML = "It's a tie! Paper ties paper";
        resultDiv.style.color = "blue";
    }
    
    else if (playersMove === "rock"
        && computersMove === "rock") {
        resultDiv.innerHTML = "It's a tie! Rock ties rock";
        resultDiv.style.color = "blue";
    }
    
    else if (playersMove === "scissors"
        && computersMove === "scissors") {
        resultDiv.innerHTML = "It's a tie! Scissors ties scissors";
        resultDiv.style.color = "blue";
    }
    
    else if (playersMove === "paper" 
           && computersMove === "rock") {
            resultDiv.innerHTML = "You won! Paper beats rock";
            resultDiv.style.color = "green";
           }
    else if (playersMove === "scissors" 
           && computersMove === "paper") {
            resultDiv.innerHTML = "You won! Scissors beats paper ";
            resultDiv.style.color = "green";
           }
    else if (playersMove === "rock" 
           && computersMove === "scissors") {
            resultDiv.innerHTML = "You won! Rock beats scissors";
            resultDiv.style.color = "green";
           }
    else if (playersMove === "rock" 
           && computersMove === "paper") {
     resultDiv.innerHTML = "You lost! Paper beats rock";
     resultDiv.style.color = "red";
           }
    else if (playersMove === "paper" 
           && computersMove === "scissors") {
     resultDiv.innerHTML = "You lost! Scissors beats paper";
     resultDiv.style.color = "red";
           }      
else if (playersMove === "scissors" 
           && computersMove === "rock") {
     resultDiv.innerHTML = "You lost! Rock beats scissors";
     resultDiv.style.color = "red";
           }       
 }

function toggleSections() {
const pageMovesDOM = document.querySelector(".page__moves")
const pageResultsDOM = document.querySelector(".page__results")
pageMovesDOM.classList.toggle("none");
pageResultsDOM.classList.toggle("none");
 }

 function startGAme(playersMove) {
    const randomMove = createComputerMove();
    toggleSections();
    displayMoves(playersMove, randomMove);
    displayResult(playersMove, randomMove);
 }