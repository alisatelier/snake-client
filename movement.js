const { userMovements, snekSpeed } = require("./constants");

let clearScreen = false;
let currentDirection = null;
let movementInterval = null;


// container for movement keys
const handleMovement = (key, connection, clearFirstScreen) => {
  if (userMovements[key]) {
    if (key !== currentDirection) {
      currentDirection = key;

      clearInterval(movementInterval);

      if (!clearScreen) {
        connection.write("Say: slither me timbers");
        setTimeout(() => {
          clearFirstScreen();
        }, 500);
        clearScreen = true;
      }

      movementInterval = setInterval(() => {
        connection.write(userMovements[key].command);
      }, snekSpeed);

      console.log(userMovements[key].log);
    }
  }
};

module.exports = handleMovement;