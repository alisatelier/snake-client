const handleMovement = require("./movement.js");
const handleMessages = require("./messages.js")

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

// message for exiting the game via: CTRL + C and clearing the screen on first key press/
const handleUserInput = function(key) {

  if (key === '\u0003') {
    console.log("see ya!");
    process.exit();
  }

  handleMovement(key, connection, clearFirstScreen);
  handleMessages(key, connection);
};

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


// let lastDirection = null;
// let resetTimer = null;
// const handleMovement = (key) => {
//   if (userMovements[key]) {
//     connection.write(userMovements[key].command);

//     if (key !== lastDirection) {
//       console.log(userMovements[key].log);
//     }

//     clearTimeout(resetTimer);
//     resetTimer = setTimeout(() => {
//       lastDirection = null;
//     }, 2000);

//     lastDirection = key;

//   }
// };