
// GETS SCORES AS JS OBJ WHICH WAS SAVED ON LOCALSTORAGE
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScore();

// USED BECOZ IF WE TRY TOA CCESS SOMETHING WHICH WAS REMOVED THEN ERROR OCCURS AS SCORE WAS NULL AFTER REMOVING

// SO ASSIGN A DEFAULT VALUE

// if(!score){
//     score={
//         wins:0,
//         losses:0,
//         ties:0
//     };
// }

function getComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
    }
    else {
        computerMove = 'Scissors';
    }
    return (computerMove);
}

function updateScore() {
    document.querySelector('.js-scores').innerHTML =
        `Scores: Wins: ${score.wins}, Losses: ${score.losses} and Ties: ${score.ties}`;
}

document.querySelector('.rock-button').addEventListener('click',()=>{
    playGame('Rock');
})

document.querySelector('.paper-button')
    .addEventListener('click', ()=>{
        playGame('Paper');
    });

document.querySelector('.scissors-button')
    .addEventListener('click', ()=>{
        playGame('Scissors');
    });

document.body.addEventListener('keydown',(event)=>{
    if(event.key==='r'){
        playGame('Rock');
    }
    else if(event.key==='p'){
        playGame('Paper');
    }
    else if(event.key==='s'){
        playGame('Scissors');
    }
})

function playGame(playerMove) {
    const computerMove = getComputerMove();
    let result = '';

    if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'Win';
        }
        else if (computerMove === 'Paper') {
            result = 'Tie';
        }
        else if (computerMove === 'Scissors') {
            result = 'Lose';
        }
    }

    else if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
            result = 'Lose';
        }
        else if (computerMove === 'Paper') {
            result = 'Win';
        }
        else if (computerMove === 'Scissors') {
            result = 'Tie';
        }
    }

    else if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie';
        }
        else if (computerMove === 'Paper') {
            result = 'Lose';
        }
        else if (computerMove === 'Scissors') {
            result = 'Win';
        }
    }

    if (result === 'Tie') {
        score.ties += 1;
    }
    else if (result === 'Win') {
        score.wins += 1;
    }
    else if (result === 'Lose') {
        score.losses += 1;
    }

    // SAVES SCORES IN  LOCALSTORAGE AS JSON STRING

    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('.js-moves').innerHTML = `You
<img src="${playerMove}-emoji.png">
<img src="${computerMove}-emoji.png">
Computer.`;

    document.querySelector('.js-result').innerHTML = `You ${result}!`;

    updateScore();
}

// autoplay
/*
let intervalId;
let isPlaying=false;
function autoplay(){
    if(!isPlaying){
    intervalId=setInterval(()=>{
        const playerMove=getComputerMove();
        playGame(playerMove);
    },1000);
    isPlaying=true;
    }
    else{
        clearInterval(intervalId);
        isPlaying=false;
    }
}
*/