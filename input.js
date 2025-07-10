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

// message for exiting the game via: CTRL + C 
const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log("see ya!");
    process.exit();
  }

 
  handleMovement(key);
  handleMessages(key);
};

// container for movement keys
const handleMovement = (key) => {
  switch (key) {
    case 'w':
      connection.write("Move: up");
      console.log("moving up in the world");
      break;
    case 'a':
      connection.write("Move: left");
      console.log("to the left, to the left");
      break;
    case 's':
      connection.write("Move: down");
      console.log("down we go!");
      break;
    case 'd':
      connection.write("Move: right");
      console.log("two wrongs !== a right");
      break;
  }
};

// container for message keys
const handleMessages = (key) => {
  const messages = {
    "1": "Say: slitherin on thru",
    "2": "Say: shedding my past & u",
    "3": "Say: ssspeedy lil snek",
    "4": "Say: das in cold blood",
    "5": "Say: watch your tail",
    "6": "Say: hissss off",
    "7": "Say: ssssry not sssry",
    "8": "Say: NOM NOM NNOM",
    "9": "Say: ctrl + c or u ded",
    "0": "Say: who dis dangr noodl"
  };
  if (messages[key]) {
    connection.write(messages[key]);
  }
};





module.exports = {
  setupInput,
};