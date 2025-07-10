const { userMessages } = require("./constants");

// container for message keys. Prevents message from remaining on screen
lastMessageKey = null;
messageTimeout = null;

const handleMessages = (key, connection) => {
  if (userMessages[key] && key !== lastMessageKey) {
    connection.write(userMessages[key]);
    lastMessageKey = key;
  }

  if (messageTimeout) {
    clearTimeout(messageTimeout);
  }
  messageTimeout = setTimeout(() => {
    connection.write("Say: ");
    lastMessageKey = null;
  }, 3000);
};


module.exports = handleMessages;