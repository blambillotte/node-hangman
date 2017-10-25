const startupText = require('./logic/startup');
const config = require('./config/config');
const Game = require('./logic/game_constructor');
const GuessWord = require('./logic/guess_word');


//Display Startup Text
startupText();

//console.log(config.wordsToGuess);

const game = new Game(0, 0, 0);

//console.log(game);

const word1 = new GuessWord(config.wordsToGuess[0], config.maxWrongGuesses);


//console.log(word1.hintString());

word1.createHintArr();
console.log(word1.displayString());
console.log('\n');

console.log(word1);


// function checkGuess(guess) {
//   for (var i = 0; i < this.hintArr.length; i++) {
//     console.log(this.hintArr[i].value);
//   }
// }

word1.checkGuess('r');
console.log(word1.displayString());
