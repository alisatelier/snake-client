const IP = process.argv[3] || 'localhost';
const PORT = 50541;

const userName = process.argv[2] || "SNK";

const speedSettings = {
  default: 150,
  step: 50,
  min: 50,
  max: 300,
};

const setSpeed = {
  increase: "🟩:  sssspeed mode: activated  :🟩",
  decrease: "🟥:    woah there lil guy      :🟥",
  reset: "🟨:      ahhh thats better     :🟨",
};

const playerEnter = `👀:  the snek knows u here now :👀`;
const playerExit = `✌🏽 :         see ya ${userName}!        :✌🏽`;

const idleMessage = '⏰:     u ded cuz u idled      :⏰\n';
const broadcastLogEnter = `🐍:     new snek gon get u     :🐍`;
const broadcastLogExit = `👋🏼:      snek ded or bye       :👋🏼`;

const broadcastLogCrash = '☠️ :   you crashed, so you ded  :☠️';
const broadcastLogHitSnake = '🕹️ :u hit another snake so u ded:🕹️';


const userMessages = {
  "1": "Say: slitherin on thru",
  "2": "Say: shedding my past & u",
  "3": "Say: ssspeedy lil snek",
  "4": "Say: das in cold blood",
  "5": "Say: watch ur tail",
  "6": "Say: hissss off",
  "7": "Say: ssssry not sssry",
  "8": "Say: NOM NOM NNOM",
  "9": "Say: ctrl + c or u ded",
  "0": "Say: who dis dangr noodl"
};

const userMovements = {
  "w": {
    command: "Move: up",
    log: "⬆️ :   movin up in the world    :⬆️"
  },
  "a": {
    command: "Move: left",
    log: "⬅️ : to the left, to the left   :⬅️"
  },
  "s": {
    command: "Move: down",
    log: "⬇️ :       down we go!          :⬇️"
  },
  "d": {
    command: "Move: right",
    log: "➡️ :   two wrongs !== a right   :➡️"
  }
};

module.exports = {
  IP,
  PORT,
  userName,
  speedSettings,
  setSpeed,
  playerEnter,
  playerExit,
  idleMessage,
  broadcastLogEnter,
  broadcastLogExit,
  broadcastLogCrash,
  broadcastLogHitSnake,
  userMessages,
  userMovements,
};