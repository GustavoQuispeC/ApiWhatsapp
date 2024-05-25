const VerifyToken = (req, res) => {
  try {
    const accessToken = "AGSHG1323232HG";
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (token === accessToken) {
      res.send(challenge);
    } else {
      res.status(400).send("Invalid token");
    }
  } catch (error) {
    res.status(400).send("Invalid token");
  }
};

const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));

const RecivedMessage = (req, res) => {
  try {
    var entry = (req.body["entry"])[0];
    var changes = (entry["changes"])[0];
    var value = changes["value"];
    var messageObject = value["messages"];
    myConsole.log(messageObject);

    res.send("EVENT_RECEIVED");
  } catch (error) {
    myConsole.log(error);
    res.send("EVENT_RECEIVED");
  }
};


module.exports = { VerifyToken, RecivedMessage };
