// let t = 5;
// var matches = document.querySelectorAll("p");
// matches.forEach(function func(match){
//     match.innerHTML = "New p Stuff?"; 
// });

const buttons = document.querySelectorAll('button');
const output = document.querySelector('#text');
const compOutput = document.querySelector('#comp');
var result = document.querySelector("#status");
var tries = document.querySelector("#tries");
var playScore = document.querySelector("#scoreplayer");
var compScore = document.querySelector("#scorecomp");




const choices = Object.keys(Object.freeze({
    Rock: 0,
    Paper: 1,
    Scissors: 2
}))
var playerChoice = '';
var computerChoice = '';
var playerPoints = 0;
var computerPoints = 0;
var remainingTurns = 10;

playScore.innerHTML = playerPoints;
tries.innerHTML = remainingTurns;
compScore.innerHTML = computerPoints;

function getComputerChoice(){
    computerChoice = choices[getRandomChoice()];
    compOutput.innerHTML = "The Computer has selected " + computerChoice;
}

function getRandomChoice(){
    return Math.floor(Math.random() * (choices.length));
}

function checkWinner(player, computer){

    result.innerHTML = '';
    if(player === computer){
        result.innerHTML = "It was a draw!"
        return false;
    }
    
    
    switch(player){


        case 'Rock':
            if(computer === "Scissors"){
                playerPoints++;
                return true;
            }

            if(computer === 'Paper'){
                computerPoints++;
                return false;
            }

            break;

        case 'Paper':

            if(computer === "Rock"){
                playerPoints++;
                return true;
            }

            if(computer === 'Scissors'){
                computerPoints++;
                return false;
            }

            break;

        case 'Paper':

            if(computer === "Rock"){
                playerPoints++;
                return true;
            }

            if(computer === 'Scissors'){
                computerPoints++;
                return false;
            }

            break;


    }



}


// Main execution.
for(let i = 0; i < buttons.length; i++ ){
    buttons[i].addEventListener("click", function(){
        playerChoice = buttons[i].textContent;
        output.innerHTML = 'You Clicked ' + playerChoice;
        getComputerChoice();
        var winner = checkWinner(playerChoice, computerChoice);
        if(result.innerHTML === '') !winner ? result.innerHTML = 'You have lost the duel...' : result.innerHTML = 'You have won, this time.'; 
        remainingTurns--;
        playScore.innerHTML = playerPoints;
        compScore.innerHTML = computerPoints;
        tries.innerHTML = remainingTurns;
        if(remainingTurns <= 0){
            (buttons.forEach(function myFunction(button){
                button.remove();
            }));


            
        }
        
    });
}








