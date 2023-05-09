const winston = require("winston");

class Logger {

  constructor() {
    this.logger.add(new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.colorize(),
        winston.format.printf(({
          level,
          message,
          timestamp
        }) => {
          return `${timestamp} [${level}]: ${message}`;
        })
      )
    }));
  }

  logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json()
    )
  });

}

module.exports = new Logger().logger;
