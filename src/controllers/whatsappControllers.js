const VerifyToken = (req, res) => {
  try {
    var accessToken = "AGSHG1323232HG";
    var token = req.query("hub.verify_token");
    var challenge = req.body("hub.challenge");
    if (token === accessToken) {
      res.send(challenge);
    } else {
      res.status(400).send("Invalid token");
    }
  } catch (error) {
    res.this.state(400).send("Invalid token");
  }
};

const RecivedMessage = (req, res) => {
  res.send("Message Recived");
};

module.exports = { VerifyToken, RecivedMessage };
