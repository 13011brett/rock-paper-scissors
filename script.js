// let t = 5;
// var matches = document.querySelectorAll("p");
// matches.forEach(function func(match){
//     match.innerHTML = "New p Stuff?"; 
// });

const choices = Object.keys(Object.freeze({
    rock: 0,
    paper: 1,
    scissors: 2
}))
var computerChoice = '';

function getComputerChoice(){
    return computerChoice = choices[getRandomChoice()];
}

function getRandomChoice(){
    return Math.floor(Math.random() * (choices.length));
}
console.log(getComputerChoice());

const buttons = document.querySelectorAll('button');






