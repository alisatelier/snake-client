const IP = 'localhost';
const PORT = 50541;

const userName = process.argv[2] || "SNK"

const speedSettings = {
  default: 150,
  step: 50, 
  min: 50,
  max: 350,
}


const userMessages = {
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

const userMovements = {
  "w": {
    command: "Move: up",
    log: "⬆️: movin up in the world"
  },
  "a": {
    command: "Move: left",
    log: "⬅️: to the left, to the left"
  },
  "s": {
    command: "Move: down",
    log: "⬇️: down we go!"
  },
  "d": {
    command: "Move: right",
    log: "➡️: two wrongs !== a right"
  }
};

module.exports = {
  IP,
  PORT,
  userName,
  userMessages,
  userMovements,
  speedSettings,
};