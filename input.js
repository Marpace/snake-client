const {inputs} = require("./constants");

let connection;

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = (key) => {

  if (key === "\u0003") {
    console.log("Exiting game");
    process.exit();
  }
  
  if (inputs[key]) {
    connection.write(inputs[key]);
  }
};



module.exports = {setupInput: setupInput};