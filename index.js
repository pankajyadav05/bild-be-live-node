const readline = require("readline");
const chalk = require("chalk");

const log = console.log;

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask a question
rl.question("What is your name? ", (name) => {
  log(chalk.blue("Hello, ") + chalk.bgBlue.bold(name));
  rl.close();
});
