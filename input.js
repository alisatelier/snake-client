const { handleMovement, getCurrentDirection, setCurrentDirection, setMovementInterval } = require("./movement.js");
const handleMessages = require("./messages.js");
const { increaseSpeed, decreaseSpeed, resetSpeed } = require("./speed");
const { userMovements, playerExit } = require("./constants.js");

let connection;

// setup for interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


const handleUserInput = function(key) {

  // message for exiting the game via: CTRL + C
  if (key === '\u0003') {
    console.log(playerExit)
        process.exit();
  }

  //handles speed keys
  const dir = getCurrentDirection();
  if (key === '=' || key === '+') {
    increaseSpeed(connection);
    if (userMovements[dir]) {
      setMovementInterval(connection, dir);
    }
    return;
  }

  if (key === '-') {
    decreaseSpeed(connection);
    if (userMovements[dir]) {
      setMovementInterval(connection, dir);
    }
    return;
  }
  if (key === '.') {
    resetSpeed();
    setCurrentDirection(null);
    return;
  }

  handleMovement(key, connection, clearFirstScreen);
  handleMessages(key, connection);
};


// clears screen for first message upon moving.
let screenCleared = false;

const clearFirstScreen = () => {
  if (!screenCleared) {
    process.stdout.clearLine(0);
    connection.write("Say: ");
    screenCleared = true;
  }
};

module.exports = {
  setupInput,
};
