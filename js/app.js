/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startButton = document.querySelector('#btn__reset');
const qwerty = document.querySelectorAll('.key');
const game = new Game();

// Adding an event listener to the start button to start the game.
startButton.addEventListener('click', () => {
  game.startGame();
});

// Adding event listeners to each individual key on the on-screen keyboard.
for (let i = 0; i < qwerty.length; i++) {
  qwerty[i].addEventListener('click', function() {
    game.handleInteraction(this);
  });
}
