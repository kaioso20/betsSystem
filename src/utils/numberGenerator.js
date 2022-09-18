const { sortNumber } = require('../controller/betProcess');
const { roulette } = require('../language/english-us.json');
const { results } = require('../data/rouletteResults.json');

module.exports.generateNumber = () => {
  const number = sortNumber();
  const sortedNumber = roulette.find(eachRoulletNumber => eachRoulletNumber.number === number);
  results.push(sortedNumber);
  console.log('Número sorteado foi :', sortedNumber);
  return sortedNumber;
};
