const VerifyToken = (req, res) => {
  res.send("Token is verified");
};
const RecivedMessage = (req, res) => {
  res.send("Message Recived");
};

module.exports = { VerifyToken, RecivedMessage };
