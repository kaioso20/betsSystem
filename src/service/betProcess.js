const { sortNumber } = require('../utils/numberGenerator');
const { roulette } = require('../language/english-us.json');

module.exports.generateNumber = () => {
  const number = sortNumber();
  const sortedNumber = roulette.find(eachRoulletNumber => eachRoulletNumber.number === number);
  console.log('Número sorteado foi :', sortedNumber);
  return sortedNumber;
};
