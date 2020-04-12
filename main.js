/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer;
scores = [0, 0]
roundScore = 0;
activePlayer = 0;

// Hide dice at the beginning of the game
document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function () {
    // Generate random number
    let dice = Math.floor(Math.random() * 6) + 1;

    // Display the dice result
    document.querySelector(`#current-${activePlayer}`).textContent = dice;

    // Display the DOMdice and show the corresponding random value;
    let diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = `./images/dice-${dice}.png`;

    // Update roundScore IF the score is not 1;
    if (dice !== 1) {
        roundScore += dice;
        document.getElementById(`current-${activePlayer}`).textContent = roundScore;
    } else {
        //Nextplayer
        nextPlayer();
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    // add current score to Global score
    scores[activePlayer] += roundScore;
    //update the UI
    document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];
    // check if player won the game
    if (scores[activePlayer] >= 10) {
        // Current player Won
        document.querySelector('.dice').style.display = 'none';
        document.querySelector(`#name-${activePlayer}`).textContent = 'winner!';
        document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
        document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
    } else {
        // Nextplayer
        nextPlayer();
    }
})

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById(`current-0`).textContent = '0';
    document.getElementById(`current-1`).textContent = '0';

    document.querySelector(`.player-0-panel`).classList.toggle('active');
    document.querySelector(`.player-1-panel`).classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';

}