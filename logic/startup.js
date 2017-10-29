const figlet = require('figlet');
const colors = require('colors');

const displayStartupText = function() {
  figlet('Hangman', function(err, data) {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
    console.log(data.green);
  });
}

module.exports = displayStartupText;
