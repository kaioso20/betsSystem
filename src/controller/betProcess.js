const mongoose = require('mongoose');
const { betSchema } = require('../db/schema/betSchema');
const { generateNumber } = require('../service/betProcess');

require('dotenv').config();

// const clientMongo = setClientMongo({ connectionString: process.env.env_mongo_key });

mongoose.connect(process.env.env_mongo_key, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to DB!'))
  .catch(error => console.log(error.message));

const saveBet = async ({ text, color, number }) => new betSchema({ text, color, number }).save();

module.exports.betProccess = async () => {
  const choosedObjectSorted = generateNumber();
  const logSaveBet = await saveBet(choosedObjectSorted);
  console.log('logSaveBet:', logSaveBet);
};
