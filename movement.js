const { getSnekSpeed } = require("./speed.js");
const { userMovements } = require("./constants");



// container for movement keys
let clearScreen = false;
let currentDirection = null;
let movementInterval = null;

const getCurrentDirection = () => currentDirection;
const setCurrentDirection = (key) => { currentDirection = key; };

// handle player moving by single key press
const setMovementInterval = (connection, key) => {
  const move = userMovements[key];
  if (!move) return;

  clearInterval(movementInterval);

  connection.write(move.command);

  movementInterval = setInterval(() => {
    connection.write(move.command);
  }, getSnekSpeed());
};


const handleMovement = (key, connection, clearFirstScreen) => {
  if (userMovements[key]) {
    //only changes direction with new key input
    if (userMovements[key]) {


      if (key !== currentDirection) {
        currentDirection = key;

        clearInterval(movementInterval);

        // displays when first key is pressed, then timesout to clear display.
        if (!clearScreen) {
          connection.write("Say: slither me timbers");
          setTimeout(() => {
            clearFirstScreen();
          }, 750);

          clearScreen = true;
        }

        setMovementInterval(connection, key);

        console.log(userMovements[key].log);
      }
    }
  }
};

module.exports = {
  handleMovement,
  getCurrentDirection,
  setCurrentDirection,
  setMovementInterval
};