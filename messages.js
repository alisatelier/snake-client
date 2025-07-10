const { userMessages } = require("./constants");

// container for message keys
const handleMessages = (key, connection) => {
  if (userMessages[key]) {
    connection.write(userMessages[key]);
  }

   setTimeout(() => {
      connection.write("Say: ");
    }, 1500);
};


module.exports = handleMessages;