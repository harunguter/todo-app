const morgan = require('morgan');

const systemLogger = require('../core/Logger');

const logger = () => morgan((tokens, request, response) => {
  const log = `API: ${tokens.status(request, response)}, ${tokens.method(request, response)} ${tokens.url(request, response)}`;
  return response.statusCode < 400 ? systemLogger.info(log) : systemLogger.error(log);
});

module.exports = { logger };
