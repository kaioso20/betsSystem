const { betProccess } = require('./src/controller/betProcess');

const infiniteBets = () => setInterval(async () => betProccess(), 2000);

infiniteBets();
