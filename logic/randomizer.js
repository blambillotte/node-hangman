
const getRandomIndex = (optionArray) => {
  const randomIndex = Math.floor(Math.random() * optionArray.length);
  return optionArray[randomIndex];
}

module.exports = getRandomIndex;
