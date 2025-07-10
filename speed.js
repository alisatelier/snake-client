const { speedSettings, userMovements } = require("./constants.js");

let snekSpeed = speedSettings.default;


const getSnekSpeed = () => snekSpeed;

const increaseSpeed = (connection) => {
  snekSpeed -= speedSettings.step;
  if (snekSpeed < speedSettings.min) {
    snekSpeed = speedSettings.min;
  }

  console.log("🟩: sssspeed mode: activated");
  return snekSpeed;
};

const decreaseSpeed = (connection) => {
  snekSpeed += speedSettings.step;
  if (snekSpeed > speedSettings.max) {
    snekSpeed = speedSettings.max;
  }
  console.log("🟥: woah there lil guy");
  return snekSpeed;
};

const resetSpeed = () => {
  snekSpeed = speedSettings.default;
  console.log("🟨: ahhh back to basics");
};


module.exports = {
  getSnekSpeed,
  increaseSpeed,
  decreaseSpeed,
  resetSpeed,
};