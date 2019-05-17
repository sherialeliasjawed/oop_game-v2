/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  // Prints the blocks for the phrase.
  addPhraseToDisplay() {
    const phraseUl = document.querySelector('#phrase').firstElementChild;
    const phraseArray = this.phrase.split('');
    let html = '';

    for (let i = 0; i < phraseArray.length; i++) {
      if (phraseArray[i] === ' ') {
        html += '<li class="space"> </li>';
      } else {
        html += `<li class="hide letter ${phraseArray[i]}">${
          phraseArray[i]
        }</li>`;
      }
    }
    phraseUl.innerHTML = html;
  }

  // Checks whether the letter is part of the phrase.
  checkLetter(letter) {
    const phraseArray = this.phrase.split('');
    if (!/^\s*$/.test(letter) && phraseArray.indexOf(letter) > -1) {
      return true;
    } else {
      return false;
    }
  }

  // Shows the letter that the user selected if its part of the phrase.
  showMatchedLetter(letter) {
    const letters = document.querySelectorAll('.hide');
    if (this.checkLetter(letter)) {
      for (let i = 0; i < letters.length; i++) {
        if (letters[i].textContent === letter) {
          letters[i].className = `show letter ${letter}`;
        }
      }
    }
  }
}
