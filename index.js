const mongoose = require('mongoose');
const { betProccess } = require('./src/controller/betProcess');
require('dotenv').config();

const betProccessWithMongo = async () => {
  await mongoose.connect(process.env.env_mongo_key, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('Connected to MongoDB!'))
    .catch(error => console.log(error.message));

  setInterval(async () => betProccess(), process.env.env_time_bet);
};

const infiniteBets = () => betProccessWithMongo();

infiniteBets();
