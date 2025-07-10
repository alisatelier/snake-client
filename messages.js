const { userMessages } = require("./constants");

// container for message keys

lastMessageKey = null;

const handleMessages = (key, connection) => {
  if (userMessages[key] && key !== lastMessageKey) {
    connection.write(userMessages[key]);
    lastMessageKey = key;
  }

   setTimeout(() => {
      connection.write("Say: ");
    }, 3000);
};


module.exports = handleMessages;