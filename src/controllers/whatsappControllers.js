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

// const VerifyToken = (req, res) => {
//   res.send("verify token");
// };

const RecivedMessage = (req, res) => {
  res.send("Message Recived");
};

module.exports = { VerifyToken, RecivedMessage };
