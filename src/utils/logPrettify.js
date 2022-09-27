const { log } = require('console');

module.exports.prettifyLog = (logSaveBet) => {
  log(`============ ${logSaveBet?._id} ============`);
  log(logSaveBet);
  log('========================');
};
