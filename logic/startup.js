const figlet = require('figlet');

const displayStartupText = function() {
  figlet('Hangman', function(err, data) {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
    console.log(data)
  });
}

module.exports = displayStartupText;
