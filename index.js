const { generateNumber } = require('./src/utils/numberGenerator');

const infiniteBets = () => setInterval(generateNumber, 2000);

infiniteBets();
