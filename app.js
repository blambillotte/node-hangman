const startupText = require('./logic/startup');
const config = require('./config/config');
const getRandomIndex = require('./logic/randomizer');
const colors = require('colors');
const inquirer = require('inquirer');
const Game = require('./logic/game_constructor');
const Word = require('./logic/guess_word');

//Display Startup Text
startupText();

//Create a new Game object, set all values to 0
const game = new Game(0, 0, 0);

//Create a new word to guess
const word1 = new Word(getRandomIndex(config.wordsToGuess), config.maxWrongGuesses);

//Create the hint string
word1.createHintArr();

//Wait half a seccond and print the direcitons
setTimeout(function(){
  console.log(config.directions);
}, 500);

//Dislay Hint String of the Guess Word
// setTimeout(function(){
// }, 1000);


function askUser() {

  //Show Word to Guess
  console.log(`   Word to Guess: ${word1.displayString()} \n`.magenta.bold);

  inquirer.prompt([
    {
      name: "letterGuess",
      message: "Guess a Letter: ",
      validate: function (value) {
        if (value.length === 1) {
          return true;
        }

        return 'Please guess one letter at a time';
      }
    }
  ]).then(function(answer) {
    //console.log(answer);
    word1.checkGuess(answer.letterGuess);

    word1.isWordGuessed();

    //Recursive loop until game over, or word guessed
    if (word1.wrongGuessCount < word1.maxWrongGuesses && !word1.isWordGuessed()) {
      setTimeout(askUser, 500);
      console.log('________________\n')
    } else if (word1.isWordGuessed()) {
      console.log(`\n You guessed it! The word was: ${word1.currentWord.magenta} \n`);
      console.log('--------- GAME OVER ----------');

    } else {
      console.log(`\n Oh no! You're out of guesses, the word was: ${word1.currentWord.magenta} \n`);
      console.log('--------- GAME OVER ----------');
    }

    });
};


//After a second, ask for the reponses when app starts
setTimeout(askUser, 1000);
