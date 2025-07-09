const connect = require("./client.js");

console.log("Connecting...");

// setup for interface to handle user input from stdin
const setupInput = function() {
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
};

connect();
setupInput();