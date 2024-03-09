const readline = require("readline");
const chalk = require("chalk");

const log = console.log;

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask a question
rl.question("What is your name? \r\n(Next Line)\r\n", (name) => {
  log(chalk.blue("Hello, ") + chalk.bgBlue.bold(name));
  rl.close();
});
