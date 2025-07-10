const net = require("net");
const { IP, PORT, userName } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log("sup. the snek knows you here now.");
  });

  conn.on("connect", () => {
    conn.write(`Name: ${userName}`);

  });

  return conn;
};

module.exports = connect;