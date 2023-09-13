let randomNumber = Math.round(Math.random()*100 + 1);

let submit = document.querySelector('#subt');
let userInput = document.querySelector('#guessField');
let userGuesses = document.querySelector('.guesses');
let guessesRemain = document.querySelector('.lastResult');
let result = document.querySelector('.lowOrHi');
let startOver = document.querySelector('.resultParas');

const input = document.createElement('input');

let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Plese Enter Valid Number');
    }
    else if(guess < 1 || guess > 100){
        alert('Plese Enter Number Between 1 to 100');
    }
    else{
        //  prevGuess.push(guess);
        if(numGuess === 10){
            guessDisplay(guess);
            displayMsg(`Game Over. Number was ${randomNumber} `);
            endGame();
        }else{
            guessDisplay(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMsg(`You guesses it right`);
        endGame();
    }
    else if(guess < randomNumber){
        displayMsg(`Number is too low`);
    }
    else{
        displayMsg(`Number is too high`);
    }
}

function guessDisplay(guess){
    userInput.value = '';
    userGuesses.innerHTML += `${guess},  `;
    numGuess++;
    if(10 - numGuess >= 0){
        guessesRemain.innerHTML = `${10 - numGuess}`;
    }
    else{
        guessesRemain.innerHTML = 0;
    }
}

function displayMsg(message){
    result.innerHTML = `<h2>${message}</h2>`;
}

function newGame(){
    let newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',(e)=>{
        randomNumber = Math.round(Math.random()*100 + 1);
        userGuesses.innerHTML = '';
        numGuess = 1;
        guessesRemain.innerHTML = 10;
        userInput.removeAttribute('disabled');
        startOver.removeChild(input);
        result.innerHTML = '';
        playGame = true;
    })
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    input.type = "submit";
    input.value = "Start New Game";
    input.id = "newGame";
    startOver.appendChild(input);
    playGame = false;
    newGame();
}