const { v4 } = require('uuid');

module.exports.idGenerator = () => `${v4()}-TIME-${new Date().getTime()}`;
