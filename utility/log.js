const winston = require("winston");

const config = {
  levels: {
    error: 0,
    warn: 1,
    data: 2,
    passed: 2,
    failed: 2,
    testcase: 2,
    info: 4,
  },
  // Font styles: bold, dim, italic, underline, inverse, hidden, strikethrough.
  // Font foreground colors: black, red, green, yellow, blue, magenta, cyan, white, gray, grey.
  // Background colors: blackBG, redBG, greenBG, yellowBG, blueBG magentaBG, cyanBG, whiteBG
  colors: {
    error: "red",
    warn: "yellow",
    data: "cyan",
    passed: "green",
    failed: "red",
    testcase: "magenta",
    info: "blue",
  },
};

winston.addColors(config.colors);

const logger = winston.createLogger({
  levels: config.levels,
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    winston.format.printf(
      (info) => `[${info.timestamp}] ${info.level}: ${info.message}`
    )
  ),
  transports: [new winston.transports.Console()],
});

module.exports = logger;
