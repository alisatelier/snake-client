const { userMessages } = require("./constants");

// container for message keys
const handleMessages = (key, connection) => {
  if (userMessages[key]) {
    connection.write(userMessages[key]);
  }
};


module.exports = handleMessages;