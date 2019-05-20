/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase('stich in time saves nine'),
      new Phrase('leave no stone unturned'),
      new Phrase('broken crayons still color'),
      new Phrase('jumpy juice'),
      new Phrase('wiggle wagon')
    ];
    this.activePhrase = null;
  }

  // Initializes/resets the game.
  startGame() {
    this.missed = 0;
    const qwerty = document.querySelectorAll('.chosen, .wrong');
    for (let i = 0; i < qwerty.length; i++) {
      // Resetting disabled keys
      qwerty[i].className = 'key';
      qwerty[i].removeAttribute('disabled');
    }

    const hearts = document.querySelectorAll('.tries img');
    for (let i = 0; i < hearts.length; i++) {
      // Resetting live hearts
      hearts[i].setAttribute('src', 'images/liveHeart.png');
    }

    document.querySelector('#overlay').style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  // Grabbing a random phrase from phrases.
  getRandomPhrase() {
    const randomNumber = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomNumber];
  }

  // Handles the interaction when the user selects a key.
  handleInteraction(letterElement) {
    if (this.activePhrase.checkLetter(letterElement.textContent)) {
      letterElement.className = 'chosen';
      this.activePhrase.showMatchedLetter(letterElement.textContent);
      this.checkForWin();
    } else {
      letterElement.className = 'wrong';
      this.removeLife();
    }
    letterElement.setAttribute('disabled', true);
  }

  // Removes a life if wrong guess.
  removeLife() {
    const hearts = document.querySelectorAll('.tries img');
    if (this.missed < 4) {
      hearts[this.missed].setAttribute('src', 'images/lostHeart.png');
      this.missed++;
    } else {
      hearts[this.missed].setAttribute('src', 'images/lostHeart.png');
      this.gameOver('lost');
    }
  }

  // Checks whether the user input matches the phrase.
  checkForWin() {
    const chosenLetters = document.querySelectorAll('.show');
    if (
      chosenLetters.length ===
      this.activePhrase.phrase.replace(/\s/g, '').length
    ) {
      this.gameOver('won');
    } else {
      return null;
    }
  }

  // Checks whether the user won or lost and displays a message accordingly.
  gameOver(result) {
    const message = document.querySelector('#game-over-message');
    if (result === 'won') {
      document.querySelector('#overlay').style.display = '';
      document.querySelector('#overlay').className = 'win';
      message.innerHTML = `You won! Good job! <br> Answer: ${
        this.activePhrase.phrase
      }`;
    } else if (result === 'lost') {
      document.querySelector('#overlay').style.display = '';
      document.querySelector('#overlay').className = 'lose';
      message.innerHTML = `You lost. Better luck next time! <br> Answer: ${
        this.activePhrase.phrase
      }`;
    }
  }
}

// Creating a game.
const newGame = new Game();
