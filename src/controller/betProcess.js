const { betSchema } = require('../db/schema/betSchema');
const { generateNumber } = require('../service/betProcess');
const { prettifyLog } = require('../utils/logPrettify');

const saveBet = async ({ text, color, number }) => new betSchema({
  text, color, number, date: new Date(),
}).save();

module.exports.betProccess = async () => {
  const logSaveBet = await saveBet(generateNumber());
  prettifyLog(logSaveBet);
};
