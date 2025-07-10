let connection;
const { userMessages, userMovements } = require("./constants");

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

// message for exiting the game via: CTRL + C 
const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log("see ya!");
    process.exit();
  }


  handleMovement(key);
  handleMessages(key);
};

loggedMovements = new Set();

// container for movement keys
const handleMovement = (key) => {
  if (userMovements[key]) {
    connection.write(userMovements[key].command);

    if (!loggedMovements.has(key)) {
      console.log(userMovements[key].log);
      loggedMovements.add(key);
    }
  }
};
// container for message keys
const handleMessages = (key) => {
  if (userMessages[key]) {
    connection.write(userMessages[key]);
  }
};





module.exports = {
  setupInput,
};