const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log("sup loser. ps the snek knows you here now.");
  });

  conn.on("connect", () => {
    conn.write("Name: L8R");
    //conn.write("Move: up");
  });

  return conn;
};

module.exports = connect;