const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
const paper = document.querySelector("#paper");
const playAgain = document.querySelector(".page__results-restart")

rock.addEventListener("click", function(){
    const randomMove = createComputerMove();
    displayMoves(this.id, randomMove);
    displayResult (this.id, randomMove);

})


scissors.addEventListener("click", function(){
    const randomMove = createComputerMove();
    displayMoves(this.id, randomMove);
    displayResult (this.id, randomMove);
})

paper.addEventListener("click", function(){
const randomMove = createComputerMove();
displayMoves(this.id, randomMove);
displayResult (this.id, randomMove);
})

playAgain.addEventListener("click", function() {
    toggleSections();
})