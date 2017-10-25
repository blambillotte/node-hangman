
const GuessWord = function(currentWord, maxWrongGuesses) {
  this.currentWord = currentWord;
  this.wordToLowercase = currentWord.toLowerCase();
  this.maxWrongGuesses = maxWrongGuesses;
  this.wrongGuessCount = 0;
}


GuessWord.prototype.createHintArr = function() {
  const word = this.currentWord;
  let hintArray = [];

  //Create an Array of Blanks and Spaces to represent the visual Hangman "Hint" for the Word/Phrase
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== ' ') {
      let letter = new Letter('_', word[i].toLowerCase(), true);
      hintArray.push(letter);

    } else {
      let letter = new Letter(' ', word[i].toLowerCase(), false);
      hintArray.push(letter);
    }
  }
  this.hintArray = hintArray;
}

GuessWord.prototype.displayString = function() {
  let guessString = [];

  for (let letter in this.hintArray) {
    if (this.hintArray[letter].wasGuessed) {
      guessString.push(this.hintArray[letter].value);

    } else {
      guessString.push(this.hintArray[letter].placeholder);
    }
  }

  return guessString.join(' ');
}

GuessWord.prototype.checkGuess = function(g) {
  const guess = g.toLowerCase();

  if (this.wordToLowercase.includes(guess)) {
    console.log('It includes the guess!!')
    this.updateWasGuessed(guess);

  } else {
    console.log('Guessed Wrong');
    this.wrongGuessCount++;
  }

}

GuessWord.prototype.updateWasGuessed = function(guess) {

  for (let i = 0; i < this.hintArray.length; i++) {

    if (this.hintArray[i].value === guess) {
      this.hintArray[i].wasGuessed = true;
    }
  }
  //console.log(this.hintArray);
}


const Letter = function(placeholder, value, isLetter) {
  this.placeholder = placeholder;
  this.value = value;
  this.isLetter = isLetter;
  this.wasGuessed = false;
}



module.exports = GuessWord;
