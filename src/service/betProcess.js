const { sortNumber } = require('../utils/numberGenerator');
const { roulette } = require('../language/english-us.json');
const { idGenerator } = require('../utils/idGenerator');

module.exports.generateNumber = () => {
  const number = sortNumber();
  const sortedNumber = roulette.find(eachRoulletNumber => eachRoulletNumber.number === number);
  return { ...sortedNumber, _id: idGenerator() };
};
