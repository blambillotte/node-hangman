const colors = require('colors');


const Word = function(currentWord, maxWrongGuesses) {
  this.currentWord = currentWord;
  this.wordToLowercase = currentWord.toLowerCase();
  this.maxWrongGuesses = maxWrongGuesses;
  this.wrongGuessCount = 0;
}


Word.prototype.createHintArr = function() {
  const word = this.currentWord;
  let hintArray = [];

  //Create an Array of Blanks and Spaces to represent the visual Hangman "Hint" for the Word/Phrase
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== ' ') {
      let letter = new Letter('_', word[i], true);
      hintArray.push(letter);

    } else {
      let letter = new Letter(' ', word[i], false);
      hintArray.push(letter);
    }
  }
  this.hintArray = hintArray;
}

Word.prototype.displayString = function() {
  let guessString = [];

  for (let letter in this.hintArray) {
    if (this.hintArray[letter].wasGuessed) {
      guessString.push(this.hintArray[letter].displayValue);

    } else {
      guessString.push(this.hintArray[letter].placeholder);
    }
  }

  return guessString.join(' ');
}

Word.prototype.checkGuess = function(g) {
  const guess = g.toLowerCase();

  if (this.wordToLowercase.includes(guess)) {
    console.log('\n Correct Guess!'.green.bold)
    this.updateWasGuessed(guess);

  } else {
    console.log('\n Guessed Wrong'.red.bold);
    this.wrongGuessCount++;
  }

}

Word.prototype.updateWasGuessed = function(guess) {

  for (let i = 0; i < this.hintArray.length; i++) {

    if (this.hintArray[i].value === guess) {
      this.hintArray[i].wasGuessed = true;
    }
  }
}



Word.prototype.isWordGuessed = function() {

  const guessedArr = [];
  for (let i = 0; i < this.hintArray.length; i++) {
    guessedArr.push(this.hintArray[i].wasGuessed);
  }

  //Return true if the full word is guessed
  return guessedArr.every(Boolean);

}


const Letter = function(placeholder, displayValue, isLetter) {
  this.placeholder = placeholder;
  this.displayValue = displayValue;
  this.value = displayValue.toLowerCase();
  this.isLetter = isLetter;
  this.wasGuessed = false;
}



module.exports = Word;
