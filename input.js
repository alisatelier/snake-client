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
  if(key === `w`){
     connection.write("Move: up")
     console.log("moving up in the world")
  }
  if(key === `a`){
     connection.write("Move: left")
     console.log("to the left, to the left")
  }
  if(key === `s`){
     connection.write("Move: down")
     console.log("down we go!")
  }
  if(key === `d`){
     connection.write("Move: right")
     console.log("two wrongs !== a right")
  }
 
   
};


module.exports = {
  setupInput,
};