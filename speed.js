const { speedSettings, setSpeed } = require("./constants.js");

let snekSpeed = speedSettings.default;


const getSnekSpeed = () => snekSpeed;

const increaseSpeed = (connection) => {
  snekSpeed -= speedSettings.step;
  if (snekSpeed < speedSettings.min) {
    snekSpeed = speedSettings.min;
  }

  console.log(setSpeed.increase);
  return snekSpeed;
};

const decreaseSpeed = (connection) => {
  snekSpeed += speedSettings.step;
  if (snekSpeed > speedSettings.max) {
    snekSpeed = speedSettings.max;
  }
  console.log(setSpeed.decrease);
  return snekSpeed;
};

const resetSpeed = () => {
  snekSpeed = speedSettings.default;
  console.log(setSpeed.reset);
  return snekSpeed;
};


module.exports = {
  getSnekSpeed,
  increaseSpeed,
  decreaseSpeed,
  resetSpeed,
};