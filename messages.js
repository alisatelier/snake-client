const { userMessages } = require("./constants");

// container for message keys. Prevents message from remaining on screen
lastMessageKey = null;

const handleMessages = (key, connection) => {
  if (userMessages[key] && key !== lastMessageKey) {
    connection.write(userMessages[key]);
    lastMessageKey = key;
  }

   setTimeout(() => {
      connection.write("Say: ");
    }, 5000);
};


module.exports = handleMessages;