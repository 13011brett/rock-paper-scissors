// let t = 5;
// var matches = document.querySelectorAll("p");
// matches.forEach(function func(match){
//     match.innerHTML = "New p Stuff?"; 
// });

const buttons = document.querySelectorAll('button');
const output = document.querySelector('#text');
const compOutput = document.querySelector('#comp');

const choices = Object.keys(Object.freeze({
    Rock: 0,
    Paper: 1,
    Scissors: 2
}))
var computerChoice = '';

function getComputerChoice(){
    computerChoice = choices[getRandomChoice()];
    compOutput.innerHTML = "The Computer has selected " + computerChoice;
}

function getRandomChoice(){
    return Math.floor(Math.random() * (choices.length));
}




for(let i = 0; i < buttons.length; i++ ){
    buttons[i].addEventListener("click", function(){
        output.innerHTML = 'You Clicked ' + buttons[i].textContent;
        getComputerChoice();
        // compOutput.innerHTML = getComputerChoice();
        // computerChoice = compOutput.innerHTML;
    });
}








