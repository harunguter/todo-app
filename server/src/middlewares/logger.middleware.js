const _ = require("lodash");

const morgan = require("morgan");

const systemLogger = require("../core/Logger");

const logger = () => morgan((tokens, request, response) => {
  if (response.statusCode < 400) systemLogger.info(`API: ${tokens.status(request, response)}, ${tokens.method(request, response)} ${tokens.url(request, response)}`);
  else systemLogger.error(`API: ${tokens.status(request, response)}, ${tokens.method(request, response)} ${tokens.url(request, response)}`);
}
);


module.exports = { logger };
