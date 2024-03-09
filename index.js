const readline = require("readline");
const chalk = require("chalk");

const log = console.log;

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask a question
rl.question(
  "You are an aspiring adventurer seeking fame and fortune in the mystical land of Arcadia. While exploring an ancient ruin, you stumble upon a glowing amulet buried deep within a crypt. As you pick it up, a disembodied voice echoes through the chamber: \r\n \r\nBeware, foolish mortal, for you now carry the Cursed Amulet of Zothron. Only by completing three trials can you break the curse and claim its power. Choose wisely, for your decisions will shape your destiny. \r\n",
  (name) => {
    log(chalk.blue("Hello, ") + chalk.bgBlue.bold(name));
    rl.close();
  }
);
