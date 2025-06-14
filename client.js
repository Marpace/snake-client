const net = require("net");
const {IP, PORT} = require("./constants");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //receives incoming data from the server and logs it to the console
  conn.on("data", (data) => {
    console.log(data);
  });

  //logs a success message once connecting to the server
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: PA");
  });

  return conn;
};

module.exports = {connect};