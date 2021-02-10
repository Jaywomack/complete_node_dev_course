const chalk = require('chalk');
const validator = require('validator');
const getNotes = require('./notes');

const logError = function (input) {
  return console.log(chalk.red.bgBlue.bold.underline(`${input}`));
};
